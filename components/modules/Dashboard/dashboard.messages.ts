const messages = {
  title: {
    id: 'dashboard.title',
    defaultMessage: 'Dashboard',
  },
  welcome: {
    title: {
      id: 'dashboard.title.description',
      defaultMessage: '¡Hola, {name}!',
    },
    subtitle: {
      id: 'dashboard.welcome.subtitle',
      defaultMessage: 'Te damos la bienvenida a CloudLabs',
    },
  },
  headerButton: {
    assignments: {
      id: 'dashboard.headerButton.assignments',
      defaultMessage: 'Ver calificaciones',
    },
    groups: {
      id: 'dashboard.headerButton.groups',
      defaultMessage: 'Grupos',
    },
    users: {
      id: 'dashboard.headerButton.users',
      defaultMessage: 'Usuarios',
    },
  },
  filters: {
    label: {
      id: 'dashboard.filters.label',
      defaultMessage:
        'Seleccione {type, select, subscription {suscripción} dashboard {dashboard} other {hijo/a}}',
    },
    placeholder: {
      id: 'dashboard.filters.placeholder',
      defaultMessage: 'Todos',
    },
    emptyChildren: {
      id: 'dashboard.filters.emptyChildren',
      defaultMessage: 'No cuentas con hijos',
    },
  },
  cards: {
    profile: {
      title: {
        id: 'dashboard.cards.profile.title',
        defaultMessage: 'Completa tu perfil',
      },
      subtitle: {
        id: 'dashboard.cards.profile.subtitle',
        defaultMessage: 'Queremos conocer más de ti',
      },
    },
    dashboard: {
      id: 'dashboard.cards.dashboard',
      defaultMessage: 'Visualiza el dashboard de una institución',
    },
    group: {
      title: {
        id: 'dashboard.cards.group.title',
        defaultMessage: 'Crea tu primer grupo',
      },
      subtitle: {
        id: 'dashboard.cards.group.subtitle',
        defaultMessage: 'Impulsa a tus estudiantes',
      },
    },
    children: {
      title: {
        id: 'dashboard.cards.children.title',
        defaultMessage: 'Invita a tus hijos',
      },
      subtitle: {
        id: 'dashboard.cards.children.subtitle',
        defaultMessage: '¿Listo para comenzar?',
      },
    },
    practice: {
      id: 'dashboard.cards.practice',
      defaultMessage: 'Realiza tu primera práctica',
    },
  },
  getAccess: {
    title: {
      id: 'dashboard.getAccess.title',
      defaultMessage: 'Adquiere ahora tu acceso a CloudLabs',
    },
    description: {
      id: 'dashboard.getAccess.description',
      defaultMessage: 'Consigue hasta un 10% de descuento pagando un plan anual',
    },
    button: {
      id: 'dashboard.getAccess.button',
      defaultMessage: 'Comprar laboratorios',
    },
    date: {
      title: {
        id: 'dashboard.getAccess.date.title',
        defaultMessage: 'Disfruta tu acceso demo hasta:',
      },
      day: {
        id: 'dashboard.getAccess.date.day',
        defaultMessage: 'días',
      },
      hour: {
        id: 'dashboard.getAccess.date.hour',
        defaultMessage: 'horas',
      },
      minute: {
        id: 'dashboard.getAccess.date.minute',
        defaultMessage: 'minutos',
      },
    },
  },
  recentAccess: {
    header: {
      id: 'dashboard.recentAccess.header',
      defaultMessage: 'Accesos recientes',
    },
    empty: {
      id: 'dashboard.recentAccess.empty',
      defaultMessage: 'No has visitado laboratorios aún',
    },
  },
  institutionDetail: {
    header: {
      id: 'dashboard.institutionDetail.header',
      defaultMessage: 'Detalle de institución',
    },
    users: {
      id: 'dashboard.institutionDetail.users',
      defaultMessage: 'Usuarios registrados',
    },
    progressBar: {
      registered: {
        id: 'dashboard.institutionDetail.progressBar.registered',
        defaultMessage: 'Registrados',
      },
      invited: {
        id: 'dashboard.institutionDetail.progressBar.invited',
        defaultMessage: 'Invitados',
      },
      available: {
        id: 'dashboard.institutionDetail.progressBar.available',
        defaultMessage: 'Disponibles',
      },
      total: {
        id: 'dashboard.institutionDetail.progressBar.total',
        defaultMessage: 'Incluidos',
      },
    },
  },
  platformMetrics: {
    title: {
      id: 'dashboard.platformMetrics.title',
      defaultMessage: 'Métricas de uso de la plataforma',
    },
    totalPlatformUsageTime: {
      id: 'dashboard.platformMetrics.totalPlatformUsageTime',
      defaultMessage: 'Tiempo total de uso del portal',
    },
    meanAssignmentDeliveryTime: {
      id: 'dashboard.platformMetrics.meanAssignmentDeliveryTime',
      defaultMessage: 'Tiempo de práctica promedio',
    },
    totalSimulatorUsageTime: {
      title: {
        id: 'dashboard.platformMetrics.totalSimulatorUsageTime.title',
        defaultMessage: 'Horas total de uso',
      },
      subtitle: {
        id: 'dashboard.platformMetrics.totalSimulatorUsageTime.subtitle',
        defaultMessage: 'Todos los laboratorios',
      },
    },
    meanPlatformUsageTime: {
      title: {
        id: 'dashboard.platformMetrics.meanPlatformUsageTime.title',
        defaultMessage: 'Tiempo promedio de uso del portal',
      },
      subtitle: {
        id: 'dashboard.platformMetrics.meanPlatformUsageTime.subtitle',
        defaultMessage: 'Por estudiante',
      },
    },
    totalLearningSessions: {
      title: {
        id: 'dashboard.platformMetrics.totalLearningSessions.title',
        defaultMessage: 'Ingreso a los recursos',
      },
      subtitle: {
        id: 'dashboard.platformMetrics.totalLearningSessions.subtitle',
        defaultMessage: 'Todos los estudiantes',
      },
    },
    activeStudents: {
      id: 'dashboard.platformMetrics.activeStudents',
      defaultMessage: 'Estudiantes activos',
    },
  },
  studentMetrics: {
    title: {
      id: 'dashboard.studentMetrics.title',
      defaultMessage: 'Métricas de estudiantes',
    },
    practices: {
      id: 'dashboard.studentMetrics.practices',
      defaultMessage: 'Prácticas',
    },
    access: {
      id: 'dashboard.studentMetrics.access',
      defaultMessage: 'Accesos',
    },
    assignmentsCompletedByDay: {
      title: {
        id: 'dashboard.studentMetrics.assignmentsCompletedByDay.title',
        defaultMessage: 'Prácticas realizadas',
      },
      subtitle: {
        id: 'dashboard.studentMetrics.assignmentsCompletedByDay.subtitle',
        defaultMessage: 'Todos los laboratorios',
      },
    },
    sessionsByDay: {
      title: {
        id: 'dashboard.studentMetrics.sessionsByDay.title',
        defaultMessage: 'Accesos de hoy',
      },
    },
  },
  statistics: {
    title: {
      id: 'dashboard.statistics.title',
      defaultMessage: 'Estadísticas',
    },
    meanAssignmentScore: {
      id: 'dashboard.statistics.meanAssignmentScore',
      defaultMessage: 'Nota promedio de laboratorios',
    },
    progressInPercentage: {
      id: 'dashboard.statistics.progressInPercentage',
      defaultMessage: 'Porcentaje de avance',
    },
    progressByApplication: {
      id: 'dashboard.statistics.progressByApplication',
      defaultMessage: 'Porcentaje de realización de laboratorios',
    },
    sessionsByDay: {
      title: {
        id: 'dashboard.statistics.sessionsByDay.title',
        defaultMessage: 'Visitas de hoy',
      },
      linearAreaChart: {
        id: 'dashboard.statistics.sessionsByDay.linearAreaChart',
        defaultMessage: 'Instituciones más activas',
      },
      nameSeries: {
        id: 'dashboard.statistics.sessionsByDay.nameSeries',
        defaultMessage: 'Prácticas',
      },
    },
    ranking: {
      id: 'dashboard.statistics.ranking',
      defaultMessage: 'Ranking de la institución',
    },
  },
  error: {
    id: 'dashboard.error',
    defaultMessage: 'Hubo un error al cargar los datos',
  },
}

export default messages
