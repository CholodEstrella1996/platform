import { useState } from 'react'

import { AccountCircleOutlined } from '@mui/icons-material'
import { Divider, TablePagination, Checkbox } from '@mui/material'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { Avatar } from 'components/atoms/Avatar'
import Chip from 'components/atoms/Chip'
import Dialog from 'components/atoms/Dialog'
import Spinner from 'components/atoms/Spinner'
import SubscriptionType from 'components/atoms/SubscriptionType'
import { Typography } from 'components/atoms/Typography'
import { translatePagination } from 'utils/helpers/translatePagination'

import TableDataMobileStyle from './tableDataMobile.styles'
import messages from '../../newEditGroup.messages'
import { NewEditGroupForm, TableData, TableProps } from '../../newEditGroup.model'

const TEACHERS_ROLE = 'organization-teacher'
const STUDENTS_ROLE = 'organization-student'
const TEACHERS_LIST = 'teachersInCharge'
const STUDENTS_LIST = 'students'

const TableDataMobileComponent = ({
  rows,
  onPageChange = () => {},
  totalElements,
  stepNumber,
  isLoading,
}: TableProps) => {
  const intl = useIntl()
  const [activePage, setActivePage] = useState(0)
  const { control } = useFormContext<NewEditGroupForm>()
  const { fields, append, remove } = useFieldArray({
    control,
    name: stepNumber === 2 ? TEACHERS_LIST : STUDENTS_LIST,
    keyName: 'fieldId',
  })
  const role = stepNumber === 2 ? TEACHERS_ROLE : STUDENTS_ROLE
  const pageSize = 10

  const handleChange = (item: TableData) => {
    const findItem = fields.findIndex((row) => row.id === item.id)
    if (findItem !== -1) remove(findItem)
    else append(item)
  }

  const handlePageChange = (page: number) => {
    onPageChange(role, page)
    setActivePage(page)
  }

  const renderCard = (item: TableData) => (
    <div key={item.id}>
      <div className="tableCheckbox__mobile">
        <Checkbox
          size="small"
          checked={!!fields.find((row) => row.id === item.id)}
          onChange={() => handleChange(item)}
        />
        <div className="tableCheckbox__mobile__content">
          {item?.avatarUrl ? (
            <div className="tableCheckbox__mobile__avatar">
              <Avatar image={item?.avatarUrl} size="medium" />
            </div>
          ) : (
            <AccountCircleOutlined className="tableCheckbox__mobile__avatar" />
          )}
          <div className="tableCheckbox__member">
            <span className="tableCheckbox__mobile__detail">
              <Typography variant="s1" className="mobile__detail__name">
                {item.name}
              </Typography>
              <Typography variant="s2" className="mobile__detail__email line-clamp">
                {item.email}
              </Typography>
            </span>
            <div className="tableCheckbox__mobile__status__subs">
              <SubscriptionType type={item.subscription ? item.subscription.code : '-'} />
              <Chip title={item.status.displayName} status={item.status.name} fullWidth />
            </div>
          </div>
        </div>
      </div>
      <Divider className="tableCheckbox__divider" light />
    </div>
  )

  if (!rows.length) return <Dialog message={intl.formatMessage(messages.table.noRows)} />

  return (
    <>
      {isLoading ? (
        <div className="tableMobile__spinner">
          <Spinner />
        </div>
      ) : (
        rows.map(renderCard)
      )}
      <div className="footer__table">
        <TablePagination
          component="div"
          count={totalElements}
          onPageChange={(_, page) => handlePageChange(page)}
          rowsPerPage={pageSize}
          rowsPerPageOptions={[pageSize]}
          page={activePage}
          sx={{ borderBottom: 'none' }}
          labelDisplayedRows={({ from, to, count }) => translatePagination(from, to, count)}
        />
      </div>
      <style jsx global>
        {TableDataMobileStyle}
      </style>
    </>
  )
}

export default TableDataMobileComponent
