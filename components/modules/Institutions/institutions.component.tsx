import { TablePagination } from '@mui/material'
import Link from 'next/link'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import Dialog from 'components/atoms/Dialog'
import HeaderTitle from 'components/atoms/HeaderTitle'
import CardComponent from 'components/molecules/Card'
import { Institutions } from 'services/models/institutions.model'
import { translatePagination } from 'utils/helpers/translatePagination'

import messages from './institutions.messages'
import { DataSearch } from './institutions.model'
import { InstitutionsStyles } from './institutions.styles'

const CARDS_PER_PAGE = 10
export const InstitutionsComponent = (props: Institutions) => {
  const intl = useIntl()
  const { content, totalElements, number } = props

  const { setValue } = useFormContext<DataSearch>()

  const handlePageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    if (event) setValue('pageNumber', newPage)
  }
  return (
    <>
      <div className="institutions__container">
        <HeaderTitle title={intl.formatMessage(messages.title)} />

        {content.length ? (
          <div className="institutions__list">
            {content.map(({ id, name, educationKind, sector }) => (
              <Link href={`/institutions/detail-institution/${id}/${name}`} key={id} passHref>
                <a>
                  <CardComponent
                    name={name}
                    educationKind={educationKind.displayName}
                    sector={sector.displayName}
                    isFromGroups={false}
                  />
                </a>
              </Link>
            ))}
          </div>
        ) : (
          <Dialog message={intl.formatMessage(messages.empty)} />
        )}

        <TablePagination
          component="div"
          count={totalElements}
          page={number}
          onPageChange={handlePageChange}
          rowsPerPage={CARDS_PER_PAGE}
          rowsPerPageOptions={[-1]}
          className="institutions__list__pagination"
          labelDisplayedRows={({ from, to, count }) => translatePagination(from, to, count)}
        />
      </div>

      <style jsx>{InstitutionsStyles}</style>
    </>
  )
}
