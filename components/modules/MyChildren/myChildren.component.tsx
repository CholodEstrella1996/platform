import React from 'react'

import { Search } from '@easy-eva-icons/react'
import { PersonAdd } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import MoreMenu from 'components/atoms/MoreMenu'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import messages from 'components/modules/Invites/invite.messages'
import messagesMyChildren from 'components/modules/MyChildren/myChildren.messages'
import Filter from 'components/molecules/Filter'
import { InputProps } from 'components/molecules/Filter/filter.model'
import TableDataMyChildren from 'components/molecules/TableDataMyChildren'
import { MY_CHILDREN_PERMISSIONS } from 'constants/permissions'
import { PROFILES } from 'constants/profiles'
import { useAppContext } from 'context/appContext'
import { useMediaQuery } from 'hooks/use-media-query'
import { formatData, optionsForSelect } from 'utils/helpers/edit-content'

import Header from './components/Header'
import { MyChildrenProps } from './myChildren.model'
import { MyChildrenLocalStyles } from './myChildren.styles'

const { colors, mediaQueries } = theme
const { invitation } = MY_CHILDREN_PERMISSIONS

const MyChildrenComponent = ({
  data,
  deleteUser,
  onSearch,
  listStatus,
  isLoading,
  pageChange,
}: MyChildrenProps) => {
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const intl = useIntl()
  const router = useRouter()
  const msg = {
    notEmail: intl.formatMessage(messages.myInstitution.data.emailNotAvailable),
    guestUser: intl.formatMessage(messages.myInstitution.data.guestUser),
    registeredUser: intl.formatMessage(messages.myInstitution.data.registeredUser),
  }

  const { permissions } = useAppContext()
  const [inviteAuth] = [permissions[invitation.view]]

  const profile = intl.formatMessage(messages.invite.profiles.myChildren)
  const childrenProfile = Object.keys(PROFILES)[3]
  const inviteRoute = () => void router.push(`/my-children/invitation/${childrenProfile}`)

  const dataInput: InputProps = {
    name: 'search',
    label: String(intl.formatMessage(messages.search.label)),
    placeholder: String(intl.formatMessage(messages.search.placeholder, { isTablet })),
    isClearable: true,
    iconPosition: 'left',
    size: 'small',
    icon: <Search />,
    visible: true,
  }

  const dataSelect: InputProps = {
    name: 'state',
    label: String(intl.formatMessage(messages.select.label).toUpperCase()),
    placeholder: String(intl.formatMessage(messages.select.placeholder)),
    isClearable: true,
    size: 'small',
    iconPosition: 'left',
    options: optionsForSelect(listStatus),
    visible: true,
  }

  const rows = formatData(data, msg.notEmail, msg.guestUser, msg.registeredUser)

  return (
    <>
      <Header title={intl.formatMessage(messagesMyChildren.title)} />
      <Box sx={{ width: '100%' }}>
        <div className="myChildren__card">
          <div className="myChildren__card__header">
            <span>
              <Typography variant="h6" color={colors.primary[500]}>
                {profile.charAt(0).toUpperCase() + profile.slice(1)}
              </Typography>
              <Typography variant="s2" color={colors.neutrals[400]}>
                {`${data.totalElements} ${profile} ${intl.formatMessage(messages.loaded)}`}
              </Typography>
            </span>
            {inviteAuth &&
              (isTablet ? (
                <div className="myChildren__buttons">
                  <Button
                    icon={<PersonAdd />}
                    iconPosition="left"
                    size="medium"
                    onClick={() => void inviteRoute()}>
                    {`${intl.formatMessage(messages.invite.title)} ${profile}`}
                  </Button>
                </div>
              ) : (
                <MoreMenu>
                  <IconButton onClick={() => void inviteRoute()} className="action__buttons">
                    <PersonAdd />
                    <Typography variant="s1" color={colors.neutrals[400]}>
                      {`${intl.formatMessage(messages.invite.title)} ${profile}`}
                    </Typography>
                  </IconButton>
                </MoreMenu>
              ))}
          </div>
          <div className="myChildren__card__body">
            <Filter select={dataSelect} input={dataInput} onSearch={onSearch} />
            <div className="myChildren__card__table">
              <TableDataMyChildren
                rows={rows}
                totalElements={data.totalElements}
                pageSize={data.size}
                activePage={data.number}
                pageChange={pageChange}
                deleteUser={deleteUser}
                profile="my-children"
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </Box>

      <style jsx>{MyChildrenLocalStyles}</style>
    </>
  )
}

export default MyChildrenComponent
