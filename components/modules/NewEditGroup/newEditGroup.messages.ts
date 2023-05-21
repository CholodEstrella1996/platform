const messages = {
  navigation: {
    pageTitle: {
      id: 'newEditGroup.navigation.pageTitle',
      defaultMessage: '{isEditable, select, true {Editar} other {Crear}} grupo',
    },
    history: {
      id: 'newEditGroup.navigation.history',
      defaultMessage: 'Grupos',
    },
  },
  stepDescription: {
    title: {
      id: 'newEditGroup.stepDescription.title',
      defaultMessage: '{isEditable, select, true {Editar} other {Crear}} un grupo',
    },
    stepOneDescription: {
      id: 'newEditGroup.stepDescription.stepOneDescription',
      defaultMessage: 'Ingresa el nombre y descripción del grupo *',
    },
    stepTwoDescription: {
      id: 'newEditGroup.stepDescription.stepTwoDescription',
      defaultMessage: 'Selecciona los profesores que estarán a cargo *',
    },
    stepThreeDescription: {
      id: 'newEditGroup.stepDescription.stepThreeDescription',
      defaultMessage: 'Selecciona los estudiantes que formarán parte del grupo *',
    },
  },
  steps: {
    stepOne: {
      title: {
        id: 'newEditGroup.steps.stepOne.title',
        defaultMessage: 'Información del grupo',
      },
      name: {
        id: 'newEditGroup.steps.stepOne.name',
        defaultMessage: 'Nombre del grupo *',
      },
      description: {
        id: 'newEditGroup.steps.stepOne.description',
        defaultMessage: 'Descripción del grupo *',
      },
    },
    stepTwo: {
      profile: {
        id: 'newEditGroup.steps.stepTwo.profile',
        defaultMessage: '{isPlural, select, true {profesores} other {profesor}}',
      },
    },
    stepThree: {
      profile: {
        id: 'newEditGroup.steps.stepThree.profile',
        defaultMessage: '{isPlural, select, true {estudiantes} other {estudiante}}',
      },
    },
    loaded: {
      id: 'newEditGroup.steps.loaded',
      defaultMessage: '{quantity} {p} cargados',
    },
  },
  table: {
    headerOptions: {
      id: 'newEditGroup.table.headerOptions',
      defaultMessage: 'Acciones',
    },
    headerIcon: {
      id: 'newEditGroup.table.headerIcon',
      defaultMessage: 'Foto de perfil',
    },
    headerName: {
      id: 'newEditGroup.table.headerName',
      defaultMessage: 'Nombre y apellido',
    },
    headerMail: {
      id: 'newEditGroup.table.headerMail',
      defaultMessage: 'Correo electrónico',
    },
    headerSubscription: {
      id: 'newEditGroup.table.headerSubscription',
      defaultMessage: 'Suscripción',
    },
    headerStatus: {
      id: 'newEditGroup.table.headerStatus',
      defaultMessage: 'Estado',
    },
    rowsSelected: {
      id: 'newEditGroup.table.rowsSelected',
      defaultMessage: '{quantity} fila{p} seleccionada{p}',
    },
    noRows: {
      id: 'newEditGroup.table.noRows',
      defaultMessage: 'No encontramos resultados',
    },
  },
  notificationTexts: {
    warning: {
      id: 'newEditGroup.notificactionTexts.warning',
      defaultMessage: 'Seleccione al menos un: {profile}',
    },
    newEdit: {
      success: {
        id: 'newEditGroup.notificactionTexts.newEdit.success',
        defaultMessage:
          'Has {isEditable, select, true {editado} other {creado}} el grupo correctamente.',
      },
      error: {
        id: 'newEditGroup.notificactionTexts.newEdit.error',
        defaultMessage:
          'No logramos {isEditable, select, true {editar} other {crear}} el grupo. Por favor, intenta nuevamente más tarde.',
      },
    },
    getMembersError: {
      id: 'newEditGroup.notificactionTexts.getMembersError',
      defaultMessage: 'No logramos cargar el listado. Intenta nuevamente más tarde.',
    },
    getSubscriptionsError: {
      id: 'newEditGroup.notificactionTexts.getSubscriptionsError',
      defaultMessage: 'No logramos cargar las suscripciones. Por favor intenta más tarde.',
    },
  },
  filters: {
    search: {
      label: {
        id: 'newEditGroup.filters.search.label',
        defaultMessage: 'Buscar',
      },
      placeholder: {
        id: 'newEditGroup.filters.search.placeholder',
        defaultMessage:
          '{isTablet, select, true {Buscar por nombre o correo electrónico} other {Buscar}}',
      },
    },
    selects: {
      label: {
        id: 'newEditGroup.filters.selects.label',
        default: '{isStatus, select, true {Estado} other {Suscripción}}',
      },
      placeholder: {
        id: 'newEditGroup.filters.selects.placeholder',
        defaultMessage: '{isStatus, select, true Seleccione un{ estado} other {a suscripción}}',
      },
    },
  },
  actionButtons: {
    back: {
      id: 'newEditGroup.actionButtons.back',
      defaultMessage: 'Atrás',
    },
    next: {
      id: 'newEditGroup.actionButtons.next',
      defaultMessage: 'Siguiente',
    },
    create: {
      id: 'newEditGroup.actionButtons.create',
      defaultMessage: '{isEditable, select, true {Guardar cambios} other {Confirmar}} ',
    },
  },
  guestUser: {
    id: 'newEditGroup.guestUser',
    defaultMessage: 'Usuario invitado',
  },
  registeredUser: {
    id: 'newEditGroup.registeredUser',
    defaultMessage: 'Usuario registrado',
  },
  emailNotAvailable: {
    id: 'newEditGroup.emailNotAvailable',
    defaultMessage: 'Email no disponible',
  },
  getGroup: {
    error: {
      id: 'newEditGroup.getGroup.error',
      defaultMessage: 'No logramos cargar el grupo. Por favor, intenta nuevamente más tarde.',
    },
  },
}

export default messages
