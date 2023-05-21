const HOME_PERMISSION = 'withoutPermission'

const INSTITUTIONS_PERMISSIONS = {
  view: 'client:institutions#view',
}

const MY_INSTITUTION_PERMISSIONS = {
  view: 'client:institution#view',
  member: {
    view: 'client:institution/member#view',
    update: 'client:institution/member#update',
    delete: 'client:institution/member#delete',
    report: {
      download: 'client:institution/member-report#download',
    },
    subscription: {
      view: 'client:institution/member/subscription#view',
      update: 'client:institution/member/subscription#update',
    },
    assignments: {
      view: 'client:detail-member/assignments#view',
    },
  },
  invitation: {
    view: 'client:institution/invitation#view',
  },
  institutionAnnouncement: {
    view: 'client:institution/announcements#create',
    create: 'client:institution/announcements#view',
  },
}

const GROUP_PERMISSIONS = {
  view: 'client:groups-list#view',
  detail: {
    view: 'client:groups-list/group#view',
    update: 'client:groups-list/group#update',
    delete: 'client:groups-list/group#delete',
  },
  create: 'client:groups-list/group#create',
  addToGroup: 'client:group/members#create',
  learning: {
    view: 'client:classrooms/learning-units-list#view',
    detailFromGroup: {
      view: 'client:classrooms/learning-units-list/learning-units#view',
      create: 'client:classrooms/learning-units-list/learning-units#create',
      delete: 'client:classrooms/learning-units-list/learning-units#delete',
      update: 'client:classrooms/learning-units-list/learning-units#update',
    },
    assignments: {
      view: 'client:classrooms/assignments#view',
    },
  },
  groupAnnouncement: {
    view: 'client:classrooms/announcements#create',
    create: 'client:classrooms/announcements#view',
  },
  subscriptions: {
    view: 'client:groups-list/subscriptions-list#view',
  },
}

const LEARNING_UNIT_PERMISSIONS = {
  view: 'client:learning-units-list#view',
  detailFromLearning: {
    view: 'client:learning-units-list/learning-units#view',
    create: 'client:learning-units-list/learning-units#create',
    delete: 'client:learning-units-list/learning-units#delete',
    update: 'client:learning-units-list/learning-units#update',
  },
}

const LABORATORIES_PERMISSIONS = {
  view: 'client:laboratories-list#view',
  detail: {
    view: 'client:laboratories-list/laboratory#view',
    resource: {
      view: 'client:laboratories-list/laboratory/resource#view',
    },
  },
  assignments: {
    view: 'client:laboratories-list/assignments#view',
  },
}

const ASSIGNMENTS_PERMISSIONS = {
  deleteRestore: 'client:assignments/assignment/status#update',
  update: 'client:assignments/assignment#update',
  download: {
    report: 'client:assignments/assignment#download',
    assignment: 'client:assignments#download',
  },
  view: 'client:detail-member/assignments#view',
}

const ANNOUNCEMENTS_PERMISSIONS = {
  view: 'client:announcements/inbox#view',
}

const MY_CHILDREN_PERMISSIONS = {
  view: 'client:my-children#view',
  invitation: {
    view: 'client:my-children/invitation#view',
  },
  child: {
    view: 'client:my-children/child#view',
    update: 'client:my-children/child#update',
    delete: 'client:my-children/child#delete',
  },
}

const SUBSCRIPTION_PERMISSIONS = {
  view: 'client:subscriptions#view',
  detail: {
    view: 'client:subscriptions-list#view',
  },
}

const MY_SUBSCRIPTION_PERMISSIONS = {
  view: 'client:my-subscription#view',
  detail: {
    view: 'client:subscriptions/subscription#view',
    download: 'client:subscriptions/subscription#download',
  },
}

const EXPLORE_LABS_PERMISSIONS = {
  view: 'client:explore-labs#view',
}

const MY_DEVICES_PERMISSIONS = {
  viewDevices: 'client:devices#view',
}

const DASHBOARD_PERMISSIONS = {
  view: 'client:dashboard#view',
  filters: {
    organization: {
      qualifications: 'client:dashboard/organization/qualifications#view',
      subscriptions: 'client:dashboard/organization/subscriptions#view',
    },
    qualifications: 'client:dashboard/qualifications#view',
    groups: 'client:dashboard/groups#view',
    detailGroup: {
      view: 'client:dashboard/groups-list#view',
    },
    child: 'client:dashboard/child#view',
    subscriptions: 'client:dashboard/subscriptions#view',
    users: 'client:dashboard/institution#view',
  },
}

