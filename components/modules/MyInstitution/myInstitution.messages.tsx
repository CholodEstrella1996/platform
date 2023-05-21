const messages = {
  title: {
    id: 'myInstitution.title',
    defaultMessage:
      '{isOrganizationId, select, true {Usuarios de la institución} other {Mi institución}}',
  },
  header: {
    button: {
      id: 'myInstitution.header.button',
      defaultMessage: 'Ver anuncios',
    },
  },
  deleteSuccess: {
    id: 'myInstitution.deleteSuccess',
    defaultMessage: 'Has eliminado el usuario correctamente.',
  },
  deleteError: {
    id: 'myInstitution.deleteError',
    defaultMessage: 'No logramos eliminar el usuario. Intenta nuevamente más tarde.',
  },
  getMemberError: {
    id: 'myInstitution.getMemberError',
    defaultMessage: 'No logramos cargar el listado. Intenta nuevamente más tarde.',
  },
  addUserModal: {
    title: {
      id: 'myInstitution.addUserModal.title',
      defaultMessage: 'Datos del Usuario',
    },
    user: {
      id: 'myInstitution.addUserModal.user',
      defaultMessage: 'Usuario',
    },
    role: {
      id: 'myInstitution.addUserModal.role',
      defaultMessage: 'Rol',
    },
    roleName: {
      id: 'myInstitution.addUserModal.roleName',
      defaultMessage: '{isStudent, select, true {Student} other {Teacher}}',
    },
    label: {
      id: 'myInstitution.addUserModal.label',
      defaultMessage: 'Grupo *',
    },
    placeholder: {
      id: 'myInstitution.addUserModal.placeholder',
      defaultMessage: 'Selecciona un grupo',
    },
    getGroupsError: {
      id: 'myInstitution.addUserModal.getGroupsError',
      defaultMessage: 'No logramos cargar el listado de grupos. Intenta nuevamente más tarde.',
    },
  },
  filter: {
    select: {
      label: {
        id: 'myInstitution.filter.select.label',
        defaultMessage: 'Suscripción',
      },
      placeholder: {
        id: 'myInstitution.filter.select.placeholder',
        defaultMessage: 'Seleccione una suscripción',
      },
    },
  },
}

export default messages
