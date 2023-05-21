import { Device, UserDevice } from 'services/models/device.model'

type DevicesDataProps = {
  userDevices: UserDevice[]
  onDelete: (id: number) => void
  isDeleting: boolean
}

type Devices = Device & {
  index: number
  onDelete: (id: number) => void
  isDeleting: boolean
  itemToDelete: number
}

export type { DevicesDataProps, Devices }
