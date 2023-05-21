import { useAppContext } from 'context/appContext'
import { RequiredActions } from 'services/models/user.model'
import userService from 'services/modules/user'

import { CardsComponent } from './cards.component'
import { cardsContent } from './cardsContent'

export const CardContainer = () => {
  const { user, updateUser } = useAppContext()

  if (!user) return null

  const userActions = user?.requiredActions

  const cardsToShow = cardsContent.filter((card) => userActions?.includes(card.requiredAction))

  const handleRequiredAction = async (action: string) => {
    const requiredActions: RequiredActions = {
      requiredActions: user?.requiredActions.filter((userAction) => userAction !== action),
    }
    await userService.userRequiredActions(requiredActions)
    if (updateUser) updateUser({ ...user, requiredActions: requiredActions.requiredActions })
  }

  return <CardsComponent handleActionClick={handleRequiredAction} cardsToShow={cardsToShow} />
}
