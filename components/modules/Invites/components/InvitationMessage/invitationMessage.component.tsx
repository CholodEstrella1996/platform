import { useRouter } from 'next/router'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import Input from 'components/atoms/CustomInput'
import Select from 'components/atoms/Select'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { PROFILES } from 'constants/profiles'
import { getOptionsWithId } from 'utils/helpers/edit-content'
import { optionsLanguages } from 'utils/helpers/handleLanguage'

import messages from '../../invite.messages'
import { InvitationMessageProps } from '../../invite.model'
import { InvitesStyles } from '../../invite.styles'

const { colors } = theme

const InvitationMessage = ({
  listLanguage,
  listGroup,
  isChildrenInvitation,
  reference,
}: InvitationMessageProps) => {
  const intl = useIntl()
  const router = useRouter()
  const { watch } = useFormContext()

  const subscriptionId = watch('subscription')
  const profile = router.query?.profile
  const intlProfile = intl.formatMessage(PROFILES[String(profile) as keyof typeof PROFILES])
  const isDirector = profile === Object.keys(PROFILES)[2]

  return (
    <>
      <div className="invite__card">
        <div className="message__card__title">
          <Typography variant="s1" color={colors.neutrals[500]}>
            {intl.formatMessage(messages.message.title)}
          </Typography>
        </div>
        <div className="invite__card__body">
          <Typography variant="p1" color={colors.neutrals[400]}>
            {intl.formatMessage(messages.message.language.description)}
          </Typography>
          <Select
            name="languageCode"
            label=""
            placeholder={intl.formatMessage(messages.message.language.placeholder)}
            className="input__filter"
            options={optionsLanguages(listLanguage)}
          />

          {!isChildrenInvitation && !isDirector && (
            <>
              <Typography variant="p1" color={colors.neutrals[400]}>
                {intl.formatMessage(messages.message.group.description, { intlProfile })}
              </Typography>
              <Select
                name="classroomIds"
                label=""
                placeholder={intl.formatMessage(messages.message.group.placeholder)}
                className="input__filter"
                multiple
                options={getOptionsWithId(listGroup)}
                disabled={!subscriptionId}
                reference={reference}
              />
            </>
          )}

          <div className="highlight">
            <Typography variant="p2" color={colors.neutrals[500]} weight="semibold">
              {intl.formatMessage(messages.message.personalize)}
            </Typography>
            <Input
              name="message"
              multiline
              rows={9}
              label={intl.formatMessage(messages.message.label)}
              maxLength={600}
            />
          </div>
        </div>
      </div>
      <style jsx>{InvitesStyles}</style>
    </>
  )
}
export default InvitationMessage
