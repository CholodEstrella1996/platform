const messages = {
  header: {
    title: {
      id: 'laboratories.header.title',
      defaultMessage: 'Mis laboratorios',
    },
    search: {
      id: 'laboratories.header.search.placeholder',
      defaultMessage: '¿Qué quieres aprender hoy?',
    },
    button: {
      id: 'laboratories.header.button',
      defaultMessage: 'Ver calificaciones',
    },
    buttonProcedure: {
      id: 'laboratories.header.buttonProcedure',
      defaultMessage: 'Procedimiento',
    },
  },
  noLaboratories: {
    dialog: {
      id: 'laboratories.noLaboratories.dialog',
      defaultMessage: 'No tienes laboratorios disponibles',
    },
  },
  filters: {
    labels: {
      selectArea: {
        id: 'laboratories.filters.labels.selectArea',
        defaultMessage: 'Área',
      },
      selectTopic: {
        id: 'laboratories.filters.labels.selectTopic',
        defaultMessage: 'Temática',
      },
      selectSubscription: {
        id: 'laboratories.filters.labels.selectSubscription',
        defaultMessage: 'Suscripción',
      },
    },
    placeholder: {
      id: 'laboratories.filters.placeholder',
      defaultMessage: 'Seleccione una',
    },
    label: {
      id: 'laboratories.filters.label',
      defaultMessage: 'Filtrar por:',
    },
  },
  type: {
    id: 'laboratories.type',
    defaultMessage: 'Laboratorio',
  },
  notifications: {
    getLaboratoryError: {
      id: 'laboratories.notifications.getLaboratoryError',
      defaultMessage: 'No se pudo cargar el listado de laboratorios.',
    },
    getAreasTopicError: {
      id: 'laboratories.notifications.getAreasTopicError',
      defaultMessage:
        'No se pudo cargar el listado de {isArea, select, true {áreas} other {temáticas}}.',
    },
    subscriptionError: {
      title: {
        id: 'laboratories.notifications.subscriptionError.title',
        defaultMessage: 'No cuentas con una subscripción activa.',
      },
      description: {
        id: 'laboratories.notifications.subscriptionError.description',
        defaultMessage:
          'Consigue tu acceso mensual o anual a los simuladores CloudLabs a través de nuestro Store.',
      },
      textButton: {
        id: 'laboratories.notifications.subscriptionError.textButton',
        defaultMessage: 'Explorar laboratorios',
      },
    },
  },
}

export default messages
