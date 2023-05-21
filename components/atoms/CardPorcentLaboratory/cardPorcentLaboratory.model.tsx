export type CardPorcentLaboratoryProps = {
  content: {
    title: string
    lineProps: LineProps[]
  }
}

export type LineProps = {
  id: number
  lineTitle: string
  lineProgress: 0 | 33 | 66 | 100
  linePosition: string
}
