import { ExternalLink } from '@easy-eva-icons/react'
import { useIntl } from 'react-intl'

import { Avatar } from 'components/atoms/Avatar'
import { Button } from 'components/atoms/Button'
import PercentageGraph from 'components/atoms/PercentageGraph'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { DEFAULT_ICON_IMG_PROPS } from 'constants/defaultStaticImages'
import { ROLES } from 'constants/roles'
import { TIME_ZONE_UTC } from 'constants/timeZone'
import { useAppContext } from 'context/appContext'
import { useMediaQuery } from 'hooks/use-media-query'
import { Result } from 'services/models/assignments.model'

import Header from './components/Header'
import messages from './detailPractice.messages'
import { DetailPracticeLocalStyles } from './detailPractice.styles'

type DetailPracticeProp = {
  productUnitId: number
  practiceDetail: Result
  fetchAssignment: () => Promise<void>
}

const { colors, mediaQueries } = theme
const { independent } = ROLES

export const DetailPracticeComponent = ({
  practiceDetail,
  fetchAssignment,
  productUnitId,
}: DetailPracticeProp) => {
  const {
    user,
    deliveryDate,
    attempts,
    status,
    areaName,
    applicationName,
    feedback,
    applicationScore,
    teacherScore,
    reportUrl,
  } = practiceDetail
  const { firstName, surname, avatarUrl } = user
  const intl = useIntl()
  const { profile } = useAppContext()
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const showButton = profile !== independent.teacher && profile !== independent.student
  const percentageScores = {
    simulator: applicationScore,
    professor: teacherScore || undefined,
  }
  const isSubmitted = status.name === 'submitted'

  const handleDownload = () => {
    window.open(reportUrl)
  }

  return (
    <>
      <Header
        title={intl.formatMessage(messages.header.title)}
        fetchAssignment={fetchAssignment}
        productUnitId={productUnitId}
        userId={user.id}
        score={teacherScore}
        feedback={feedback}
        isSubmitted={isSubmitted}
      />
      <div className="detail__practice__page">
        <div className="detail__practice__name">
          <div className="name__avatar">
            <Avatar
              name={firstName ?? ''}
              size="medium"
              image={avatarUrl ?? DEFAULT_ICON_IMG_PROPS.image}
            />
            {(firstName || surname) && (
              <Typography variant="h5" color={colors.neutrals[500]}>
                {firstName && firstName} {surname && surname}
              </Typography>
            )}
          </div>
          <Button
            variant="outlined"
            size="medium"
            icon={<ExternalLink fontSize={24} />}
            iconPosition="left"
            onClick={() => handleDownload()}
            className="report__button">
            {intl.formatMessage(messages.reportButton)}
          </Button>
        </div>

        <div className="detail__practice">
          <div className="detail__practice__info">
            <div className="information__status">
              <div className="status__data">
                <Typography variant="label" color={colors.primary[500]} className="status__label">
                  {intl.formatMessage(messages.practiceStatus.deliveryDate)}
                </Typography>
                <Typography variant={isTablet ? 's1' : 'p2'} color={colors.neutrals[500]}>
                  {intl.formatDate(deliveryDate, { timeZone: TIME_ZONE_UTC })}
                </Typography>
              </div>
              <div className="status__data">
                <Typography variant="label" color={colors.primary[500]} className="status__label">
                  {intl.formatMessage(messages.practiceStatus.attempts)}
                </Typography>
                <Typography variant={isTablet ? 's1' : 'p2'} color={colors.neutrals[500]}>
                  {attempts}
                </Typography>
              </div>
              {status && showButton && (
                <div className="status__data">
                  <Typography variant="label" color={colors.primary[500]} className="status__label">
                    {intl.formatMessage(messages.practiceStatus.status)}
                  </Typography>
                  <Typography variant={isTablet ? 's1' : 'p2'} color={colors.neutrals[500]}>
                    {status.displayName}
                  </Typography>
                </div>
              )}
            </div>
            <div className="information__detail">
              <div className="detail__container">
                <div className="detail__content">
                  <Typography variant="p2" color={colors.neutrals[300]}>
                    {intl.formatMessage(messages.practiceDetail.area)}
                  </Typography>
                  <Typography variant="s1" color={colors.neutrals[500]}>
                    {areaName}
                  </Typography>
                </div>
                <div className="detail__content">
                  <Typography variant="p2" color={colors.neutrals[300]}>
                    {intl.formatMessage(messages.practiceDetail.laboratory)}
                  </Typography>
                  <Typography variant="s1" color={colors.neutrals[500]}>
                    {applicationName}
                  </Typography>
                </div>
                {status && showButton && (
                  <div className="detail__content">
                    <Typography variant="p2" color={colors.neutrals[300]}>
                      {intl.formatMessage(messages.practiceDetail.feedback)}
                    </Typography>
                    <Typography variant="s1" color={colors.neutrals[500]}>
                      {feedback ?? '-'}
                    </Typography>
                  </div>
                )}
              </div>
            </div>
          </div>

          <PercentageGraph percentages={percentageScores} />
        </div>
      </div>

      <style jsx>{DetailPracticeLocalStyles}</style>
    </>
  )
}
