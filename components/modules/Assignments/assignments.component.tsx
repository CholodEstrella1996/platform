import { DownloadOutlined } from '@mui/icons-material'
import { CircularProgress, IconButton } from '@mui/material'
import { useIntl } from 'react-intl'

import BreadCrumbs from 'components/atoms/Breadcrumbs'
import { Button } from 'components/atoms/Button'
import HeaderTitle from 'components/atoms/HeaderTitle'
import MoreMenu from 'components/atoms/MoreMenu'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import TableDataAssignment from 'components/molecules/TableDataAssignments'
import { useMediaQuery } from 'hooks/use-media-query'

import messages from './assignments.messages'
import { AssignmentsProps } from './assignments.model'
import { AssignmentLocalStyles, AssignmentGlobalStyles } from './assignments.styles'
import Filters from './components/Filters'

const { colors, mediaQueries } = theme

export const AssignmentsComponent = ({
  assignments,
  onPageChange,
  isLoading,
  handleAssignments,
  isDownloading,
  handleDownload,
  fetchAssignments,
}: AssignmentsProps) => {
  const intl = useIntl()
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const isContentEmpty = !assignments.content.length

  return (
    <>
      <BreadCrumbs />
      <HeaderTitle title={intl.formatMessage(messages.title)} />
      <>
        <div className="grading__table">
          <div className="grading__table__upper">
            <div className="grading__table__header">
              <Typography variant={isTablet ? 'h5' : 'h6'} color={colors.primary[500]}>
                {intl.formatMessage(messages.resultsTable.title)}
              </Typography>
              <Typography variant="s1" color={colors.neutrals[400]}>
                {intl.formatMessage(messages.resultsTable.loaded, {
                  quantity: assignments.totalElements,
                })}
              </Typography>
            </div>
            {isTablet ? (
              <Button
                variant="outlined"
                icon={<DownloadOutlined />}
                iconPosition="left"
                disabled={isDownloading || isContentEmpty}
                loading={isDownloading}
                size="medium"
                onClick={() => void handleDownload()}>
                {intl.formatMessage(messages.resultsTable.button)}
              </Button>
            ) : (
              <MoreMenu>
                <IconButton
                  className="action__buttons"
                  onClick={() => void handleDownload()}
                  disabled={isDownloading || isContentEmpty}>
                  {isDownloading ? <CircularProgress size={20} /> : <DownloadOutlined />}
                  <Typography variant="s1" color={colors.neutrals[400]}>
                    {intl.formatMessage(messages.resultsTable.button)}
                  </Typography>
                </IconButton>
              </MoreMenu>
            )}
          </div>

          <Filters filters={assignments.filters} isLoading={isLoading} />
          <TableDataAssignment
            assignments={assignments}
            onPageChange={onPageChange}
            isLoading={isLoading}
            handleAssignments={handleAssignments}
            fetchAssignments={fetchAssignments}
          />
        </div>

        <style jsx>{AssignmentLocalStyles}</style>
        <style jsx global>
          {AssignmentGlobalStyles}
        </style>
      </>
    </>
  )
}
