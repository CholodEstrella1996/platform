import {
  OndemandVideoOutlined,
  PersonalVideoOutlined,
  TextSnippetOutlined,
} from '@mui/icons-material'
import { useIntl } from 'react-intl'

import CardIconTitle from 'components/atoms/CardIconTitle'
import { theme } from 'components/atoms/ThemeProvider'

import { ComplementaryMaterialProps } from './complementaryMaterial.model'
import messages from '../../detailLaboratoryUnit.messages'

const { colors } = theme

const icons = {
  guide: <TextSnippetOutlined />,
  tutorial: <OndemandVideoOutlined />,
  webinar: <PersonalVideoOutlined />,
}

export const ComplementaryMaterial = (props: ComplementaryMaterialProps) => {
  const { type, href, title, color = colors.primary[500] } = props

  const intl = useIntl()

  const selectedType = intl.formatMessage(messages.laboratoryContent.complementary.materialsName, {
    typeName: type,
  })
  const slicedTitle = title.length > 50 ? `${title.slice(0, 50).trim()}...` : title

  return (
    <CardIconTitle
      icon={<div style={{ color, marginTop: '0.25rem' }}>{icons[type]}</div>}
      title={`${selectedType}: ${slicedTitle}`}
      href={href}
    />
  )
}
