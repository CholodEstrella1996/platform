import { useEffect, useState } from 'react'

import { DashboardCards } from 'components/modules/Dashboard/dashboard.model'
import { DashboardStyles } from 'components/modules/Dashboard/dashboard.styles'
import Carousel from 'components/molecules/Carousel'

import { RenderCard } from './renderCard.component'

type Props = {
  cardsToShow: DashboardCards[]
  handleActionClick: (action: string) => Promise<void>
}

export const CardsComponent = ({ cardsToShow, handleActionClick }: Props) => {
  const [cardsContent, setCardsContent] = useState<DashboardCards[]>()

  const handleClick = (id: number) => {
    const newCards = cardsContent?.filter((card) => card.id !== id)
    setCardsContent(newCards)
  }

  const carouselCards = cardsContent?.map((card) => ({
    id: card.id,
    element: (
      <RenderCard card={card} handleCloseCard={handleClick} handleAction={handleActionClick} />
    ),
  }))

  useEffect(() => {
    setCardsContent(cardsToShow)
  }, [])

  if (!carouselCards?.length) return null
  return (
    <>
      <Carousel slides={carouselCards} />

      <style jsx>{DashboardStyles}</style>
    </>
  )
}
