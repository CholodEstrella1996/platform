const messages = {
  header: {
    chip: {
      id: 'detailLaboratoryUnit.header.chip',
      defaultMessage: '{isLearningUnit, select, true {Unidad de Aprendizaje} other {Laboratorio}}',
    },
    buttonText: {
      id: 'detailLaboratoryUnit.header.buttonText',
      defaultMessage: 'Acceder {isLearningUnit, select, true {a la unidad} other {al laboratorio}}',
    },
  },
  descriptionCard: {
    id: 'detailLaboratoryUnit.descriptionCard',
    defaultMessage:
      'Descripción {isLearningUnit, select, true {de la unidad de aprendizaje} other {del laboratorio}}',
  },
  laboratoryContent: {
    learningUnits: {
      id: 'detailLaboratoryUnit.laboratoryContent.learningUnits',
      defaultMessage: 'Unidades de aprendizaje',
    },
    complementary: {
      title: {
        id: 'detailLaboratoryUnit.laboratoryContent.complementary.title',
        defaultMessage: 'Material complementario',
      },
      materialsName: {
        id: 'detailLaboratoryUnit.laboratoryContent.complementary.materialsName',
        defaultMessage:
          '{typeName, select, guide {Guía de laboratorio} tutorial {Video Tutorial} other {Webinar}}',
      },
    },
  },
  onLoadError: {
    id: 'detailLaboratoryUnit.onLoadError',
    defaultMessage: 'No se pudieron cargar los datos. Intente nuevamente más tarde.',
  },
}

export default messages
