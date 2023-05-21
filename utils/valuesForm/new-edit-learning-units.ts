import { FormProps } from 'components/modules/NewEditLearningRoute/newEditLearningRoute.model'
import { StatusDescription } from 'services/models/area.model'
import { Group } from 'services/models/group.model'
import { Types } from 'services/models/subscriptions'

const formatGroupOptions = (data: Group[]) => {
  const options = data.map((elem) => ({
    id: elem.id,
    value: String(elem.id),
    label: elem.name,
  }))
  return options
}

const formatOptions = (data: StatusDescription[]) => {
  const options = data.map((elem) => ({
    id: elem.id,
    value: String(elem.id),
    label: elem.name,
  }))
  return options
}

const formatSubscriptionOptions = (data: Types[]) => {
  const options = data.map(({ id, code }) => ({
    id,
    value: id,
    label: code,
  }))
  return options
}

const getIndexSelectedGroup = (data: Group[], idGroup: number) => {
  const selected = data.findIndex((elem) => elem.id === idGroup)
  return selected
}

const formatLearningRequest = (fields: string[], successValues: FormProps) => {
  const productUnits = fields.map((id, index) => {
    const order = index + 1
    return {
      productUnitId: Number(id),
      order,
    }
  })

  return {
    name: successValues.name,
    description: successValues.description,
    productUnits,
  }
}

export {
  formatLearningRequest,
  formatOptions,
  formatGroupOptions,
  getIndexSelectedGroup,
  formatSubscriptionOptions,
}
