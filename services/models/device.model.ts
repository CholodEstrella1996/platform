import { BaseResponse } from './responseBase.model'

type ResponseDevice = BaseResponse & {
  content: Device[] | UserDevice[]
}

type Device = {
  id: number
  uuid: string
  vendor: string
}

type UserDevice = {
  id: string
  name: string
  surname: string
  installations: Device[]
}

export type { ResponseDevice, Device, UserDevice }
