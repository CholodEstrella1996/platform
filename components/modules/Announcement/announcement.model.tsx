import { ResponseAnnouncement } from 'services/models/announcement.model'

type AnnouncementTableContainerProps = {
  onSearch: () => Promise<void>
  pageChange?: (newPage: number) => void
  announcements: ResponseAnnouncement
  isLoading: boolean
}

type AnnouncementTableProps = AnnouncementTableContainerProps & {
  getAnnouncements: (numberPage: number, classroomId: number) => Promise<void>
}

type AnnouncementProps = {
  announcements: ResponseAnnouncement
  onSearch: () => Promise<void>
  onClickHelper: (page: number) => void
  isLoading: boolean
  getAnnouncements: (numberPage: number, classroomId: number) => Promise<void>
  groupName: string
}

type DataFilter = {
  search?: string
}

export type {
  AnnouncementProps,
  AnnouncementTableContainerProps,
  AnnouncementTableProps,
  DataFilter,
}
