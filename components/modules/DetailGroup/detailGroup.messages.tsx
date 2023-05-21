const messages = {
  section: {
    id: 'detailGroup.section',
    defaultMessage: 'Grupos',
  },
  description: {
    id: 'detailGroup.description',
    defaultMessage: 'Descripción del grupo',
  },
  statistics: {
    id: 'detailGroup.statistics',
    defaultMessage: 'Estadísticas del grupo',
  },
  learning: {
    title: {
      id: 'detailGroup.learning.title',
      defaultMessage: 'Rutas de aprendizaje',
    },
    quantity: {
      id: 'detailGroup.learning.quantity',
      defaultMessage: '{isPlural, select, true {Rutas} other {Ruta}} de aprendizaje',
    },
  },
  student: {
    quantity: {
      id: 'detailGroup.student.quantity',
      defaultMessage: '{isPlural, select, true {Estudiantes} other {Estudiante}}',
    },
    list: {
      id: 'detailGroup.student.list',
      defaultMessage: 'Listado de estudiantes',
    },
  },
  teacher: {
    list: {
      id: 'detailGroup.teacher.list',
      defaultMessage: 'Listado de profesores',
    },
  },
  button: {
    group: {
      delete: {
        id: 'detailGroup.button.group.delete',
        defaultMessage: 'Eliminar grupo',
      },
      edit: {
        id: 'detailGroup.button.group.edit',
        defaultMessage: 'Editar grupo',
      },
      ad: {
        id: 'detailGroup.button.group.ad',
        defaultMessage: 'Ver anuncios',
      },
      results: {
        id: 'detailGroup.button.group.results',
        defaultMessage: 'Ver calificaciones',
      },
    },
    user: {
      delete: {
        id: 'detailGroup.button.user.delete',
        defaultMessage: 'Quitar usuario',
      },
    },
  },
  userData: {
    guestUser: {
      id: 'detailGroup.userData.guestUser',
      defaultMessage: 'Usuario invitado',
    },
    registeredUser: {
      id: 'detailGroup.userData.registeredUser',
      defaultMessage: 'Usuario registrado',
    },
    emailNotAvailable: {
      id: 'detailGroup.userData.emailNotAvailable',
      defaultMessage: 'Email no disponible',
    },
  },
  empty: {
    id: 'detailGroup.empty',
    defaultMessage: 'No encontramos resultados',
  },
  alert: {
    group: {
      title: {
        id: 'detailGroup.alert.group.title',
        defaultMessage: '¿Quieres eliminar el grupo?',
      },
      subtitle: {
        id: 'detailGroup.alert.group.subtitle',
        defaultMessage: 'Esta acción no puede deshacerse.',
      },
      cancelText: {
        id: 'detailGroup.alert.group.cancelText',
        defaultMessage: 'No, cancelar',
      },
      continueText: {
        id: 'detailGroup.alert.group.continueText',
        defaultMessage: 'Si, eliminar',
      },
    },
    user: {
      title: {
        id: 'detailGroup.alert.user.title',
        defaultMessage: '¿Quieres quitar el usuario?',
      },
      subtitle: {
        id: 'detailGroup.alert.user.subtitle',
        defaultMessage: 'Si quitas el usuario: {e}, no pertenecerá más al grupo.',
      },

      cancelText: {
        id: 'detailGroup.alert.user.cancelText',
        defaultMessage: 'No, cancelar',
      },
      continueText: {
        id: 'detailGroup.alert.user.continueText',
        defaultMessage: 'Si, quitar',
      },
    },
  },
  delete: {
    success: {
      id: 'detailGroup.delete.success',
      defaultMessage: 'Has eliminado el grupo correctamente.',
    },
    error: {
      id: 'detailGroup.delete.error',
      defaultMessage: 'No logramos eliminar el grupo. Intenta nuevamente más tarde.',
    },
    user: {
      success: {
        id: 'detailGroup.user.delete.success',
        defaultMessage: 'Has quitado el usuario correctamente.',
      },
      error: {
        id: 'detailGroup.user.delete.error',
        defaultMessage: 'No logramos eliminar el usuario. Intenta nuevamente más tarde.',
      },
    },
  },
  detailGroup: {
    api: {
      error: {
        id: 'detailGroup.api.error',
        defaultMessage: 'No logramos cargar los datos del grupo. Intenta nuevamente más tarde.',
      },
    },
  },
}

export default messages
