import { useState } from 'react'

import { Divider, TablePagination } from '@mui/material'
import { useIntl } from 'react-intl'

import Dialog from 'components/atoms/Dialog'
import Spinner from 'components/atoms/Spinner'
import { Typography } from 'components/atoms/Typography'
import NoticeDetail from 'components/modules/Announcement/components/NoticeDetail'
import FormModal from 'components/molecules/FormModal'
import { translatePagination } from 'utils/helpers/translatePagination'

import TableDataMobileStyle from './tableDataMobile.styles'
import messages from '../tableDataAnnouncement.messages'
import { DataRow } from '../tableDataAnnouncement.model'

type Props = {
  rows: DataRow[]
  activePage: number
  pageChange?: (newPage: number) => void
  totalElements: number
  pageSize: number
  isLoading: boolean
}

const TableDataMobileComponent = ({
  rows,
  activePage,
  pageChange = () => {},
  totalElements,
  pageSize,
  isLoading,
}: Props) => {
  const [selected, setSelected] = useState<DataRow>()
  const [openDetail, setOpenDetail] = useState(false)
  const intl = useIntl()

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    if (!event) return
    pageChange(newPage)
  }

  const handleOnClick = (item: DataRow) => {
    setSelected(item)
    setOpenDetail(true)
  }

  const renderCard = (item: DataRow) => (
    <div key={item.id} className="tableDataMobile__container">
      <div className="tableDataMobile__card">
        <button type="button" onClick={() => handleOnClick(item)}>
          <span className="tableDataMobile__card-data">
            <Typography variant="s1" className="tableDataMobile--name">
              {item.affair}
            </Typography>
            <Typography variant="s2" className="tableDataMobile--mail line-clamp">
              {`${intl.formatMessage(messages.announcement.tableData.bodyData.send)}: ${
                item.shippingDate
              }`}
            </Typography>
          </span>
        </button>
      </div>
      <Divider className="tableDataMobile__divider" light />

      {openDetail && item.id === selected?.id && (
        <FormModal
          steps={[
            {
              id: 1,
              element: <NoticeDetail idAnnouncement={selected.id} openModal={setOpenDetail} />,
            },
          ]}
          title={intl.formatMessage(messages.announcement.noticeDetailModal.title)}
          isOpen={openDetail}
          onClose={() => setOpenDetail(!openDetail)}
          onSubmit={async () => void {}}
          readOnly
        />
      )}
    </div>
  )

  return (
    <>
      {isLoading && (
        <div className="tableDataMobile__loading">
          <Spinner />
        </div>
      )}
      {!isLoading &&
        (rows.length > 0 ? (
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
          <Dialog message={intl.formatMessage(messages.announcement.tableData.notRows)} />
        ))}
      <style jsx global>
        {TableDataMobileStyle}
      </style>
    </>
  )
}

export default TableDataMobileComponent
