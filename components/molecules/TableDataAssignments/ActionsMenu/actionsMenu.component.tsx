import { useRef, useState, MouseEvent, useMemo } from 'react'

import { MoreVertical } from '@easy-eva-icons/react'
import { CloseRounded, CompareArrows, Edit } from '@mui/icons-material'
import { IconButton, Menu } from '@mui/material'
import { useIntl } from 'react-intl'

import AlertModal from 'components/atoms/AlertModal'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { useAssignment } from 'components/modules/Assignments/assignments.hook'
import { Actions } from 'components/modules/Assignments/assignments.model'
import EditAssignmentModal from 'components/molecules/EditAssignmentGrade'
import { Assignment } from 'services/models/assignments.model'

import messages from '../tableDataAssignments.messages'

type Props = {
  selectedRow: Assignment
  handleAssignments: (id: number, user: string, action: Actions) => Promise<void>
  fetchAssignments: (pageNumber?: number) => Promise<void>
}

const { colors } = theme
const UNSUBMITTED_STATUS = 'unsubmitted'
const RETRY_STATUS = 'retry'

export const ActionsMenuComponent = ({
  selectedRow,
  handleAssignments,
  fetchAssignments,
}: Props) => {
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false)
  const [openRestoreAlert, setOpenRestoreAlert] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)
  const [openActionMenu, setActionMenu] = useState(false)

  const intl = useIntl()
  const columnVisibility = useAssignment()

  const anchorRef = useRef<null | HTMLElement>(null)

  const { columnVisibilityModel, assignmentPermissions } = { ...columnVisibility }

  const haveUserActions = useMemo(
    () => columnVisibilityModel?.actions && selectedRow?.status.name !== UNSUBMITTED_STATUS,
    [selectedRow?.status.name],
  )

  const handleClose = () => setActionMenu((prevState) => !prevState)
  const handleMenuOpen = (event: MouseEvent<HTMLButtonElement>) => {
    anchorRef.current = event.currentTarget
    setActionMenu((prevState) => !prevState)
  }
  const handleOpen = () => {
    setOpenDeleteAlert(true)
    handleClose()
  }
  const handleRestore = () => {
    setOpenRestoreAlert(true)
    handleClose()
  }
  const handleOpenEdit = () => {
    setOpenEditModal(true)
    handleClose()
  }

  const handleRestoreDelete = (action: Actions) => {
    if (!selectedRow) return
    void handleAssignments(selectedRow.productUnitId, selectedRow.userId, action)

    if (action === RETRY_STATUS) setOpenRestoreAlert((prevState) => !prevState)
    else setOpenDeleteAlert((prevState) => !prevState)
  }

  return (
    <>
      <IconButton
        className="actions__menu__icon"
        onClick={(event) => handleMenuOpen(event)}
        disabled={!haveUserActions}>
        <MoreVertical color={haveUserActions ? colors.primary[500] : colors.neutrals[200]} />
      </IconButton>
      {haveUserActions && (
        <>
          <Menu
            anchorEl={anchorRef.current}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={openActionMenu}
            onClose={handleMenuOpen}
            elevation={0}
            className="menu__buttons">
            {selectedRow?.status.name !== RETRY_STATUS && (
              <div>
                {assignmentPermissions?.deleteRestoreAssignmentAuth && (
                  <IconButton onClick={handleRestore} className="action__buttons">
                    <CompareArrows sx={{ color: colors.neutrals[400] }} />
                    <Typography variant="s1" color={colors.neutrals[400]}>
                      {intl.formatMessage(messages.resultsTableData.menu.restore)}
                    </Typography>
                  </IconButton>
                )}
                {assignmentPermissions?.updateAssignmentAuth && (
                  <IconButton onClick={handleOpenEdit} className="action__buttons">
                    <Edit sx={{ color: colors.neutrals[400] }} />
                    <Typography variant="s1" color={colors.neutrals[400]}>
                      {intl.formatMessage(messages.resultsTableData.menu.edit)}
                    </Typography>
                  </IconButton>
                )}
              </div>
            )}
            <IconButton onClick={handleOpen} className="action__buttons">
              <CloseRounded sx={{ color: colors.semantic.danger }} />
              <Typography variant="s1" color={colors.semantic.danger}>
                {intl.formatMessage(messages.resultsTableData.menu.delete)}
              </Typography>
            </IconButton>
          </Menu>

          <AlertModal
            titleText={intl.formatMessage(messages.resultsTableData.alert.delete.titleText)}
            subtitleText={intl.formatMessage(messages.resultsTableData.alert.delete.subtitleText, {
              m: selectedRow?.applicationName,
            })}
            cancelActionText={intl.formatMessage(
              messages.resultsTableData.alert.delete.cancelActionText,
            )}
            onCancel={() => {
              setOpenDeleteAlert((prevState) => !prevState)
            }}
            continueActionText={intl.formatMessage(
              messages.resultsTableData.alert.delete.continueActionText,
            )}
            onContinue={() => handleRestoreDelete(UNSUBMITTED_STATUS)}
            open={openDeleteAlert}
          />

          <AlertModal
            titleText={intl.formatMessage(messages.resultsTableData.alert.restore.titleText)}
            subtitleText={intl.formatMessage(messages.resultsTableData.alert.restore.subtitleText)}
            cancelActionText={intl.formatMessage(
              messages.resultsTableData.alert.restore.cancelActionText,
            )}
            onCancel={() => {
              setOpenRestoreAlert((prevState) => !prevState)
            }}
            continueActionText={intl.formatMessage(
              messages.resultsTableData.alert.restore.continueActionText,
            )}
            onContinue={() => handleRestoreDelete(RETRY_STATUS)}
            open={openRestoreAlert}
          />

          {openEditModal && (
            <EditAssignmentModal
              productUnitId={selectedRow.productUnitId}
              userId={selectedRow.userId}
              fetchAssignment={fetchAssignments}
              isOpen={openEditModal}
              onClose={() => setOpenEditModal((prevState) => !prevState)}
              assignmentId={selectedRow.id}
            />
          )}
        </>
      )}
    </>
  )
}
