import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { useIntl } from 'react-intl'

import Input from 'components/atoms/CustomInput'
import Select from 'components/atoms/Select'
import { OptionProps } from 'components/atoms/Select/select.models'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'

import { CopyRouteLocalStyles } from './copyRouteModal.styles'
import messages from '../tableDataLearningRoutes.messages'

const { colors } = theme

type Props = {
  groupOptions: OptionProps[]
}

export const CopyRouteComponent = ({ groupOptions }: Props) => {
  const intl = useIntl()
  return (
    <>
      <div className="modalContent__container">
        <div className="modal__inputs">
          <Typography color={colors.primary[500]} variant="s1">
            {intl.formatMessage(messages.learningRoute.copyModal.subtitle)}
          </Typography>
          <Input
            name="name"
            label={intl.formatMessage(messages.learningRoute.copyModal.inputLabel)}
            required
          />
          <Select
            name="classroomId"
            label={intl.formatMessage(messages.learningRoute.copyModal.selectLabel)}
            options={groupOptions}
            size="medium"
            required
          />
        </div>
        <div className="modal__notification">
          <InfoOutlinedIcon sx={{ color: colors.primary[500] }} />
          <Typography color={colors.neutrals[500]} variant="c1">
            {intl.formatMessage(messages.learningRoute.copyModal.notification)}
          </Typography>
        </div>
      </div>
      <style jsx>{CopyRouteLocalStyles}</style>
    </>
  )
}
