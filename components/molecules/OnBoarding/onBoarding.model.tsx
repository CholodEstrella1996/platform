import { Boarding } from 'services/models/boarding.model'

export type OnBoardingProps = {
  boardingContent: Boarding[]
  onSubmit: () => Promise<void>
  onClose: () => void | Promise<void>
}
