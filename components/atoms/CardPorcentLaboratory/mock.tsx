import { CardPorcentLaboratoryProps } from './cardPorcentLaboratory.model'

export const CardPorcentLaboratoryData: CardPorcentLaboratoryProps = {
  content: {
    title: 'Porcentaje de realización de laboratorios',
    lineProps: [
      {
        id: 1,
        lineTitle: 'Comportamiento de los alimentos en la digestión',
        linePosition: '0/3',
        lineProgress: 0,
      },
      {
        id: 1,
        lineTitle: 'Rh y grupos sanguíneos',
        linePosition: '1/3',
        lineProgress: 33,
      },
      {
        id: 1,
        lineTitle: 'Replicación del ADN',
        linePosition: '2/3',
        lineProgress: 66,
      },
      {
        id: 1,
        lineTitle: 'Rh y grupos sanguíneos',
        linePosition: '3/3',
        lineProgress: 100,
      },
    ],
  },
}
