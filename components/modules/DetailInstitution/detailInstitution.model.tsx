type DetailInstitutionProps = {
  idInstitution: number
}

type DetailInstitution = {
  content: {
    id: number
    name: string
  }
}

type DataFilter = {
  subscriptionId?: number
  dashboardId?: number
}

export type { DetailInstitutionProps, DetailInstitution, DataFilter }
