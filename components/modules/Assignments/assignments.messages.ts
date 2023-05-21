const messages = {
  title: {
    id: 'results.title',
    defaultMessage: 'Calificaciones',
  },
  resultsTable: {
    title: {
      id: 'results.resultsTable.title',
      defaultMessage: 'Lista de prácticas',
    },
    loaded: {
      id: 'results.resultsTable.loaded',
      defaultMessage: '{quantity} prácticas encontradas',
    },
    button: {
      id: 'results.resultsTable.button',
      defaultMessage: 'Descargar Excel',
    },
    defaultStudentName: {
      id: 'results.resultsTable.defaultStudentName',
      defaultMessage: 'Usuario Registrado',
    },
    filters: {
      labels: {
        user: {
          id: 'results.resultsTable.filters.labels.student',
          defaultMessage: 'Estudiante',
        },
        subscription: {
          id: 'results.resultsTable.filters.labels.subscription',
          defaultMessage: 'Suscripción',
        },
        classroom: {
          id: 'results.resultsTable.filters.labels.group',
          defaultMessage: 'Grupo',
        },
        area: {
          id: 'results.resultsTable.filters.labels.area',
          defaultMessage: 'Área',
        },
        application: {
          id: 'results.resultsTable.filters.labels.laboratory',
          defaultMessage: 'Laboratorio',
        },
        status: {
          id: 'results.resultsTable.filters.labels.status',
          defaultMessage: 'Estado',
        },
        date: {
          id: 'results.resultsTable.filters.labels.date',
          defaultMessage: 'Periodo',
        },
      },
      placeholders: {
        selects: {
          id: 'results.resultsTable.filters.placeholders.selects',
          defaultMessage:
            'Seleccione un{name, select, area { área} laboratory { laboratorio} group { grupo} student { estudiante} status { estado} other {a suscripción}}',
        },
        date: {
          id: 'results.resultsTable.filters.placeholders.date',
          defaultMessage: 'Desde - Hasta',
        },
      },
    },
    delete: {
      success: {
        id: 'results.resultsTable.delete.success',
        defaultMessage: 'Eliminaste la práctica correctamente.',
      },
      error: {
        id: 'results.resultsTable.delete.error',
        defaultMessage: 'No logramos eliminar la práctica. Intenta nuevamente más tarde.',
      },
    },
    restore: {
      success: {
        id: 'results.resultsTable.restore.success',
        defaultMessage: 'Restauraste el envío correctamente.',
      },
      error: {
        id: 'results.resultsTable.restore.error',
        defaultMessage: 'No logramos restaurar el envío. Intenta nuevamente más tarde.',
      },
    },
    download: {
      success: {
        id: 'results.resultsTable.download.success',
        defaultMessage: 'Descarga realizada correctamente.',
      },
      error: {
        id: 'results.resultsTable.download.error',
        defaultMessage: 'No logramos descargar el archivo. Intenta nuevamente más tarde.',
      },
    },
    notifications: {
      getGrades: {
        id: 'results.resultsTable.notifications.getGrades',
        defaultMessage:
          'No se pudo cargar el listado de calificaciones. Intenta nuevamente más tarde.',
      },
      getStudents: {
        id: 'results.resultsTable.notifications.getStudents',
        defaultMessage: 'No se pudo cargar el listado de estudiantes',
      },
    },
  },
}

export default messages
