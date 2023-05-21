/* eslint-disable no-console */
import { useEffect, useState } from 'react'

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { OptionProps } from 'components/atoms/Select/select.models'
import { useNotification } from 'hooks/notification'
import { ResponseLearning } from 'services/models/learning.model'
import { ApiRequest } from 'services/models/responseBase.model'
import learningService from 'services/modules/learning-unit'
import subscriptionService from 'services/modules/subscriptions'

import { LearningRouteComponent } from './learningRoutes.component'
import messages from './learningRoutes.messages'
import { DataFilter } from './learningRoutes.model'

type Props = {
  id?: number
}

export const LearningRouteContainer = ({ id: idGroup }: Props) => {
  const [learningData, setLearningData] = useState<ResponseLearning>()
  const [subscriptions, setSubscriptions] = useState<OptionProps[]>()
  const [pageNumber, setPageNumber] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const { onSuccess, onError } = useNotification()
  const intl = useIntl()
  const methods = useForm<DataFilter>({ mode: 'all' })
  const { handleSubmit } = methods

  const getLearningUnits = async (numberPage: number, dataFilter?: DataFilter) => {
    setIsLoading(true)
    const params: ApiRequest = {
      pageNumber: numberPage,
      pageSize: 10,
      ...(dataFilter?.subscription && { subscriptionId: dataFilter.subscription }),
      ...(dataFilter?.search && { searchQuery: dataFilter?.search }),
    }
    try {
      const data = !idGroup
        ? await learningService.getLearningUnits(params)
        : await learningService.getLearningUnitsFromGroup(idGroup)
      setLearningData(data)
    } catch (error) {
      console.log('getLEarningUnits error :>> ', error)
      onError(intl.formatMessage(messages.learningRoute.getMemberError))
    }
    setIsLoading(false)
  }

  const getSubscriptionsList = async () => {
    const data = await subscriptionService.getSubscriptions()
    const formatData = data.map(({ id, code }) => ({
      id,
      value: id,
      label: code,
    }))
    setSubscriptions(formatData)
  }

  const onClickHelper = (page?: number, data?: DataFilter) => {
    void getLearningUnits(page ?? pageNumber, data)
    if (page) setPageNumber(page)
  }

  const handleSearch: SubmitHandler<DataFilter> = async (data) => onClickHelper(0, data)

  const deleteUnit = async (id: number) => {
    try {
      await learningService.deleteUnit(id)
      onSuccess(intl.formatMessage(messages.learningRoute.delete.success))
      void getLearningUnits(0)
    } catch (err) {
      onError(intl.formatMessage(messages.learningRoute.delete.error))
    }
  }

  useEffect(() => {
    void getLearningUnits(0)
    if (!subscriptions) void getSubscriptionsList()
  }, [])

  if (!learningData) return null
  return (
    <FormProvider {...methods}>
      <LearningRouteComponent
        isLoading={isLoading}
        data={learningData}
        deleteRoute={(id) => void deleteUnit(id)}
        onSearch={handleSubmit(handleSearch)}
        onClickHelper={(page: number) => onClickHelper(page)}
        idGroup={idGroup}
        selectOptions={subscriptions ?? []}
      />
    </FormProvider>
  )
}
