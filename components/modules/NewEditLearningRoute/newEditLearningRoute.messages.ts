const messages = {
  navigation: {
    pageTitle: {
      id: 'newEditLearningRoute.navigation.pageTitle',
      defaultMessage: '{isEditable, select, true {Editar} other {Crear}} ruta de aprendizaje',
    },
    history: {
      id: 'newEditLearningRoute.navigation.history',
      defaultMessage: 'Grupos',
    },
  },
  stepDescription: {
    stepOneDescription: {
      id: 'newEditLearningRoute.stepDescription.stepOneDescription',
      defaultMessage: 'Ingresa el nombre y descripción de la ruta de aprendizaje.',
    },
    stepTwoDescription: {
      id: 'newEditLearningRoute.stepDescription.stepTwoDescription',
      defaultMessage: 'Selecciona los laboratorios que incluirá la ruta de aprendizaje.',
    },
  },
  steps: {
    stepOne: {
      name: {
        id: 'newEditLearningRoute.steps.stepOne.name',
        defaultMessage: 'Nombre de la ruta de aprendizaje *',
      },
      subscription: {
        label: {
          id: 'newEditLearningRoute.steps.stepOne.subscription.label',
          defaultMessage: 'Suscripción *',
        },
        placeholder: {
          id: 'newEditLearningRoute.steps.stepOne.subscription.placeholder',
          defaultMessage: 'Seleccionar suscripción',
        },
      },
      group: {
        label: {
          id: 'newEditLearningRoute.steps.stepOne.group.label',
          defaultMessage: 'Grupo *',
        },
        placeholder: {
          id: 'newEditLearningRoute.steps.stepOne.group.placeholder',
          defaultMessage: 'Seleccionar grupo',
        },
        empty: {
          id: 'newEditLearningRoute.steps.stepOne.group.empty',
          defaultMessage: 'Esta suscripción no cuenta con grupos. Puedes',
        },
        link: {
          id: 'newEditLearningRoute.steps.stepOne.group.link',
          defaultMessage: 'crear un grupo.',
        },
      },
      description: {
        id: 'newEditLearningRoute.steps.stepOne.description',
        defaultMessage: 'Descripción de la ruta de aprendizaje *',
      },
    },
    stepTwo: {
      title: {
        id: 'newEditLearningRoute.steps.stepTwo.title',
        defaultMessage: 'Listado de laboratorios',
      },
      empty: {
        labs: {
          id: 'newEditLearningRoute.steps.stepTwo.empty.labs',
          defaultMessage: 'No tienes laboratorios seleccionados',
        },
        searchResult: {
          id: 'newEditLearningRoute.steps.stepTwo.empty.searchResult',
          defaultMessage: 'No encontramos resultados',
        },
      },
      formModal: {
        title: {
          id: 'newEditLearningRoute.steps.stepTwo.formModal.title',
          defaultMessage: 'Seleccionar laboratorios',
        },
        placeholder: {
          id: 'newEditLearningRoute.steps.stepTwo.formModal.placeholder',
          defaultMessage: 'Buscar por nombre',
        },
      },
    },

    loaded: {
      id: 'newEditLearningRoute.steps.loaded',
      defaultMessage: '{quantity} {p} cargados',
    },
  },

  notificationTexts: {
    error: {
      id: 'newEditLearningRoute.notificationTexts.error',
      defaultMessage: 'Por favor, complete este campo',
    },
    warning: {
      id: 'newEditLearningRoute.notificationTexts.warning',
      defaultMessage: 'Seleccione al menos un elemento',
    },
    newEdit: {
      success: {
        id: 'newEditLearningRoute.notificationTexts.newEdit.success',
        defaultMessage:
          'Has {isEditable, select, true {editado} other {creado}} la ruta de aprendizaje correctamente.',
      },
      error: {
        id: 'newEditLearningRoute.notificationTexts.newEdit.error',
        defaultMessage:
          'No logramos {isEditable, select, true {editar} other {crear}} la ruta de aprendizaje. Por favor, intenta nuevamente más tarde.',
      },
    },
    getLabsError: {
      id: 'newEditLearningRoute.notificationTexts.getLabsError',
      defaultMessage: 'No logramos cargar el listado. Intenta nuevamente más tarde.',
    },
  },

  actionButtons: {
    back: {
      id: 'newEditLearningRoute.actionButtons.back',
      defaultMessage: 'Atrás',
    },
    next: {
      id: 'newEditLearningRoute.actionButtons.next',
      defaultMessage: 'Siguiente',
    },
    confirm: {
      id: 'newEditLearningRoute.actionButtons.confirm',
      defaultMessage: 'Confirmar',
    },
    edit: {
      id: 'newEditLearningRoute.actionButtons.edit',
      defaultMessage: 'Editar',
    },
  },
  getRoute: {
    error: {
      id: 'newEditLearningRoute.getRoute.error',
      defaultMessage:
        'No logramos cargar la ruta de aprendizaje. Por favor, intenta nuevamente más tarde.',
    },
  },
}

export default messages
