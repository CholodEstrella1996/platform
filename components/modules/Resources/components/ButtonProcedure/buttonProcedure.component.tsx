import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import { theme } from 'components/atoms/ThemeProvider'
import messages from 'components/modules/Laboratories/laboratories.messages'
import { useMediaQuery } from 'hooks/use-media-query'

import { ButtonProcedureProps } from './buttonProcedure.model'
import { ButtonProcedureStyles } from './buttonProcedure.styles'

const ButtonProcedureComponent = ({ setModalOpen }: ButtonProcedureProps) => {
  const intl = useIntl()
  const { mediaQueries } = theme
  const isTablet = useMediaQuery(mediaQueries.tablet)

  return (
    <>
      <Button
        icon={<FormatListBulletedIcon fontSize="small" />}
        size={isTablet ? 'medium' : 'small'}
        onClick={() => setModalOpen((prev: boolean) => !prev)}
        className={isTablet ? 'buttonContainer__procedures--fixed' : ''}>
        {intl.formatMessage(messages.header.buttonProcedure)}
      </Button>
      <style jsx>{ButtonProcedureStyles}</style>
    </>
  )
}

export { ButtonProcedureComponent }
