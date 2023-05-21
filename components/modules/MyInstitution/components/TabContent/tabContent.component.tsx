import { Search } from '@easy-eva-icons/react'
import { PersonAdd, DownloadOutlined } from '@mui/icons-material'
import { CircularProgress, IconButton } from '@mui/material'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import Input from 'components/atoms/CustomInput'
import MoreMenu from 'components/atoms/MoreMenu'
import Select from 'components/atoms/Select'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import messages from 'components/modules/Invites/invite.messages'
import { InputProps } from 'components/molecules/Filter/filter.model'
import TableDataInstitution from 'components/molecules/TableDataMyInstitution'
import { MY_INSTITUTION_PERMISSIONS } from 'constants/permissions'
import { PROFILES } from 'constants/profiles'
import { useAppContext } from 'context/appContext'
import { useMediaQuery } from 'hooks/use-media-query'
import { formatData, optionsForSelect } from 'utils/helpers/edit-content'

import { TabContentStyles, TabContentGlobalStyles } from './tabContent.styles'
import institutionMessages from '../../myInstitution.messages'
import { ProfileProps } from '../../myInstitution.model'

const { invitation, member } = MY_INSTITUTION_PERMISSIONS
const { colors, mediaQueries } = theme
const pathname = '/my-institution/invitation/[profile]'

const TabContentComponent = ({
  profile,
  data,
  pageChange,
  deleteUser,
  listStatus,
  subscriptionList,
  isLoading,
  isDownloading,
  onDownload,
}: ProfileProps) => {
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const intl = useIntl()
  const router = useRouter()

  const { permissions } = useAppContext()
  const [invitationAuth, downloadAuth] = [
    permissions[invitation.view],
    permissions[member.report.download],
  ]

  const intlProfile = intl.formatMessage(PROFILES[profile as keyof typeof PROFILES])

  const msg = {
    notEmail: intl.formatMessage(messages.myInstitution.data.emailNotAvailable),
    guestUser: intl.formatMessage(messages.myInstitution.data.guestUser),
    registeredUser: intl.formatMessage(messages.myInstitution.data.registeredUser),
  }

  const inviteRoute = () => void router.push({ pathname, query: { profile } })

  const searchInput: InputProps = {
    name: 'search',
    label: String(intl.formatMessage(messages.search.label)),
    placeholder: String(intl.formatMessage(messages.search.placeholder, { isTablet })),
    isClearable: true,
    iconPosition: 'left',
    size: 'small',
    icon: <Search fontSize={16} />,
    visible: true,
  }

  const stateSelect = {
    name: 'state',
    label: String(intl.formatMessage(messages.select.label).toUpperCase()),
    placeholder: String(intl.formatMessage(messages.select.placeholder)),
    isClearable: true,
    size: 'small',
    options: optionsForSelect(listStatus),
    visible: true,
  }

  const subscriptionSelect = {
    name: 'subscriptionId',
    label: intl.formatMessage(institutionMessages.filter.select.label),
    placeholder: intl.formatMessage(institutionMessages.filter.select.placeholder),
    isClearable: true,
    size: 'small',
    options: subscriptionList,
    visible: true,
  }

  const handleDownload = () => {
    void onDownload(true)
  }

  const rows = formatData(data, msg.notEmail, msg.guestUser, msg.registeredUser)
  return (
    <>
      <div className="tabPanel__card">
        <div className="tabPanel__card__header">
          <span>
            <Typography variant="h6" color={colors.primary[500]}>
              {intlProfile.charAt(0).toUpperCase() + intlProfile.slice(1)}
            </Typography>
            <Typography variant="s2" color={colors.neutrals[400]}>
              {`${data.totalElements} ${intlProfile} ${intl.formatMessage(messages.loaded)}`}
            </Typography>
          </span>
          {isTablet ? (
            <div className="tabContent__buttons">
              {downloadAuth && (
                <Button
                  variant="outlined"
                  icon={<DownloadOutlined />}
                  iconPosition="left"
                  size="medium"
                  loading={isDownloading}
                  disabled={isDownloading}
                  onClick={() => handleDownload()}>
                  {intl.formatMessage(messages.invite.download)}
                </Button>
              )}
              {invitationAuth && (
                <Button
                  icon={<PersonAdd />}
                  iconPosition="left"
                  size="medium"
                  onClick={() => void inviteRoute()}>
                  {`${intl.formatMessage(messages.invite.title)} ${intlProfile}`}
                </Button>
              )}
            </div>
          ) : (
            (invitationAuth || downloadAuth) && (
              <MoreMenu>
                {invitationAuth && (
                  <IconButton onClick={() => void inviteRoute()} className="action__buttons">
                    <PersonAdd />
                    <Typography variant="s1" color={colors.neutrals[400]}>
                      {`${intl.formatMessage(messages.invite.title)} ${intlProfile}`}
                    </Typography>
                  </IconButton>
                )}
                {downloadAuth && (
                  <IconButton
                    className="action__buttons"
                    onClick={() => handleDownload()}
                    disabled={isDownloading}>
                    {isDownloading ? <CircularProgress size={20} /> : <DownloadOutlined />}
                    <Typography variant="s1" color={colors.neutrals[400]}>
                      {`${intl.formatMessage(messages.invite.download)}`}
                    </Typography>
                  </IconButton>
                )}
              </MoreMenu>
            )
          )}
        </div>
        <div className="tabPanel__card__body">
          <div className="tabPanel__card__filter">
            <Input {...searchInput} className="input__filter" />
            <Select {...subscriptionSelect} />
            <Select {...stateSelect} />
          </div>
          <div className="tabPanel__card__table">
            <TableDataInstitution
              rows={rows}
              totalElements={data.totalElements}
              pageSize={data.size}
              activePage={data.number}
              pageChange={pageChange}
              deleteUser={(id) => deleteUser(id)}
              profile={profile}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
      <style jsx>{TabContentStyles}</style>
      <style jsx global>
        {TabContentGlobalStyles}
      </style>
    </>
  )
}
export default TabContentComponent
