import React, { MouseEvent, useMemo, useRef, useState } from 'react'

import { MoreVertical } from '@easy-eva-icons/react'
import { Delete, Edit, LibraryAdd } from '@mui/icons-material'
import { IconButton, Menu } from '@mui/material'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import Alert from 'components/atoms/AlertModal'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { LearningData } from 'components/modules/LearningRoutes/learningRoutes.model'
import FormModal from 'components/molecules/FormModal'
import { GROUP_PERMISSIONS, LEARNING_UNIT_PERMISSIONS } from 'constants/permissions'
import { useAppContext } from 'context/appContext'
import { historyPath } from 'utils/helpers/historyPath'

import { CopyRoute } from '../CopyRouteModal'
import messages from '../tableDataLearningRoutes.messages'

const { colors } = theme
const { detailFromLearning } = LEARNING_UNIT_PERMISSIONS
const {
  learning: { detailFromGroup },
} = GROUP_PERMISSIONS

type Props = {
  selectedRow?: LearningData
  onDeleteRoute: (id: number) => void
  onCloneSubmit: () => Promise<void>
}

export const MoreMenuComponent = ({ selectedRow, onDeleteRoute, onCloneSubmit }: Props) => {
  const [openPopover, setOpenPopover] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const intl = useIntl()
  const anchorRef = useRef<HTMLElement | null>(null)
  const router = useRouter()
  const { permissions } = useAppContext()

  const history = historyPath(router.asPath)

  const [updateFromGroupAuth, deleteFromGroupAuth, createFromGroupAuth] = useMemo(
    () => [
      permissions[detailFromGroup.update],
      permissions[detailFromGroup.delete],
      permissions[detailFromGroup.create],
    ],
    [],
  )
  const [updateFromLearningAuth, deleteFromLearningAuth, createFromLearningAuth] = useMemo(
    () => [
      permissions[detailFromLearning.update],
      permissions[detailFromLearning.delete],
      permissions[detailFromLearning.create],
    ],
    [],
  )

  const moreMenuAuth = useMemo(
    () =>
      updateFromGroupAuth ||
      deleteFromGroupAuth ||
      createFromGroupAuth ||
      updateFromLearningAuth ||
      createFromLearningAuth ||
      deleteFromLearningAuth,
    [],
  )

  const createAuth = useMemo(() => createFromGroupAuth || createFromLearningAuth, [])
  const updateAuth = useMemo(() => updateFromGroupAuth || updateFromLearningAuth, [])
  const deleteAuth = useMemo(() => deleteFromGroupAuth || deleteFromLearningAuth, [])

  const STEPS = [
    {
      id: 1,
      element: (
        <CopyRoute
          idSubscription={Number(selectedRow?.subscriptionId)}
          nameSubscription={selectedRow?.name}
          idClassroom={Number(selectedRow?.classroomId)}
        />
      ),
    },
  ]

  const handlePopover = (event: MouseEvent<HTMLButtonElement>) => {
    anchorRef.current = event.currentTarget
    setOpenPopover((prev) => !prev)
  }

  const handleOnEditRoute = () => {
    if (!selectedRow) return
    void router.push(`${history}/detail-learning-units/${selectedRow.id}/${selectedRow.name}/edit`)
  }

  const handleAlert = () => {
    setOpenAlert((prev) => !prev)
    setOpenPopover((prev) => !prev)
  }

  const handleOnDeleteRoute = () => {
    if (!selectedRow) return
    onDeleteRoute(selectedRow.id)
    setOpenAlert((prev) => !prev)
  }

  const handleOpenModal = () => {
    setOpenModal((prev) => !prev)
    if (openPopover) setOpenPopover((prev) => !prev)
  }

  return (
    <>
      {moreMenuAuth && (
        <IconButton onClick={(event) => handlePopover(event)}>
          <MoreVertical color={colors.primary[500]} />
        </IconButton>
      )}

      <>
        <Menu
          anchorEl={anchorRef.current}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={openPopover}
          onClose={handlePopover}
          elevation={0}
          className="menu__buttons">
          {updateAuth && (
            <IconButton onClick={() => handleOnEditRoute()} className="action__buttons">
              <Edit fontSize="small" />
              <Typography variant="s1" color={colors.neutrals[400]}>
                {intl.formatMessage(messages.learningRoute.tableData.menu.edit)}
              </Typography>
            </IconButton>
          )}

          {createAuth && (
            <IconButton onClick={handleOpenModal} className="action__buttons">
              <LibraryAdd fontSize="small" />
              <Typography variant="s1" color={colors.neutrals[400]}>
                {intl.formatMessage(messages.learningRoute.tableData.menu.duplicate)}
              </Typography>
            </IconButton>
          )}

          {deleteAuth && (
            <IconButton onClick={handleAlert} className="action__buttons">
              <Delete fontSize="small" color="error" />
              <Typography variant="s1" color={colors.semantic.danger}>
                {intl.formatMessage(messages.learningRoute.tableData.menu.delete)}
              </Typography>
            </IconButton>
          )}
        </Menu>
        <Alert
          titleText={intl.formatMessage(messages.learningRoute.tableData.alert.titleText)}
          subtitleText={intl.formatMessage(messages.learningRoute.tableData.alert.subtitleText, {
            e: selectedRow?.name,
          })}
          cancelActionText={intl.formatMessage(
            messages.learningRoute.tableData.alert.cancelActionText,
          )}
          onCancel={() => setOpenAlert((prev) => !prev)}
          continueActionText={intl.formatMessage(
            messages.learningRoute.tableData.alert.continueActionText,
          )}
          onContinue={() => handleOnDeleteRoute()}
          open={openAlert}
        />

        <FormModal
          steps={STEPS}
          title={intl.formatMessage(messages.learningRoute.copyModal.title)}
          isOpen={openModal}
          onClose={handleOpenModal}
          onSubmit={onCloneSubmit}
          submitText={intl.formatMessage(messages.learningRoute.copyModal.submit)}
        />
      </>
    </>
  )
}
