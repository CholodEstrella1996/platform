import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import BreadCrumbs from 'components/atoms/Breadcrumbs'
import CardIconTitle from 'components/atoms/CardIconTitle'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import Carousel from 'components/molecules/Carousel'
import HeaderAvatar from 'components/molecules/HeaderAvatar'
import { LABORATORIES_PERMISSIONS } from 'constants/permissions'
import { useAppContext } from 'context/appContext'
import { LaboratoryById } from 'services/models/applications.model'
import { historyPath } from 'utils/helpers/historyPath'
import { carouselImage } from 'utils/helpers/laboratory-detail'

import ComplementaryMaterial from './components/ComplementaryMaterial'
import { ComplementaryMaterialProps } from './components/ComplementaryMaterial/complementaryMaterial.model'
import messages from './detailLaboratoryUnit.messages'
import {
  DetailLaboratoryGlobalStyles,
  DetailLaboratoryLocalStyles,
} from './detailLaboratoryUnit.styles'

type Prop = {
  detailLabsUnit: LaboratoryById
}

const { colors } = theme

const {
  detail: { resource },
} = LABORATORIES_PERMISSIONS

export const DetailLaboratoryUnitComponent = ({ detailLabsUnit }: Prop) => {
  const {
    id,
    name,
    description,
    iconUrl,
    media,
    applications,
    pedagogicalMaterials,
    type,
    colorLight,
  } = detailLabsUnit

  const intl = useIntl()
  const router = useRouter()
  const history = historyPath(router.asPath)
  const isLearningUnit = type.name !== 'Laboratory'
  const { permissions } = useAppContext()
  const [accessLabAuth] = [permissions[resource.view]]
  const showApplications = !isLearningUnit && Boolean(applications.length)

  return (
    <>
      <div className="detail__laboratory">
        <BreadCrumbs />
        <HeaderAvatar
          id={id}
          title={name}
          name={intl.formatMessage(messages.header.chip, { isLearningUnit })}
          avatarUrl={iconUrl}
          buttonText={intl.formatMessage(messages.header.buttonText, { isLearningUnit })}
          bgColor={colorLight}
          isLearningUnit={isLearningUnit}
        />

        <div className="labs__container">
          <div className="labs__content">
            <div className="description__card">
              <div className="description__title">
                <Typography variant="h6" color={colors.neutrals[700]}>
                  {intl.formatMessage(messages.descriptionCard, { isLearningUnit })}
                </Typography>
              </div>
              <div className="description__content">
                <Typography variant="s1" color={colors.neutrals[500]} weight="regular">
                  {description}
                </Typography>
              </div>
            </div>
            {!!media.length && <Carousel slides={carouselImage(media)} />}
          </div>

          <div className="laboratory__content">
            {showApplications && (
              <div className="learning__units">
                <Typography variant="h6" color={colors.neutrals[700]}>
                  {intl.formatMessage(messages.laboratoryContent.learningUnits)}
                </Typography>
                {applications.map((unit) => (
                  <CardIconTitle
                    iconBgColor={colorLight}
                    image={unit.iconUrl}
                    title={unit.name}
                    href={
                      accessLabAuth
                        ? `${history}/detail-learningUnit/${unit.id}/${unit.name}`
                        : undefined
                    }
                    key={unit.id}
                  />
                ))}
              </div>
            )}

            {Boolean(pedagogicalMaterials.length) && (
              <div className="complementary__material">
                <Typography variant="h6" color={colors.neutrals[700]}>
                  {intl.formatMessage(messages.laboratoryContent.complementary.title)}
                </Typography>

                <div className="materials">
                  {pedagogicalMaterials.map((material) => {
                    const href = material.content.url ?? ''

                    return (
                      <ComplementaryMaterial
                        key={material.content.id}
                        title={material.name}
                        type={material.type.name as ComplementaryMaterialProps['type']}
                        href={accessLabAuth ? href : undefined}
                      />
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>{DetailLaboratoryLocalStyles}</style>
      <style jsx global>
        {DetailLaboratoryGlobalStyles}
      </style>
    </>
  )
}
