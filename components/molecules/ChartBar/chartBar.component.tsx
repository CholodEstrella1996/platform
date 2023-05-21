import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
import { useIntl } from 'react-intl'

import { theme } from 'components/atoms/ThemeProvider'

import { ChartBarProps } from './chartBar.model'

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false })

const { colors, typography } = theme
export const ChartBarComponent = ({
  positionProp,
  categoriesSeries,
  categoriesPositionTop,
  horizontalProp,
  dataSeriesProp,
  nameSeries,
  offsetYProp,
  colorsBar,
  chartType,
  showLabels,
}: ChartBarProps) => {
  const intl = useIntl()
  const dataSeries = [
    {
      name: nameSeries,
      data: dataSeriesProp,
    },
  ]

  const ConfigBase: ApexOptions = {
    // Color de las barras
    fill: {
      colors: [colors.primary[500]],
    },
    chart: {
      fontFamily: typography.name,
    },
    stroke: {
      width: chartType === 'line' ? 2 : 5,
    },
    // Opciones de colores de barras -> none,lighten,darken
    states: {
      hover: {
        filter: {
          type: 'lighten',
          value: 0.5,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'lighten',
          value: 0.5,
        },
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: positionProp, // top, center, bottom
        },
        horizontal: horizontalProp, // horizontal o vertical
      },
    },
    dataLabels: {
      enabled: showLabels,
      offsetY: offsetYProp, // movimiento de numeros en las barras
      style: {
        fontSize: '0.25rem',
        colors: [colors.neutrals[colorsBar]],
      },
    },

    xaxis: {
      position: categoriesPositionTop ? 'top' : 'bottom',
    },
  }

  const linearAxis: ApexOptions = {
    xaxis: {
      categories: categoriesSeries,
      labels: {
        formatter: (value: string) => {
          if (!value) return ''
          const date = new Date(value.replaceAll('-', ','))
          return intl.formatDate(date, { month: '2-digit', day: 'numeric' })
        },
      },
    },
  }

  const areaAxis: ApexOptions = {
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      opposite: true,
    },
  }

  const areaOptions = { ...ConfigBase, ...areaAxis }
  const linearOptions = { ...ConfigBase, ...linearAxis }
  const chartOptions = chartType === 'area' ? areaOptions : linearOptions
  return (
    <div className="mixed-chart">
      <ApexCharts options={chartOptions} series={dataSeries} type={chartType} />
    </div>
  )
}
