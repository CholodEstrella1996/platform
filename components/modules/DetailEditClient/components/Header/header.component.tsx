import { useState } from 'react'

import { AwardOutline, Edit2Outline, PersonDeleteOutline, SaveOutline } from '@easy-eva-icons/react'
import { IconButton } from '@mui/material'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import AlertModal from 'components/atoms/AlertModal'
import BreadCrumbs from 'components/atoms/Breadcrumbs'
import { Button } from 'components/atoms/Button'
import HeaderTitle from 'components/atoms/HeaderTitle'
import MoreMenu from 'components/atoms/MoreMenu'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { MY_INSTITUTION_PERMISSIONS, MY_CHILDREN_PERMISSIONS } from 'constants/permissions'
import { EDIT_CHILD_PAGE, EDIT_MEMBER_PAGE, PROFILE_PAGE } from 'constants/platformPages'
import { ROLES } from 'constants/roles'
import { useAppContext } from 'context/appContext'
import { useMediaQuery } from 'hooks/use-media-query'
import { ClientResponse } from 'services/models/client.model'
import { onCancel } from 'utils/helpers/cancel-redirect'
import { historyPath } from 'utils/helpers/historyPath'

import messages from '../../detailEditClient.messages'

type Props = {
  clientId?: number
  email: string
  isEditable?: boolean
  isLoggedUser?: boolean
  onDelete: () => void
  onSubmit: () => Promise<void>
  isSaving?: boolean
  title: string
  client: ClientResponse
}

const { colors, mediaQueries } = theme
const { member } = MY_INSTITUTION_PERMISSIONS
const { child } = MY_CHILDREN_PERMISSIONS
const { organization, family } = ROLES

const Header = ({
  title,
  onDelete,
  email,
  isEditable,
  isSaving,
  isLoggedUser,
  clientId,
  onSubmit,
  client,
}: Props) => {
  const [openAlert, setOpenAlert] = useState(false)
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const intl = useIntl()
  const router = useRouter()
  const history = historyPath(router.asPath)
  const { permissions } = useAppContext()

  const [updateAuth, deleteAuth] = [permissions[member.update], permissions[member.delete]]
  const [updateChildAuth, deleteChildAuth] = [permissions[child.update], permissions[child.delete]]
  const [assignmentsAuth] = [permissions[member.assignments.view]]

  const showAssignmentsButton =
    assignmentsAuth &&
    (client?.role[0]?.name === organization.student || client?.role[0]?.name === family.child)

  const memberName = `${client?.user.firstName} ${client?.user.surname}`
  const editOnTablet = isEditable && isTablet && (updateAuth || updateChildAuth || isLoggedUser)
  const detailOnTablet = !isEditable && isTablet
  const detailOnMobile = !isEditable && !isTablet
  const showMoreMenuMobile =
    detailOnMobile &&
    (deleteAuth ||
      deleteChildAuth ||
      updateAuth ||
      updateChildAuth ||
      showAssignmentsButton ||
      isLoggedUser)
  const showEditButton = updateAuth || updateChildAuth || isLoggedUser

  const navigatePage = () => {
    const childOrInstitution = router.query['id-child']
      ? `${EDIT_CHILD_PAGE}/${Number(clientId)}/${String(memberName)}`
      : `${EDIT_MEMBER_PAGE}/${Number(clientId)}/${String(memberName)}`
    const href = isLoggedUser ? `${PROFILE_PAGE}/edit` : childOrInstitution
    void router.push(href)
  }

  const navigatePageResults = (link: string) => {
    void router.push(link)
  }

  const onContinue = () => {
    void onDelete()
    setOpenAlert(false)
  }

  return (
    <>
      {!isLoggedUser && <BreadCrumbs />}
      <HeaderTitle title={title}>
        {editOnTablet && (
          <>
            <Button variant="outlined" size="large" onClick={() => onCancel(clientId)}>
              {intl.formatMessage(messages.navigation.button.cancel)}
            </Button>
            <Button
              disabled={isSaving}
              loading={isSaving}
              variant="contained"
              size="medium"
              icon={<SaveOutline fontSize={24} />}
              iconPosition="left"
              onClick={() => void onSubmit()}>
              {intl.formatMessage(messages.navigation.button.save)}
            </Button>
          </>
        )}
        {detailOnTablet && (
          <>
            {!isLoggedUser && showAssignmentsButton && (
              <Button
                variant="outlined"
                size="medium"
                onClick={() => navigatePageResults(`${history}/assignments`)}>
                {intl.formatMessage(messages.navigation.button.results)}
              </Button>
            )}
            {showEditButton && (
              <Button variant="contained" size="medium" onClick={navigatePage}>
                {intl.formatMessage(messages.navigation.button.edit)}
              </Button>
            )}
            {!isLoggedUser && (deleteAuth || deleteChildAuth) && (
              <MoreMenu>
                <IconButton onClick={() => void setOpenAlert(true)} className="action__buttons">
                  <PersonDeleteOutline fontSize={24} color={colors.semantic.danger} />
                  <Typography variant="s1" color={colors.semantic.danger}>
                    {intl.formatMessage(messages.navigation.button.delete)}
                  </Typography>
                </IconButton>
              </MoreMenu>
            )}
          </>
        )}
        {showMoreMenuMobile && (
          <MoreMenu>
            {!isLoggedUser && showAssignmentsButton && (
              <IconButton
                onClick={() => navigatePageResults(`${history}/assignments`)}
                className="action__buttons">
                <AwardOutline fontSize={24} color={colors.neutrals[400]} />
                <Typography variant="s1" color={colors.neutrals[400]}>
                  {intl.formatMessage(messages.navigation.button.results)}
                </Typography>
              </IconButton>
            )}
            {showEditButton && (
              <IconButton onClick={navigatePage} className="action__buttons">
                <Edit2Outline fontSize={24} color={colors.neutrals[400]} />
                <Typography variant="s1" color={colors.neutrals[400]}>
                  {intl.formatMessage(messages.navigation.button.edit)}
                </Typography>
              </IconButton>
            )}
            {!isLoggedUser && (deleteAuth || deleteChildAuth) && (
              <IconButton
                onClick={() => {
                  setOpenAlert(true)
                }}
                className="action__buttons">
                <PersonDeleteOutline fontSize={24} color={colors.semantic.danger} />
                <Typography variant="s1" color={colors.semantic.danger}>
                  {intl.formatMessage(messages.navigation.button.delete)}
                </Typography>
              </IconButton>
            )}
          </MoreMenu>
        )}
      </HeaderTitle>
      {openAlert && (
        <AlertModal
          open={openAlert}
          titleText={intl.formatMessage(messages.alert.title)}
          subtitleText={intl.formatMessage(messages.alert.subtitle, {
            e: email,
          })}
          cancelActionText={intl.formatMessage(messages.alert.cancelText)}
          onCancel={() => setOpenAlert(false)}
          continueActionText={intl.formatMessage(messages.alert.continueText)}
          onContinue={onContinue}
        />
      )}
    </>
  )
}
export default Header
