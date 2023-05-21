import { GroupById } from 'services/models/group.model'

export type Group = GroupById

export type NavigationProps = {
  onDelete: (id: number) => void
  id: number
  name: string
}
