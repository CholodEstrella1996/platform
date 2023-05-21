export type ChartBarProps = {
  positionProp: 'top' | 'center' | 'bottom'
  categoriesSeries?: string[]
  categoriesPositionTop?: boolean
  horizontalProp?: boolean
  dataSeriesProp:
    | number[] // linear
    | { x: string; y: number }[] // area - (x: date, y: value)
  nameSeries: string
  offsetYProp: -20 | 7
  colorsBar: 500 | 50
  chartType: 'bar' | 'area' | 'line'
  showLabels?: boolean
}
