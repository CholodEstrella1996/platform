const messages = {
  detailSubscription: {
    title: {
      id: 'detailSubscription.title',
      defaultMessage: 'Detalle de suscripción',
    },
    name: {
      id: 'detailSubscription.name',
      defaultMessage: 'Suscripción',
    },
    buttons: {
      support: {
        id: 'detailSubscription.button.support',
        defaultMessage: 'Soporte',
      },
      download: {
        id: 'detailSubscription.button.download',
        defaultMessage: 'Descargar factura',
      },
    },
    access: {
      status: {
        id: 'detailSubscription.access.status',
        defaultMessage: 'Estado',
      },
      type: {
        id: 'detailSubscription.access.type',
        defaultMessage: 'Tipo',
      },
      client: {
        id: 'detailSubscription.access.client',
        defaultMessage: 'Tipo de cliente',
      },
      date: {
        id: 'detailSubscription.access.date',
        defaultMessage: 'Acceso hasta',
      },
      included: {
        id: 'detailSubscription.access.included',
        defaultMessage: 'Accesos incluidos',
      },
    },
    products: {
      title: {
        id: 'detailSubscription.product.title',
        defaultMessage: 'Productos incluidos',
      },
      quantity: {
        id: 'detailSubscription.product.quantity',
        defaultMessage: '{isPlural, select, true { productos} other { producto}}',
      },
    },
    error: {
      id: 'detailSubscription.error',
      defaultMessage: 'No se pudo cargar la suscripción. Intente nuevamente más tarde',
    },
    downloadError: {
      id: 'detailSubscription.downloadError',
      defaultMessage: 'Hubo un error al descargar la factura. Intente nuevamente más tarde.',
    },
  },
}

export default messages
