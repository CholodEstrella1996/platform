import { useEffect, useState } from 'react'

import { useIntl } from 'react-intl'

import SubscriptionExpiredModal from 'components/molecules/SubscriptionExpiredModal'
import { messages } from 'components/molecules/SubscriptionExpiredModal/subscriptionExpiredModal.messages'
import { TIME_UNIT } from 'constants/timeUnit'

import { GetAccessComponent } from './getAccess.component'
import { DateAccess } from './getAccess.model'

const currentDate = new Date().getTime()

const { day, hour, minute, second } = TIME_UNIT
const TIME_EXPIRED = '0.0:00:00'

type Props = {
  dateTime: string
}

export const GetAccessContainer = ({ dateTime }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [endDateOfAccess, setEndDateOfAccess] = useState<DateAccess>()
  const intl = useIntl()

  const currentTimeForExpiration =
    endDateOfAccess?.day === 0 && endDateOfAccess?.hour === 0 && endDateOfAccess?.minute === 0

  const setDate = (date: number, newDate: number) => {
    const difference = date - newDate
    setEndDateOfAccess({
      day: Math.floor(difference / day),
      hour: Math.floor((difference % day) / hour),
      minute: Math.floor((difference % hour) / minute),
    })
  }

  const formatDate = (date: number) => {
    const interval = setInterval(() => {
      const today = new Date().getTime()
      if (date > today) {
        setDate(date, today)
        setIsLoading(true)
      } else {
        // TODO verificar que se elimine correctamente el Interval
        clearInterval(interval)
        setDate(date, date)
      }
    }, second)
  }
  const demoEndDate = async (date: string) => {
    const time = date.split('.')[1].split(':')
    const totalMs =
      Number(...date.split('.', 1)) * day +
      Number(time[0]) * hour +
      Number(time[1]) * minute +
      Number(time[2]) * second
    void formatDate(currentDate + totalMs)
  }

  useEffect(() => {
    void demoEndDate(dateTime)
  }, [])
  if (dateTime === TIME_EXPIRED || currentTimeForExpiration)
    return (
      <SubscriptionExpiredModal
        title={intl.formatMessage(messages.dashboard.title)}
        description={intl.formatMessage(messages.dashboard.description)}
      />
    )
  return <GetAccessComponent endDateOfAccess={endDateOfAccess} isLoading={isLoading} />
}
