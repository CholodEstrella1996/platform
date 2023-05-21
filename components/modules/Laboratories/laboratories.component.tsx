import { TablePagination } from '@mui/material'
import { useIntl } from 'react-intl'

import CardLab from 'components/atoms/CardLab'
import Dialog from 'components/atoms/Dialog'
import Spinner from 'components/atoms/Spinner'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { translatePagination } from 'utils/helpers/translatePagination'

import Filters from './components/Filters'
import Header from './components/Header'
import messages from './laboratories.messages'
import { LaboratoriesProps } from './laboratories.model'
import { LaboratoriesLocalStyles } from './laboratories.styles'

const CARDS_PER_PAGE = 6

export const LaboratoriesComponent = ({
  laboratories,
  onPageChange,
  isLoading,
  fetchLaboratories,
}: LaboratoriesProps) => {
  const intl = useIntl()

  const { content: cards, totalElements, number } = laboratories

  const formatLabIcon = (
    id: number,
    title: string,
    media: string,
    colorLight: string,
    colorDark: string,
    color: string,
  ) => {
    const cardLabIcon = media
      ? [
          {
            id,
            title,
            subtitle: '',
            colorLight,
            color,
            colorDark,
            avatar: media,
          },
        ]
      : []
    return cardLabIcon
  }

  const handlePageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    if (event) void onPageChange(newPage)
  }

  return (
    <>
      <div className="laboratories__page">
        <Header title={intl.formatMessage(messages.header.title)} />

        <div className="filters__container">
          <div className="filter__label">
            <Typography variant="s1" color={theme.colors.neutrals[400]}>
              {intl.formatMessage(messages.filters.label)}
            </Typography>
          </div>

          <Filters fetchLaboratories={fetchLaboratories} />
        </div>

        <div className="laboratory__cards">
          {isLoading ? (
            <Spinner />
          ) : (
            Boolean(cards.length) && (
              <>
                <div className="cards__grid">
                  {cards.map(
                    ({
                      id,
                      name,
                      productUnitId,
                      iconUrl,
                      colorLight,
                      color,
                      colorDark,
                      firstMedia,
                    }) => (
                      <CardLab
                        id={id}
                        firstMedia={firstMedia}
                        title={name}
                        subtitle={intl.formatMessage(messages.type)}
                        href={`/laboratories/detail-laboratory/${productUnitId}/${name}`}
                        group={formatLabIcon(id, name, iconUrl, colorLight, colorDark, color)}
                        key={id}
                      />
                    ),
                  )}
                </div>

                <TablePagination
                  component="div"
                  count={totalElements}
                  page={number}
                  onPageChange={handlePageChange}
                  rowsPerPage={CARDS_PER_PAGE}
                  rowsPerPageOptions={[-1]}
                  className="laboratory__cards__pagination"
                  labelDisplayedRows={({ from, to, count }) => translatePagination(from, to, count)}
                />
              </>
            )
          )}
        </div>

        {!cards.length && !isLoading && (
          <div className="laboratory__cards__empty">
            <Dialog message={intl.formatMessage(messages.noLaboratories.dialog)} />
          </div>
        )}
      </div>

      <style jsx>{LaboratoriesLocalStyles}</style>
    </>
  )
}
