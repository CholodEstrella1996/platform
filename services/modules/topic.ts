import { PLATFORM_URL_CLASSROOM } from 'constants/urls.constants'
import api from 'services/api.client'
import { ApiRequest } from 'services/models/responseBase.model'
import { queryParams } from 'utils/helpers/queryParams'

import { TopicResponse } from '../models/topic.model'

const topicService = {
  getTopics: async (paramsRequest: ApiRequest) => {
    const { data } = await api.get<TopicResponse>(
      `${PLATFORM_URL_CLASSROOM}/subscription/my-subscriptions/topics?${queryParams(
        paramsRequest,
      )}`,
    )

    return data.content
  },
}

export default topicService
