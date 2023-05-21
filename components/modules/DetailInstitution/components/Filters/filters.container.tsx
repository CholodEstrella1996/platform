import { useEffect, useState } from 'react'

import { FormProvider, useForm } from 'react-hook-form'

import { OptionProps } from 'components/atoms/Select/select.models'
import subscriptionService from 'services/modules/subscriptions'

import { FiltersComponent } from './filters.component'
import { DataFilter } from '../../detailInstitution.model'

export const FiltersContainer = () => {
  const [listDashboard, setListDashboard] = useState<OptionProps[]>([])
  const [subscriptions, setSubscriptions] = useState<OptionProps[]>([])

  const methods = useForm<DataFilter>({ mode: 'all' })

  const fetchDashboard = async () => {
    try {
      const formatData = [
        {
          id: 1,
          value: 'Dashboard 1',
          label: 'Dashboard 1',
        },
      ]
      setListDashboard(formatData)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('getGroups() --> error\n', error)
    }
  }

  const getSubscriptionsList = async () => {
    try {
      const data = await subscriptionService.getSubscriptions()
      const formatData = data.map(({ id, code }) => ({
        id,
        value: id,
        label: code,
      }))
      setSubscriptions(formatData)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('getGroups() --> error\n', error)
    }
  }

  useEffect(() => {
    void fetchDashboard()
    void getSubscriptionsList()
  }, [])

  if (!subscriptions.length) return null
  return (
    <FormProvider {...methods}>
      <FiltersComponent subscriptionList={subscriptions} dashboardList={listDashboard} />
    </FormProvider>
  )
}
