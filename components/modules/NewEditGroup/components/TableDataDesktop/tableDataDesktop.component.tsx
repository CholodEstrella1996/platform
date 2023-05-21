/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState } from 'react'

import { AccountCircleOutlined } from '@mui/icons-material'
import { Box, Checkbox, TablePagination } from '@mui/material'
import {
  DataGrid,
  enUS,
  esES,
  trTR,
  ptBR,
  GridColumns,
  GridRenderCellParams,
} from '@mui/x-data-grid'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { Avatar } from 'components/atoms/Avatar'
import Chip from 'components/atoms/Chip'
import Dialog from 'components/atoms/Dialog'
import SubscriptionType from 'components/atoms/SubscriptionType'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { useAppContext } from 'context/appContext'
import { translatePagination } from 'utils/helpers/translatePagination'

import { TableDataDesktopStyle } from './tableDataDesktop.styles'
import messages from '../../newEditGroup.messages'
import { TableProps, TableData, NewEditGroupForm } from '../../newEditGroup.model'

const gridLanguage = {
  en: enUS,
  es: esES,
  pt: ptBR,
  tr: trTR,
}

const TEACHERS_ROLE = 'organization-teacher'
const STUDENTS_ROLE = 'organization-student'
const TEACHERS_LIST = 'teachersInCharge'
const STUDENTS_LIST = 'students'

const { colors } = theme

const TableDataDesktopComponent = ({
  rows,
  totalElements,
  stepNumber,
  onPageChange,
  pageSize,
  isLoading,
}: TableProps) => {
  const intl = useIntl()
  const { language } = useAppContext()
  const [activePage, setActivePage] = useState(0)
  const { control } = useFormContext<NewEditGroupForm>()
  const { fields, append, remove } = useFieldArray({
    control,
    name: stepNumber === 2 ? TEACHERS_LIST : STUDENTS_LIST,
    keyName: 'fieldId',
  })
  const role = stepNumber === 2 ? TEACHERS_ROLE : STUDENTS_ROLE
  const countTeachers = intl.formatMessage(messages.table.rowsSelected, {
    quantity: fields.length,
    p: '',
  })
  const countStudents = intl.formatMessage(messages.table.rowsSelected, {
    quantity: fields.length,
    p: 's',
  })

  const handleChange = (params: GridRenderCellParams) => {
    const findItem = fields.findIndex((item) => item.id === params.id)
    if (findItem !== -1) remove(findItem)
    else append(params.row as TableData)
  }

  const handlePageChange = (page: number) => {
    onPageChange(role, page)
    setActivePage(page)
  }

  const columns: GridColumns = [
    {
      field: 'options',
      headerName: intl.formatMessage(messages.table.headerOptions),
      headerClassName: 'hide-header-name actions__menu',
      width: 80,
      headerAlign: 'center',
      disableColumnMenu: false,
      sortable: false,
      hideable: false,
      filterable: false,
      align: 'center',
      renderCell: (params: GridRenderCellParams) => (
        <Checkbox
          size="medium"
          checked={!!fields.find((row) => row.id === params.id)}
          onChange={() => handleChange(params)}
        />
      ),
    },
    {
      field: 'icon',
      headerName: intl.formatMessage(messages.table.headerIcon),
      headerClassName: 'hide-header-name',
      width: 60,
      disableColumnMenu: true,
      sortable: false,
      align: 'center',
      renderCell: (params: GridRenderCellParams) =>
        params.row?.avatarUrl ? (
          <Avatar image={params.row?.avatarUrl ?? undefined} size="small" />
        ) : (
          <AccountCircleOutlined className="tb-desktop-icons-user" />
        ),
    },
    {
      field: 'name',
      flex: 1,
      disableColumnMenu: true,
      headerClassName: 'table__header',
      headerName: intl.formatMessage(messages.table.headerName),
    },
    {
      field: 'email',
      flex: 1,
      disableColumnMenu: true,
      headerClassName: 'table__header',
      headerName: intl.formatMessage(messages.table.headerMail),
    },
    {
      field: 'subscription',
      headerName: intl.formatMessage(messages.table.headerSubscription),
      width: 180,
      disableColumnMenu: true,
      headerClassName: 'table__header',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      renderCell: (item: GridRenderCellParams) => {
        const { subscription } = item.row
        return <SubscriptionType type={subscription ? subscription.code : '-'} />
      },
    },
    {
      field: 'state',
      headerName: intl.formatMessage(messages.table.headerStatus),
      width: 130,
      disableColumnMenu: true,
      headerClassName: 'table__header',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      renderCell: (item: GridRenderCellParams) => (
        <Chip title={item.row.status.displayName} status={item.row.status.name} fullWidth />
      ),
    },
  ]
  const noRowsOverlayText = () => <div />

  return (
    <>
      <Box
        className="tableDataDesktop-table"
        sx={{
          height: `${isLoading || rows.length > 0 ? 'auto' : '3.125rem'}`,
          width: '100%',
        }}>
        <DataGrid
          loading={isLoading}
          className="tableDataDesktop__container"
          rows={isLoading ? [] : rows}
          columns={columns}
          disableSelectionOnClick
          autoHeight
          localeText={gridLanguage[language].components.MuiDataGrid.defaultProps.localeText}
          hideFooter
          components={{
            NoRowsOverlay: () => noRowsOverlayText(),
          }}
        />
        {!!rows.length && !isLoading && (
          <div className={`footer__table ${fields.length ? 'footer__pagination' : ''}`}>
            {!!fields.length && (
              <Typography variant="s1" color={colors.neutrals[500]}>
                {fields.length === 1 ? countTeachers : countStudents}
              </Typography>
            )}
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
        )}
      </Box>
      {!rows.length && !isLoading && <Dialog message={intl.formatMessage(messages.table.noRows)} />}

      <style jsx>{TableDataDesktopStyle}</style>
    </>
  )
}

export default TableDataDesktopComponent
