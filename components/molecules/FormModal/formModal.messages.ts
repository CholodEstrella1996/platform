const messages = {
  stepCounter: {
    id: 'stepForm.stepCounter',
    defaultMessage: 'Paso {q} de {p}',
  },
  notificationText: {
    warning: {
      id: 'stepForm.notificationText.warning',
      defaultMessage: 'Por favor, complete todos los campos requeridos',
    },
    closeAlert: {
      title: {
        id: 'stepForm.notificationText.closeAlert.title',
        defaultMessage: '¿Estás seguro que desea cerrar?',
      },
      subtitle: {
        id: 'stepForm.notificationText.closeAlert.subtitle',
        defaultMessage: 'Si cancelas la operación, se perderán todos los cambios.',
      },
      cancelText: {
        id: 'stepForm.notificationText.closeAlert.cancelText',
        defaultMessage: 'No, volver',
      },
      continueText: {
        id: 'stepForm.notificationText.closeAlert.continueText',
        defaultMessage: 'Sí, cancelar',
      },
    },
  },
  actionButtons: {
    back: {
      id: 'stepForm.actionButtons.back',
      defaultMessage: 'Atrás',
    },
    cancel: {
      id: 'stepForm.actionButtons.cancel',
      defaultMessage: '{readOnly, select, true {Volver} other {Cancelar}}',
    },
    next: {
      id: 'stepForm.actionButtons.next',
      defaultMessage: 'Siguiente',
    },
  },
}

export default messages
