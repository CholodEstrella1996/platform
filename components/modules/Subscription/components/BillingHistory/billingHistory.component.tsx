import { DownloadOutline } from '@easy-eva-icons/react'
import { Table, TableFooter, TablePagination, TableRow, Divider, IconButton } from '@mui/material'
import { useIntl } from 'react-intl'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { TIME_ZONE_UTC } from 'constants/timeZone'
import { useMediaQuery } from 'hooks/use-media-query'

import messages from '../../subscription.messages'
import { Billing } from '../../subscription.model'
import { SubscriptionStyles } from '../../subscription.styles'

const { colors, mediaQueries } = theme

type BillingProp = {
  data: Billing[]
}

export const BillingHistory = ({ data }: BillingProp) => {
  const intl = useIntl()
  const isTablet = useMediaQuery(mediaQueries.tablet)
  return (
    <>
      <div className="subscription__card">
        <Typography variant={isTablet ? 'h5' : 'h6'} color={colors.primary[500]}>
          {intl.formatMessage(messages.subscription.billing.title)}
        </Typography>
        <div className="billing__list">
          {!!data.length &&
            data.map((info) => (
              <>
                <div className="billing__card" key={info.id}>
                  <div className="billing__card__info">
                    <Typography variant="s2" color={colors.neutrals[500]}>
                      <span className="clamp">{info.number}</span>
                    </Typography>
                    <Typography variant="c1" color={colors.neutrals[300]}>
                      {intl.formatDate(info.date, { timeZone: TIME_ZONE_UTC })}
                    </Typography>
                  </div>
                  <div className="fill" />
                  {isTablet && (
                    <Typography variant="s2" color={colors.neutrals[500]}>
                      ${info.price}
                    </Typography>
                  )}
                  <div className={`billing__card__state state--${info.state}`} />
                  <IconButton onClick={() => {}}>
                    <DownloadOutline />
                  </IconButton>
                </div>
                <Divider />
              </>
            ))}
        </div>
        {!!data.length && (
          <Table>
            <TableFooter>
              <TableRow>
                <TablePagination
                  count={10}
                  page={0}
                  onPageChange={() => {}}
                  rowsPerPage={5}
                  rowsPerPageOptions={[-1]}
                  className="subscription__card__pagination"
                />
              </TableRow>
            </TableFooter>
          </Table>
        )}
      </div>
      <style jsx>{SubscriptionStyles}</style>
    </>
  )
}
