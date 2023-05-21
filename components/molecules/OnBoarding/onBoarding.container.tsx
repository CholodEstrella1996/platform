import { useEffect, useState } from 'react'

import { useIntl } from 'react-intl'

import { useAppContext } from 'context/appContext'
import { useNotification } from 'hooks/notification'
import { Boarding } from 'services/models/boarding.model'
import { RequiredActions } from 'services/models/user.model'
import boardingService from 'services/modules/on-boarding'
import userService from 'services/modules/user'

import { OnBoardingComponent } from './onBoarding.component'
import messages from './onBoarding.messages'

type Props = {
  onClose: () => void | Promise<void>
  acceptedTerms: boolean
}

export const OnBoardingContainer = ({ onClose, acceptedTerms }: Props) => {
  const [boardingCards, setBoardingCards] = useState<Boarding[]>()
  const { user } = useAppContext()
  const { onError } = useNotification()
  const intl = useIntl()

  const getOnBoardingCards = async () => {
    try {
      const data = await boardingService.getBoardingCards()
      const sortedCards = data.sort((orderA, orderB) => orderA.order - orderB.order)
      setBoardingCards(sortedCards)
    } catch (error) {
      void onClose()
      // eslint-disable-next-line no-console
      console.error('GetBoardingCards error >>: ', error)
      onError(intl.formatMessage(messages.onLoadError))
    }
  }
  useEffect(() => {
    void getOnBoardingCards()
  }, [])

  if (!user) return null

  const requiredActions: RequiredActions = {
    requiredActions: user?.requiredActions.filter((action) =>
      acceptedTerms
        ? action !== 'platform-tour' && action !== 'terms-and-conditions'
        : action !== 'platform-tour',
    ),
  }

  const onSubmit = async () => {
    await userService.userRequiredActions(requiredActions)
  }

  if (!boardingCards || !boardingCards.length) return null
  return (
    <OnBoardingComponent boardingContent={boardingCards} onSubmit={onSubmit} onClose={onClose} />
  )
}
