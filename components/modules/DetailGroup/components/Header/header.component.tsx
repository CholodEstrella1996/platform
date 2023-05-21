import { useState } from 'react'

import { AwardOutline, Edit2Outline } from '@easy-eva-icons/react'
import { DeleteOutline } from '@mui/icons-material'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import { IconButton } from '@mui/material'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import AlertModal from 'components/atoms/AlertModal'
import BreadCrumbs from 'components/atoms/Breadcrumbs'
import { Button } from 'components/atoms/Button'
import HeaderTitle from 'components/atoms/HeaderTitle'
import MoreMenu from 'components/atoms/MoreMenu'
import SubscriptionType from 'components/atoms/SubscriptionType'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { GROUP_PERMISSIONS } from 'constants/permissions'
import { useAppContext } from 'context/appContext'
import { useMediaQuery } from 'hooks/use-media-query'
import { historyPath } from 'utils/helpers/historyPath'

import messages from '../../detailGroup.messages'
import { DetailGroupStyles } from '../../detailGroup.styles'

type Props = {
  onDelete: (id: number) => void
  id: number
  groupName: string
  subscription: string
}

const { colors, mediaQueries } = theme
const {
  detail,
  groupAnnouncement,
  learning: { assignments },
} = GROUP_PERMISSIONS

// TODO change hardcode role for object roles, line 41

const Header = ({ groupName, onDelete, id, subscription }: Props) => {
  const [openAlert, setOpenAlert] = useState(false)
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const intl = useIntl()
  const router = useRouter()
  const { permissions, profile } = useAppContext()
  const isDirector = profile === 'organization-director'
  const history = historyPath(router.asPath)
  const [updateAuth, deleteAuth] = [permissions[detail.update], permissions[detail.delete]]
  const [assignmentViewAuth] = [permissions[assignments.view]]
  const [announcementAuth] = [permissions[groupAnnouncement.view]]

  const navigatePage = async (link: string): Promise<void> => {
    await router.push(link)
  }
  const onContinue = () => {
    void onDelete(id)
    setOpenAlert(false)
  }

  const directorView = () => {
    if (isTablet)
      return (
        assignmentViewAuth && (
          <Button
            variant="contained"
            size="medium"
            onClick={() => void navigatePage(`${history}/assignments`)}>
            {intl.formatMessage(messages.button.group.results)}
          </Button>
        )
      )
    return (
      assignmentViewAuth && (
        <MoreMenu>
          {assignmentViewAuth && (
            <IconButton
              className="action__buttons"
              onClick={() => void navigatePage(`${history}/assignments`)}>
              <AwardOutline color={colors.neutrals[400]} />
              <Typography variant="s1" color={colors.neutrals[400]}>
                {intl.formatMessage(messages.button.group.results)}
              </Typography>
            </IconButton>
          )}
        </MoreMenu>
      )
    )
  }

  const institutionTeacherView = () => {
    if (isTablet)
      return (
        <>
          {announcementAuth && (
            <Button
              variant="outlined"
              size="medium"
              onClick={() => {
                void navigatePage(`/groups/detail-group/${id}/${groupName}/announcement`)
              }}>
              {intl.formatMessage(messages.button.group.ad)}
            </Button>
          )}
          {updateAuth && (
            <Button
              variant="contained"
              size="medium"
              onClick={() => void navigatePage(`/groups/edit/${id}/${groupName}`)}>
              {intl.formatMessage(messages.button.group.edit)}
            </Button>
          )}
          {(assignmentViewAuth || deleteAuth) && (
            <MoreMenu>
              {assignmentViewAuth && (
                <IconButton
                  className="action__buttons"
                  onClick={() => void navigatePage(`${history}/assignments`)}>
                  <AwardOutline color={colors.neutrals[400]} />
                  <Typography variant="s1" color={colors.neutrals[400]}>
                    {intl.formatMessage(messages.button.group.results)}
                  </Typography>
                </IconButton>
              )}
              {deleteAuth && (
                <IconButton onClick={() => void setOpenAlert(true)} className="action__buttons">
                  <DeleteOutline fontSize="medium" color="error" />
                  <Typography variant="s1" color={colors.semantic.danger}>
                    {intl.formatMessage(messages.button.group.delete)}
                  </Typography>
                </IconButton>
              )}
            </MoreMenu>
          )}
        </>
      )
    return (
      <MoreMenu>
        {announcementAuth && (
          <IconButton
            onClick={() => {
              void navigatePage(`/groups/detail-group/${id}/${groupName}/announcement`)
            }}
            className="action__buttons">
            <ChatBubbleOutlineIcon fontSize="medium" htmlColor={colors.neutrals[400]} />
            <Typography variant="s1" color={colors.neutrals[400]}>
              {intl.formatMessage(messages.button.group.ad)}
            </Typography>
          </IconButton>
        )}
        {updateAuth && (
          <IconButton
            onClick={() => void navigatePage(`/groups/edit/${id}/${groupName}`)}
            className="action__buttons">
            <Edit2Outline fontSize={24} color={colors.neutrals[400]} />
            <Typography variant="s1" color={colors.neutrals[400]}>
              {intl.formatMessage(messages.button.group.edit)}
            </Typography>
          </IconButton>
        )}
        {assignmentViewAuth && (
          <IconButton
            className="action__buttons"
            onClick={() => {
              void navigatePage(`${history}/assignments`)
            }}>
            <AwardOutline color={colors.neutrals[400]} />
            <Typography variant="s1" color={colors.neutrals[400]}>
              {intl.formatMessage(messages.button.group.results)}
            </Typography>
          </IconButton>
        )}
        {deleteAuth && (
          <IconButton onClick={() => void setOpenAlert(true)} className="action__buttons">
            <DeleteOutline fontSize="medium" color="error" />
            <Typography variant="s1" color={colors.semantic.danger}>
              {intl.formatMessage(messages.button.group.delete)}
            </Typography>
          </IconButton>
        )}
      </MoreMenu>
    )
  }

  return (
    <>
      <div className="group__header">
        <BreadCrumbs />
        <div className="header__content">
          <SubscriptionType type={subscription} />
          <HeaderTitle title={groupName}>
            {isDirector ? directorView() : institutionTeacherView()}
          </HeaderTitle>
        </div>
        {openAlert && (
          <AlertModal
            open={openAlert}
            titleText={intl.formatMessage(messages.alert.group.title)}
            subtitleText={intl.formatMessage(messages.alert.group.subtitle, {
              e: groupName,
            })}
            cancelActionText={intl.formatMessage(messages.alert.group.cancelText)}
            onCancel={() => setOpenAlert(false)}
            continueActionText={intl.formatMessage(messages.alert.group.continueText)}
            onContinue={onContinue}
          />
        )}
      </div>
      <style jsx>{DetailGroupStyles}</style>
    </>
  )
}
export default Header
