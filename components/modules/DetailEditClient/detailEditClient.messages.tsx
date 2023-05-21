const messages = {
  navigation: {
    history: {
      id: 'detailEditUser.navigation.history',
      defaultMessage: 'Mi institución',
    },
    detailTitle: {
      id: 'detailEditUser.navigation.detailTitle',
      defaultMessage: '{isLoggedUser, select, true {Mi perfil} other {Detalles de usuario}}',
    },
    editTitle: {
      id: 'detailEditUser.navigation.editTitle',
      defaultMessage: '{isLoggedUser, select, true {Editar perfil} other {Editar usuario}}',
    },
    button: {
      edit: {
        id: 'detailEditUser.navigation.button.edit',
        defaultMessage: 'Editar usuario',
      },
      delete: {
        id: 'detailEditUser.navigation.button.delete',
        defaultMessage: 'Eliminar usuario',
      },
      save: {
        id: 'detailEditUser.navigation.button.save',
        defaultMessage: 'Guardar cambios',
      },
      cancel: {
        id: 'detailEditUser.navigation.button.cancel',
        defaultMessage: 'Cancelar',
      },
      results: {
        id: 'detailEditUser.navigation.button.results',
        defaultMessage: 'Ver calificaciones',
      },
    },
  },
  childRole: {
    id: 'detailEditUser.childRole',
    defaultMessage: 'Hijo/a',
  },
  userAvatar: {
    invited: {
      id: 'detailEditUser.userAvatar.invited',
      defaultMessage: 'Invitado',
    },
    registered: {
      id: 'detailEditUser.userAvatar.registered',
      defaultMessage: 'Registrado',
    },
  },
  inputData: {
    firstName: {
      label: {
        id: 'detailEditUser.inputData.firstName.label',
        defaultMessage: 'Primer nombre *',
      },
      placeholder: {
        id: 'detailEditUser.inputData.firstName.placeholder',
        defaultMessage: 'Primer nombre',
      },
    },
    lastName: {
      label: {
        id: 'detailEditUser.inputData.lastName.label',
        defaultMessage: 'Apellido *',
      },
      placeholder: {
        id: 'detailEditUser.inputData.lastName.placeholder',
        defaultMessage: 'Apellido',
      },
    },
    phone: {
      label: {
        id: 'detailEditUser.inputData.phone.label',
        defaultMessage: 'Teléfono *',
      },
      placeholder: {
        id: 'detailEditUser.inputData.phone.placeholder',
        defaultMessage: 'Teléfono',
      },
    },
    email: {
      label: {
        id: 'detailEditUser.inputData.email.label',
        defaultMessage: 'Correo electrónico *',
      },
      placeholder: {
        id: 'detailEditUser.inputData.email.placeholder',
        defaultMessage: 'Correo electrónico',
      },
    },
    idType: {
      label: {
        id: 'detailEditUser.inputData.idType.label',
        defaultMessage: 'Tipo de ID',
      },
      placeholder: {
        id: 'detailEditUser.inputData.idType.placeholder',
        defaultMessage: 'Tipo de ID',
      },
    },
    idNum: {
      label: {
        id: 'detailEditUser.inputData.idNum.label',
        defaultMessage: 'ID',
      },
      placeholder: {
        id: 'detailEditUser.inputData.idNum.placeholder',
        defaultMessage: 'ID',
      },
    },
    date: {
      label: {
        id: 'detailEditUser.inputData.date.label',
        defaultMessage: 'Fecha de nacimiento',
      },
      placeholder: {
        id: 'detailEditUser.inputData.date.placeholder',
        defaultMessage: 'Fecha',
      },
    },
    gender: {
      label: {
        id: 'detailEditUser.inputData.gender.label',
        defaultMessage: 'Género',
      },
      placeholder: {
        id: 'detailEditUser.inputData.gender.placeholder',
        defaultMessage: 'Género',
      },
    },
    educationLevel: {
      label: {
        id: 'detailEditUser.inputData.educationLevel.label',
        defaultMessage: 'Nivel educativo',
      },
      placeholder: {
        id: 'detailEditUser.inputData.educationLevel.placeholder',
        defaultMessage: 'Nivel educativo',
      },
    },
    profilePic: {
      label: {
        id: 'detailEditUser.inputData.profilePic.label',
        defaultMessage: 'Foto de perfil',
      },
      placeholder: {
        id: 'detailEditUser.inputData.profilePic.placeholder',
        defaultMessage: 'Foto de perfil',
      },
    },
  },
  alert: {
    title: {
      id: 'detailEditUser.alert.title',
      defaultMessage: '¿Quieres eliminar el usuario?',
    },
    subtitle: {
      id: 'detailEditUser.alert.subtitle',
      defaultMessage: 'Si eliminas el usuario: {e}, no podrás recuperarlo.',
    },
    cancelText: {
      id: 'detailEditUser.alert.cancelText',
      defaultMessage: 'No, cancelar',
    },
    continueText: {
      id: 'detailEditUser.alert.continueText',
      defaultMessage: 'Si, eliminar',
    },
  },
  editData: {
    success: {
      id: 'detailEditUser.editData.success',
      defaultMessage: 'Guardaste los cambios correctamente',
    },
    error: {
      id: 'detailEditUser.editData.error',
      defaultMessage: 'No logramos guardar los cambios. Intenta nuevamente más tarde.',
    },
  },
  deleteUser: {
    success: {
      id: 'detailEditUser.deleteUser.success',
      defaultMessage: 'Has eliminado el usuario correctamente.',
    },
    error: {
      id: 'detailEditUser.deleteUser.error',
      defaultMessage: 'No logramos eliminar el usuario. Intenta nuevamente más tarde.',
    },
  },
  detailUser: {
    api: {
      error: {
        id: 'detailEditUser.detailUser.api.error',
        defaultMessage: 'No logramos cargar los datos del usuario. Intenta nuevamente más tarde.',
      },
    },
  },
}

export default messages
