const messages = {
  invite: {
    title: { id: 'invite.title', defaultMessage: 'Invitar' },
    title2: { id: 'invite.title2', defaultMessage: ' a la institución' },
    description: {
      id: 'invite.description',
      defaultMessage:
        'Ingresa las direcciones de correo electrónico de los estudiantes. Los estudiantes agregados, recibirán un correo electrónico que les brindará acceso a la plataforma.',
    },
    button: {
      id: 'invite.button',
      defaultMessage: 'Enviar invitaciones',
    },
    download: {
      id: 'invite.download',
      defaultMessage: 'Descargar Excel',
    },
    profiles: {
      student: {
        id: 'invite.profiles.student',
        defaultMessage: 'estudiantes',
      },
      teacher: {
        id: 'invite.profiles.teacher',
        defaultMessage: 'profesores',
      },
      director: {
        id: 'invite.profiles.director',
        defaultMessage: 'directores',
      },
      myChildren: {
        id: 'invite.profiles.myChildren',
        defaultMessage: 'hijos',
      },
      manager: {
        id: 'invite.profiles.manager',
        defaultMessage: 'institución',
      },
    },
  },
  subscription: {
    description: {
      id: 'invite.subscription.description',
      defaultMessage:
        'Selecciona la suscripción a la que pertenecerán los usuarios invitados. Presiona “Cambiar” para visualizar un detalle de los productos incluídos en cada suscripción.',
    },
  },
  childrenInvite: {
    title: {
      id: 'childrenInvite.title',
      defaultMessage: 'Invitar hijos',
    },
    labelSons: {
      id: 'childrenInvite.labelSons',
      defaultMessage: 'Invitar hijos de ',
    },
    descriptionSons: {
      id: 'childrenInvite.descriptionSons',
      defaultMessage:
        'Ingresa las direcciones de correo electrónico de los hijos. Ellos recibirán un correo electrónico que les brindará acceso a la plataforma.',
    },
    notice: {
      id: 'childrenInvite.notice',
      defaultMessage: 'Ten en cuenta que la invitación expira en 24 horas.',
    },
    noticeDescription: {
      id: 'childrenInvite.noticeDescription',
      defaultMessage:
        'Por favor, asegúrate que tu hijo acepte la invitación dentro de este tiempo.',
    },
  },
  myInstitution: {
    data: {
      guestUser: {
        id: 'myInstitution.data.guestUser',
        defaultMessage: 'Usuario invitado',
      },
      registeredUser: {
        id: 'myInstitution.data.registeredUser',
        defaultMessage: 'Usuario registrado',
      },
      emailNotAvailable: {
        id: 'myInstitution.data.emailNotAvailable',
        defaultMessage: 'Email no disponible',
      },
      duplicateEmail: {
        id: 'myInstitution.data.duplicateEmail',
        defaultMessage: 'Este correo electrónico está duplicado',
      },
    },
  },

  emails: {
    label: {
      id: 'invite.emails.label',
      defaultMessage: 'Direcciones de correo electrónico *',
    },
    placeholder: {
      id: 'invite.emails.placeholder',
      defaultMessage: 'Ingresar emails',
    },
    maxEmail: {
      id: 'invite.emails.maxEmail',
      defaultMessage: 'Solo se pueden cargar hasta {availableInvites} invitados',
    },
  },
  message: {
    title: {
      id: 'invite.message.title',
      defaultMessage: 'Mensaje de invitación',
    },
    language: {
      description: {
        id: 'invite.message.language.description',
        defaultMessage: 'Selecciona el idioma en el que los usuarios van a recibir la invitación',
      },
      placeholder: {
        id: 'invite.message.language.placeholder',
        defaultMessage: 'Selecciona idioma',
      },
      error: {
        id: 'invite.message.language.error',
        defaultMessage: 'Error al cargar listado de idiomas.',
      },
    },
    group: {
      description: {
        id: 'invite.message.group.description',
        defaultMessage: 'Selecciona el grupo al que deseas agregar al {intlProfile} (opcional)',
      },
      placeholder: {
        id: 'invite.message.group.placeholder',
        defaultMessage: 'Selecciona un grupo',
      },
      error: {
        id: 'invite.message.group.error',
        defaultMessage: 'Error al cargar listado de grupos.',
      },
    },
    personalize: {
      id: 'invite.message.personalize',
      defaultMessage: 'Puedes personalizar aún más la invitación, pero este paso es opcional.',
    },
    label: {
      id: 'invite.message.label',
      defaultMessage: 'Personalización (Opcional)',
    },
    post: {
      error: {
        id: 'invite.message.post.error',
        defaultMessage: 'Error al cargar listado de idiomas.',
      },
      success: {
        id: 'invite.message.post.success',
        defaultMessage: 'Enviaste las invitaciones correctamente.',
      },
      warning: {
        id: 'invite.message.post.warning',
        defaultMessage: 'Por favor completa todos los campos requeridos para continuar.',
      },
    },
  },
  loaded: {
    id: 'myInstitution.loaded',
    defaultMessage: 'cargados',
  },
  search: {
    label: {
      id: 'myInstitution.search.label',
      defaultMessage: 'Buscar',
    },
    placeholder: {
      id: 'myInstitution.search.placeholder',
      defaultMessage:
        '{isTablet, select, true {Buscar por nombre o correo electrónico} other {Buscar}} ',
    },
  },
  select: {
    label: {
      id: 'myInstitution.select.label',
      defaultMessage: 'Estado',
    },
    placeholder: {
      id: 'myInstitution.select.placeholder',
      defaultMessage: 'Seleccionar estado',
    },
  },
  button: {
    apply: {
      id: 'myInstitution.button.apply',
      defaultMessage: 'Aplicar',
    },
  },
  sentInvite: {
    title: {
      id: 'invite.sentInvite.title',
      defaultMessage: '¡Todo listo!',
    },
    message: {
      id: 'invite.sentInvite.message',
      defaultMessage:
        'Dile a tus {isParent, select, true {hijos} other {miembros}} que revisen su correo electrónico y acepten la invitación para comenzar a disfrutar de CloudLabs.',
    },
  },
}

export default messages
