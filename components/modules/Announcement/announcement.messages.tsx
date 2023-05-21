const messages = {
  announcement: {
    header: {
      title: {
        id: 'announcement.header.title',
        defaultMessage: 'Anuncios',
      },
      loaded: {
        id: 'announcement.header.loaded',
        defaultMessage: '{quantity} anuncios cargados',
      },
    },
    menu: {
      new: {
        id: 'announcement.menu.new',
        defaultMessage: 'Crear anuncio',
      },
    },
    search: {
      label: {
        id: 'announcement.search.label',
        defaultMessage: 'Buscar',
      },
      placeholder: {
        id: 'announcement.search.placeholder',
        defaultMessage: 'Buscar por asunto, mensaje o destinatario',
      },
    },
    labels: {
      title: {
        id: 'announcement.labels.title',
        defaultMessage: 'Información del anuncio',
      },
      date: {
        id: 'announcement.labels.date',
        defaultMessage: 'Fecha de envío:',
      },
      subject: {
        id: 'announcement.labels.subject',
        defaultMessage: 'Asunto',
      },
      receiver: {
        id: 'announcement.labels.receiver',
        defaultMessage: 'Destinatario',
      },
      message: {
        id: 'announcement.labels.message',
        defaultMessage: 'Mensaje',
      },
    },
    sendNotice: {
      modalNew: {
        title: {
          id: 'announcement.sendNotice.modalNew.title',
          defaulMessage: 'Enviar anuncio',
        },
        submitButton: {
          id: 'announcement.sendNotice.modalNew.submitButton',
          defaultMessage: 'Enviar',
        },
      },
      caption: {
        id: 'announcement.sendNotice.caption',
        defaultMessage: 'Al darle click a “Enviar” no se podrá modificar o cancelar el mensaje.',
      },
      notification: {
        success: {
          id: 'announcement.sendNotice.notification.success',
          defaultMessage: 'Has enviado el anuncio correctamente.',
        },
        error: {
          id: 'announcement.sendNotice.notification.error',
          defaultMessage: 'No logramos enviar el anuncio. Por favor intenta nuevamente más tarde.',
        },
      },
    },
    getAnnouncementsError: {
      id: 'announcement.getAnnouncementsError',
      defaultMessage: 'No logramos cargar el listado de anuncios. Intenta nuevamente más tarde.',
    },
    getNoticeDetailError: {
      id: 'announcement.getNoticeDetailError',
      defaultMessage: 'No logramos recuperar el anuncio. Intente nuevamente más tarde.',
    },
    getOptionsError: {
      id: 'announcement.getOptionsError',
      defaultMessage:
        'No logramos cargar el listado de destinatarios. Intente nuevamente más tarde.',
    },
  },
}
export default messages
