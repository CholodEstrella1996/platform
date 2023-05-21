import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import Dialog from 'components/atoms/Dialog'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { LearningByIdResponse } from 'services/models/learning.model'
import { historyPath } from 'utils/helpers/historyPath'

import Header from './components/Header'
import messages from './detailLearning.messages'
import { DetailLearningLocalStyles } from './detailLearning.styles'

type Props = {
  learningData: LearningByIdResponse
}
const { colors } = theme

export const DetailLearningComponent = ({ learningData }: Props) => {
  const { name, description, items } = learningData
  const intl = useIntl()
  const router = useRouter()
  const history = historyPath(router.asPath)

  return (
    <>
      <Header title={name} />

      <div className="learningRoute__description">
        <div className="description__title">
          <Typography variant="h6" color={colors.neutrals[700]} weight="bold">
            {intl.formatMessage(messages.description)}
          </Typography>
        </div>
        <div className="description__content">
          <Typography variant="s1" color={colors.neutrals[500]}>
            {description}
          </Typography>
        </div>
      </div>

      <section className="laboratories__container">
        <Typography variant="h6" color={colors.neutrals[400]}>
          {intl.formatMessage(messages.laboratoryTitle)}
        </Typography>
        {items.length ? (
          <div className="laboratories__grid">
            {items.map((lab, index) => (
              <Link
                href={`${history}/detail-laboratory/${lab.productUnit.id}/${lab.productUnit.name}`}
                key={lab.id}>
                <a className="laboratory__item">
                  <div className="item__number">
                    <Typography variant="c1" color={colors.neutrals[500]}>
                      {index + 1}
                    </Typography>
                  </div>
                  <Typography variant="s1" color={colors.neutrals[500]}>
                    {lab.productUnit ? lab.productUnit.name : '-'}
                  </Typography>
                </a>
              </Link>
            ))}
          </div>
        ) : (
          <Dialog message={intl.formatMessage(messages.labs.empty)} />
        )}
      </section>

      <style jsx>{DetailLearningLocalStyles}</style>
    </>
  )
}
