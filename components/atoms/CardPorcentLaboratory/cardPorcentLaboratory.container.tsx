import { useEffect, useState } from 'react'

import { useNotification } from 'hooks/notification'

import { CardPorcentLaboratoryComponent } from './cardPorcentLaboratory.component'
import { CardPorcentLaboratoryProps } from './cardPorcentLaboratory.model'
import { CardPorcentLaboratoryData } from './mock'

export const CardPorcentLaboratoryContainer = () => {
  const [cardPorcent, setCardPorcent] = useState<CardPorcentLaboratoryProps>()
  const { onError } = useNotification()
  const fetchCardPorcent = async () => {
    try {
      setCardPorcent(CardPorcentLaboratoryData)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      onError('Error')
    }
  }
  useEffect(() => {
    void fetchCardPorcent()
  }, [])
  if (!cardPorcent) return null
  return <CardPorcentLaboratoryComponent content={cardPorcent.content} />
}
