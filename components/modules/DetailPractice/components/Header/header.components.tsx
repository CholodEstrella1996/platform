import { useState } from 'react'

import { Edit2Outline } from '@easy-eva-icons/react'
import { IconButton } from '@mui/material'
import { useIntl } from 'react-intl'

import BreadCrumbs from 'components/atoms/Breadcrumbs'
import { Button } from 'components/atoms/Button'
import HeaderTitle from 'components/atoms/HeaderTitle'
import MoreMenu from 'components/atoms/MoreMenu'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import EditAssignmentModal from 'components/molecules/EditAssignmentGrade'
import { ASSIGNMENTS_PERMISSIONS } from 'constants/permissions'
import { useAppContext } from 'context/appContext'
import { useMediaQuery } from 'hooks/use-media-query'

import messages from '../../detailPractice.messages'

type HeaderProp = {
  title: string
  fetchAssignment: () => Promise<void>
  productUnitId: number
  userId: string
  score: number
  feedback: string
  isSubmitted: boolean
}

const { update } = ASSIGNMENTS_PERMISSIONS

const { colors, mediaQueries } = theme
export const Header = ({
  title,
  fetchAssignment,
  productUnitId,
  userId,
  score,
  feedback,
  isSubmitted,
}: HeaderProp) => {
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const intl = useIntl()
  const [openForm, setOpenForm] = useState(false)
  const { permissions } = useAppContext()
  const [editAssignment] = [permissions[update]]
  const handleModal = async () => {
    setOpenForm((prevState) => !prevState)
  }

  const showButton = editAssignment && isSubmitted

  return (
    <>
      <BreadCrumbs />
      <HeaderTitle title={title}>
        {showButton &&
          (isTablet ? (
            <Button variant="contained" size="medium" onClick={() => void handleModal()}>
              {intl.formatMessage(messages.header.button)}
            </Button>
          ) : (
            <MoreMenu>
              <IconButton onClick={() => void handleModal()} className="action__buttons">
                <Edit2Outline fontSize={24} color={colors.neutrals[400]} />
                <Typography variant="s1" color={colors.neutrals[400]}>
                  {intl.formatMessage(messages.header.button)}
                </Typography>
              </IconButton>
            </MoreMenu>
          ))}
      </HeaderTitle>

      {openForm && (
        <EditAssignmentModal
          isOpen={openForm}
          onClose={() => setOpenForm((prevState) => !prevState)}
          fetchAssignment={fetchAssignment}
          productUnitId={productUnitId}
          userId={userId}
          score={score}
          feedback={feedback}
        />
      )}
    </>
  )
}
