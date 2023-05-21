import { ApiRequest, ApiRequestMember } from 'services/models/responseBase.model'

const queryParams = (paramsRequest: ApiRequest) => {
  const queryParamsArray = []
  if (paramsRequest.pageSize) {
    queryParamsArray.push(`pageSize=${paramsRequest.pageSize}`)
  }
  if (paramsRequest.pageNumber) {
    queryParamsArray.push(`pageNumber=${paramsRequest.pageNumber}`)
  }
  if (paramsRequest.status) {
    queryParamsArray.push(`status=${paramsRequest.status}`)
  }
  if (paramsRequest.searchQuery) {
    queryParamsArray.push(`searchQuery=${paramsRequest.searchQuery}`)
  }
  if (paramsRequest.areaIds) {
    queryParamsArray.push(`areaIds=${paramsRequest.areaIds}`)
  }
  if (paramsRequest.areaId) {
    queryParamsArray.push(`areaId=${paramsRequest.areaId}`)
  }
  if (paramsRequest.topicId) {
    queryParamsArray.push(`topicId=${paramsRequest.topicId}`)
  }
  if (paramsRequest.classroomId) {
    queryParamsArray.push(`classroomId=${paramsRequest.classroomId}`)
  }
  if (paramsRequest.general) {
    queryParamsArray.push(`general=${paramsRequest.general}`)
  }
  if (paramsRequest.userId) {
    queryParamsArray.push(`userId=${paramsRequest.userId}`)
  }
  if (paramsRequest.subscriptionId) {
    queryParamsArray.push(`subscriptionId=${paramsRequest.subscriptionId}`)
  }
  if (paramsRequest.applicationIds) {
    queryParamsArray.push(`applicationIds=${paramsRequest.applicationIds}`)
  }
  if (paramsRequest.startDate) {
    queryParamsArray.push(`startDate=${paramsRequest.startDate}`)
  }
  if (paramsRequest.endDate) {
    queryParamsArray.push(`endDate=${paramsRequest.endDate}`)
  }

  if (paramsRequest.applicationMeanAssignment) {
    queryParamsArray.push(`applicationMeanAssignment=${paramsRequest.applicationMeanAssignment}`)
  }
  if (paramsRequest.areaMeanAssignment) {
    queryParamsArray.push(`areaMeanAssignment=${paramsRequest.areaMeanAssignment}`)
  }
  if (paramsRequest.applicationPercentage) {
    queryParamsArray.push(`applicationPercentage=${paramsRequest.applicationPercentage}`)
  }
  if (paramsRequest.areaPercentage) {
    queryParamsArray.push(`areaPercentage=${paramsRequest.areaPercentage}`)
  }
  if (paramsRequest.topicPercentage) {
    queryParamsArray.push(`topicPercentage=${paramsRequest.topicPercentage}`)
  }
  if (paramsRequest.organizationId) {
    queryParamsArray.push(`organizationId=${paramsRequest.organizationId}`)
  }
  if (paramsRequest.areaCompletion) {
    queryParamsArray.push(`areaCompletion=${paramsRequest.areaCompletion}`)
  }
  if (paramsRequest.applicationCompletion) {
    queryParamsArray.push(`applicationCompletion=${paramsRequest.applicationCompletion}`)
  }

  const params = queryParamsArray.join('&')
  return params
}

const queryParamsRole = (paramsRequest: ApiRequestMember) => {
  let params = queryParams(paramsRequest)
  if (paramsRequest.role) {
    params = params.concat(`&role=${paramsRequest.role}`)
  }
  return params
}

export { queryParams, queryParamsRole }
