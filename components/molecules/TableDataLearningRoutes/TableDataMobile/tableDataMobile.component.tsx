import { useState } from 'react'

import { Divider, TablePagination } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import Dialog from 'components/atoms/Dialog'
import Spinner from 'components/atoms/Spinner'
import SubscriptionType from 'components/atoms/SubscriptionType'
import { Typography } from 'components/atoms/Typography'
import { LearningData } from 'components/modules/LearningRoutes/learningRoutes.model'
import { historyPath } from 'utils/helpers/historyPath'
import { translatePagination } from 'utils/helpers/translatePagination'

import TableDataMobileStyle from './tableDataMobile.styles'
import { MoreMenu } from '../MoreMenu'
import messages from '../tableDataLearningRoutes.messages'
import { TableDataLearningRoutesProps } from '../tableDataLearningRoutes.model'

const TableDataMobileComponent = ({
  rows,
  deleteRoute,
  activePage,
  pageChange = () => {},
  totalElements,
  pageSize,
  isLoading,
}: TableDataLearningRoutesProps) => {
  const [selectedRow, setSelectedRow] = useState<LearningData>()
  const intl = useIntl()
  const router = useRouter()
  const history = historyPath(router.pathname)
  const idFromGroups = Boolean(router.query['id-group'])

  const handleMoreMenu = (item: LearningData) => {
    setSelectedRow(item)
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    if (!event) return
    pageChange(newPage)
  }

  const renderCard = (item: LearningData) => (
    <div key={item.id} className="tableDataMobile__container">
      <div className="tableDataMobile__card">
        <Link href={`${history}/detail-learning-units/${item.id}/${item.name}`}>
          <a className="tableDataMobile__card-data">
            <Typography variant="s1" className="tableDataMobile--name">
              {item.name}
            </Typography>
            <Typography variant="s2" className="tableDataMobile-date line-clamp">
              {intl.formatMessage(messages.learningRoute.tableData.data.lastModification, {
                date: item.updatedAt,
              })}
            </Typography>
          </a>
        </Link>
        {!idFromGroups && <SubscriptionType type={item.subscription} />}
        <div
          className="tableDataMobile__icons"
          onClick={() => handleMoreMenu(item)}
          role="menuitem"
          tabIndex={0}
          onKeyUp={() => {}}>
          <MoreMenu onDeleteRoute={deleteRoute} selectedRow={selectedRow} />
        </div>
      </div>
      <Divider className="tableDataMobile__divider" light />
    </div>
  )

  if (isLoading)
    return (
      <div className="tableDataMobile__loading">
        <Spinner />
      </div>
    )

  return (
    <>
      {rows.length ? (
        <>
          {rows.map(renderCard)}
          <TablePagination
            component="div"
            count={totalElements}
            page={activePage}
            onPageChange={handleChangePage}
            rowsPerPage={pageSize}
            rowsPerPageOptions={[-1]}
            labelDisplayedRows={({ from, to, count }) => translatePagination(from, to, count)}
          />
        </>
      ) : (
        <Dialog message={intl.formatMessage(messages.learningRoute.tableData.notRows)} />
      )}
      <style jsx global>
        {TableDataMobileStyle}
      </style>
    </>
  )
}

export default TableDataMobileComponent
