export type DragAndDropComponentProps = {
  laboratoryList: LabList[]
  setLaboratoryInOrder: (labs: LabList[]) => void
}

export type LabList = {
  id: number
  text: string
}
