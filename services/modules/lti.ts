/* eslint-disable prefer-destructuring */
import { PLATFORM_URL } from 'constants/urls.constants'
import api from 'services/api.client'
import { LauncherRedirect } from 'services/models/lti.model'

const formatLTI = (response: string) => {
  const data = response.split('?')[1].split('&')
  const params: LauncherRedirect = {}
  data.forEach((item) => {
    const key = item.split('=')
    if (item.includes('success')) params.success = key[1]
    if (item.includes('launchUrl')) params.applicationUrl = decodeURIComponent(key[1])
    if (item.includes('applicationName')) params.applicationName = key[1]
  })
  return params
}

const ltiService = {
  postLauncher: async (lti_version: string) => {
    // TODO cambiar cuando funcione endpoint
    // const { data } = await api.post(`${PLATFORM_URL}/lti-learning-session?lti_version=${lti_version}`)
    const data = `https://devplatform-gateway.cloudlabs.media?success=1&launchUrl=https%3A%2F%2Fs3-cloudlabas-dev.s3.amazonaws.com%2Ftest-app%2Fbpo_kpo02_spa_WEB%2Findex.html%3Flis_person_name_full%3Derick%26context_title%3Dtest%26context_id%3D%26user_id%3D1234%261%3D%26roles%3Dstudent&applicationName=Fake+app+name`
    return formatLTI(data)
  },
}

export default ltiService