const ALL_PERMISSIONS = {
  permissions: [
    INSTITUTIONS_PERMISSIONS.view,
    MY_INSTITUTION_PERMISSIONS.view,
    MY_INSTITUTION_PERMISSIONS.member.view,
    MY_INSTITUTION_PERMISSIONS.member.update,
    MY_INSTITUTION_PERMISSIONS.member.delete,
    MY_INSTITUTION_PERMISSIONS.member.report.download,
    MY_INSTITUTION_PERMISSIONS.member.subscription.view,
    MY_INSTITUTION_PERMISSIONS.member.subscription.update,
    MY_INSTITUTION_PERMISSIONS.invitation.view,
    MY_INSTITUTION_PERMISSIONS.institutionAnnouncement.view,
    MY_INSTITUTION_PERMISSIONS.institutionAnnouncement.create,
    GROUP_PERMISSIONS.view,
    GROUP_PERMISSIONS.detail.view,
    GROUP_PERMISSIONS.detail.update,
    GROUP_PERMISSIONS.detail.delete,
    GROUP_PERMISSIONS.create,
    GROUP_PERMISSIONS.addToGroup,
    GROUP_PERMISSIONS.learning.view,
    GROUP_PERMISSIONS.learning.detailFromGroup.view,
    GROUP_PERMISSIONS.learning.detailFromGroup.create,
    GROUP_PERMISSIONS.learning.detailFromGroup.delete,
    GROUP_PERMISSIONS.learning.detailFromGroup.update,
    GROUP_PERMISSIONS.learning.assignments.view,
    GROUP_PERMISSIONS.groupAnnouncement.view,
    GROUP_PERMISSIONS.groupAnnouncement.create,
    GROUP_PERMISSIONS.subscriptions.view,
    LEARNING_UNIT_PERMISSIONS.view,
    LEARNING_UNIT_PERMISSIONS.detailFromLearning.view,
    LEARNING_UNIT_PERMISSIONS.detailFromLearning.create,
    LEARNING_UNIT_PERMISSIONS.detailFromLearning.delete,
    LEARNING_UNIT_PERMISSIONS.detailFromLearning.update,
    LABORATORIES_PERMISSIONS.view,
    LABORATORIES_PERMISSIONS.detail.view,
    LABORATORIES_PERMISSIONS.detail.resource.view,
    LABORATORIES_PERMISSIONS.assignments.view,
    MY_CHILDREN_PERMISSIONS.view,
    MY_CHILDREN_PERMISSIONS.invitation.view,
    MY_CHILDREN_PERMISSIONS.child.view,
    MY_CHILDREN_PERMISSIONS.child.delete,
    MY_CHILDREN_PERMISSIONS.child.update,
    ANNOUNCEMENTS_PERMISSIONS.view,
    SUBSCRIPTION_PERMISSIONS.view,
    SUBSCRIPTION_PERMISSIONS.detail.view,
    EXPLORE_LABS_PERMISSIONS.view,
    DASHBOARD_PERMISSIONS.view,
    DASHBOARD_PERMISSIONS.filters.organization.qualifications,
    DASHBOARD_PERMISSIONS.filters.organization.subscriptions,
    DASHBOARD_PERMISSIONS.filters.qualifications,
    DASHBOARD_PERMISSIONS.filters.groups,
    DASHBOARD_PERMISSIONS.filters.detailGroup.view,
    DASHBOARD_PERMISSIONS.filters.child,
    DASHBOARD_PERMISSIONS.filters.subscriptions,
    DASHBOARD_PERMISSIONS.filters.users,
    MY_SUBSCRIPTION_PERMISSIONS.view,
    MY_SUBSCRIPTION_PERMISSIONS.detail.view,
    MY_SUBSCRIPTION_PERMISSIONS.detail.download,
    ASSIGNMENTS_PERMISSIONS.deleteRestore,
    ASSIGNMENTS_PERMISSIONS.update,
    ASSIGNMENTS_PERMISSIONS.view,
    ASSIGNMENTS_PERMISSIONS.download.assignment,
    ASSIGNMENTS_PERMISSIONS.download.report,
    MY_DEVICES_PERMISSIONS.viewDevices,
  ],
}

export {
  ALL_PERMISSIONS,
  HOME_PERMISSION,
  INSTITUTIONS_PERMISSIONS,
  MY_INSTITUTION_PERMISSIONS,
  GROUP_PERMISSIONS,
  LEARNING_UNIT_PERMISSIONS,
  LABORATORIES_PERMISSIONS,
  MY_CHILDREN_PERMISSIONS,
  ANNOUNCEMENTS_PERMISSIONS,
  SUBSCRIPTION_PERMISSIONS,
  EXPLORE_LABS_PERMISSIONS,
  DASHBOARD_PERMISSIONS,
  MY_SUBSCRIPTION_PERMISSIONS,
  ASSIGNMENTS_PERMISSIONS,
  MY_DEVICES_PERMISSIONS,
}
