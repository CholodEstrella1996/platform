enum AssignmentFlow {
  DetailMember = 'detail-member',
  DetailGroup = 'detail-group',
  Laboratories = 'laboratories/assignments',
  DetailInstitution = 'detail-institution',
}

enum AssignmentFilter {
  User = 'user',
  Subscription = 'subscription',
  Classroom = 'classroom',
  Nullish = '',
  Area = 'area',
  Application = 'application',
  Status = 'status',
}

export enum AssignmentRoles {
  orgManager = 'organization-manager',
  orgTeacher = 'organization-teacher',
  orgStudent = 'organization-student',
  orgDirector = 'organization-director',
  orgGovernment = 'organization-government',
  familyParent = 'family-parent',
}

const AVAILABLE_FLOWS = [
  AssignmentFlow.DetailMember,
  AssignmentFlow.DetailGroup,
  AssignmentFlow.Laboratories,
  AssignmentFlow.DetailInstitution,
] as const

const ARE_STATIC_FILTERS = [
  AssignmentFilter.Area,
  AssignmentFilter.Application,
  AssignmentFilter.Status,
] as const

const CASES = {
  [AssignmentFlow.Laboratories]: {
    [AssignmentRoles.orgManager]: [
      AssignmentFilter.User,
      AssignmentFilter.Subscription,
      AssignmentFilter.Classroom,
    ] as const,
    [AssignmentRoles.orgGovernment]: [
      AssignmentFilter.User,
      AssignmentFilter.Subscription,
      AssignmentFilter.Classroom,
    ] as const,
    [AssignmentRoles.orgTeacher]: [
      AssignmentFilter.User,
      AssignmentFilter.Subscription,
      AssignmentFilter.Classroom,
    ] as const,
    [AssignmentRoles.orgStudent]: [AssignmentFilter.Nullish] as const,
    [AssignmentRoles.orgDirector]: [
      AssignmentFilter.User,
      AssignmentFilter.Subscription,
      AssignmentFilter.Classroom,
    ] as const,
    [AssignmentRoles.familyParent]: [AssignmentFilter.User] as const,
  },

  [AssignmentFlow.DetailInstitution]: {
    [AssignmentRoles.orgManager]: [
      AssignmentFilter.User,
      AssignmentFilter.Subscription,
      AssignmentFilter.Classroom,
    ] as const,
    [AssignmentRoles.orgGovernment]: [
      AssignmentFilter.User,
      AssignmentFilter.Subscription,
      AssignmentFilter.Classroom,
    ] as const,
    [AssignmentRoles.orgTeacher]: [AssignmentFilter.User, AssignmentFilter.Subscription] as const,
    [AssignmentRoles.orgStudent]: [AssignmentFilter.Nullish] as const,
    [AssignmentRoles.orgDirector]: [
      AssignmentFilter.User,
      AssignmentFilter.Subscription,
      AssignmentFilter.Classroom,
    ] as const,
    [AssignmentRoles.familyParent]: [AssignmentFilter.User] as const,
  },

  [AssignmentFlow.DetailGroup]: {
    [AssignmentRoles.orgManager]: [AssignmentFilter.User] as const,
    [AssignmentRoles.orgGovernment]: [AssignmentFilter.User] as const,
    [AssignmentRoles.orgTeacher]: [AssignmentFilter.User] as const,
    [AssignmentRoles.orgStudent]: [AssignmentFilter.Nullish] as const,
    [AssignmentRoles.orgDirector]: [AssignmentFilter.User] as const,
    [AssignmentRoles.familyParent]: [AssignmentFilter.Nullish],
  },

  [AssignmentFlow.DetailMember]: {
    [AssignmentRoles.orgManager]: [AssignmentFilter.Subscription] as const,
    [AssignmentRoles.orgGovernment]: [AssignmentFilter.Subscription] as const,
    [AssignmentRoles.orgTeacher]: [AssignmentFilter.Subscription] as const,
    [AssignmentRoles.orgStudent]: [AssignmentFilter.Nullish] as const,
    [AssignmentRoles.orgDirector]: [AssignmentFilter.Subscription] as const,
    [AssignmentRoles.familyParent]: [AssignmentFilter.User] as const,
  },
}

const defaultValues = {
  subscription: true,
  application: true,
  studentName: true,
  date: true,
  finalAverage: true,
  status: true,
}

const ASSIGNMENT_COLUMNS = {
  [AssignmentFlow.Laboratories]: {
    [AssignmentRoles.orgManager]: { ...defaultValues } as const,
    [AssignmentRoles.orgGovernment]: { ...defaultValues } as const,
    [AssignmentRoles.orgTeacher]: { ...defaultValues } as const,
    [AssignmentRoles.orgStudent]: {
      ...defaultValues,
      subscription: false,
      studentName: false,
    } as const,
    [AssignmentRoles.orgDirector]: { ...defaultValues } as const,
    [AssignmentRoles.familyParent]: {
      ...defaultValues,
      subscription: false,
    } as const,
  },
  [AssignmentFlow.DetailGroup]: {
    [AssignmentRoles.orgManager]: {
      ...defaultValues,
      subscription: false,
    } as const,
    [AssignmentRoles.orgGovernment]: {
      ...defaultValues,
      subscription: false,
    } as const,
    [AssignmentRoles.orgTeacher]: {
      ...defaultValues,
      subscription: false,
    } as const,
    [AssignmentRoles.orgStudent]: { ...defaultValues, studentName: false } as const, // only for TS, don't necessary
    [AssignmentRoles.orgDirector]: {
      ...defaultValues,
      subscription: false,
    } as const,
    [AssignmentRoles.familyParent]: { ...defaultValues, studentName: false } as const, // only for TS, don't necessary
  },
  [AssignmentFlow.DetailMember]: {
    [AssignmentRoles.orgManager]: {
      ...defaultValues,
      studentName: false,
    } as const,
    [AssignmentRoles.orgGovernment]: {
      ...defaultValues,
      studentName: false,
    } as const,
    [AssignmentRoles.orgTeacher]: {
      ...defaultValues,
      studentName: false,
    } as const,
    [AssignmentRoles.orgStudent]: { ...defaultValues, studentName: false } as const, // only for TS, don't necessary

    [AssignmentRoles.orgDirector]: {
      ...defaultValues,
      studentName: false,
    } as const,
    [AssignmentRoles.familyParent]: {
      ...defaultValues,
      subscription: false,
      studentName: false,
    } as const,
  },
  [AssignmentFlow.DetailInstitution]: {
    [AssignmentRoles.orgManager]: {
      ...defaultValues,
      studentName: false,
    } as const,
    [AssignmentRoles.orgGovernment]: {
      ...defaultValues,
      studentName: false,
    } as const,
    [AssignmentRoles.orgTeacher]: {
      ...defaultValues,
      studentName: false,
    } as const,
    [AssignmentRoles.orgStudent]: { ...defaultValues, studentName: false } as const, // only for TS, don't necessary

    [AssignmentRoles.orgDirector]: {
      ...defaultValues,
      studentName: false,
    } as const,
    [AssignmentRoles.familyParent]: {
      ...defaultValues,
      subscription: false,
      studentName: false,
    } as const,
  },
}

export { AVAILABLE_FLOWS, ARE_STATIC_FILTERS, CASES, ASSIGNMENT_COLUMNS }
