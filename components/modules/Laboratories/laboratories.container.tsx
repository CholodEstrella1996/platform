import { useEffect, useState } from 'react'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import axios from 'axios'
import { FormProvider, useForm, useWatch } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import Spinner from 'components/atoms/Spinner'
import ErrorCard from 'components/molecules/ErrorCard'
import { DEFAULT_NOT_ALLOWED_IMG_PROPS } from 'constants/defaultStaticImages'
import { STORE_PAGE_URL } from 'constants/urls.constants'
import { useNotification } from 'hooks/notification'
import { LaboratoryResponse } from 'services/models/applications.model'
import { ApiRequest } from 'services/models/responseBase.model'
import applicationService from 'services/modules/applications'

import { LaboratoriesComponent } from './laboratories.component'
import messages from './laboratories.messages'
import { DataFilter } from './laboratories.model'

const STORE_URL = `${STORE_PAGE_URL}/explore-labs`
const PAGE_SIZE = 6

const { getMySubscriptionsApplications } = applicationService

const LaboratoriesContainer = () => {
  const intl = useIntl()
  const { onError } = useNotification()

  const [error404, setError404] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [laboratories, setLaboratories] = useState<LaboratoryResponse>()

  const methods = useForm<DataFilter>({ mode: 'all' })
  const { control } = methods

  const searchQuery = useWatch({ control, name: 'search' })
  const areaQuery = useWatch({ control, name: 'area' })
  const topicQuery = useWatch({ control, name: 'topic' })
  const subscriptionId = useWatch({ control, name: 'subscription' })

  const fetchLaboratories = async (pageNumber = 0) => {
    setIsLoading((prevState) => !prevState)

    const params: ApiRequest = {
      pageNumber,
      pageSize: PAGE_SIZE,
      areaId: areaQuery,
      topicId: topicQuery,
      subscriptionId,
      searchQuery,
    }
    try {
      const response = await getMySubscriptionsApplications(params)
      setLaboratories(response)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('GetLabs error >>: ', error)
      if (!axios.isAxiosError(error)) return
      if (error.response?.status === 404) {
        setError404(true)
        return
      }
      onError(intl.formatMessage(messages.notifications.getLaboratoryError))
    }
    setIsLoading((prevState) => !prevState)
  }

  const onPageChange = (pageNumber: number) => fetchLaboratories(pageNumber)

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      void fetchLaboratories()
    }, 1000)

    return () => clearTimeout(delaySearch)
  }, [searchQuery])

  if (error404) {
    return (
      <ErrorCard
        image={DEFAULT_NOT_ALLOWED_IMG_PROPS.image.src}
        title={intl.formatMessage(messages.notifications.subscriptionError.title)}
        description={intl.formatMessage(messages.notifications.subscriptionError.description)}>
        <a href={STORE_URL} target="_blank" rel="noopener noreferrer">
          <Button icon={<ArrowForwardIcon />}>
            {intl.formatMessage(messages.notifications.subscriptionError.textButton)}
          </Button>
        </a>
      </ErrorCard>
    )
  }

  if (isLoading && !laboratories) return <Spinner />

  if (!laboratories) return null

  return (
    <FormProvider {...methods}>
      <LaboratoriesComponent
        laboratories={laboratories}
        onPageChange={onPageChange}
        isLoading={isLoading}
        fetchLaboratories={fetchLaboratories}
      />
    </FormProvider>
  )
}
export default LaboratoriesContainer
