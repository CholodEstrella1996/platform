export type DetailLearningProps = {
  title: string
  history: string
  description: string
  laboratoryList: LabList[]
}

type LabList = {
  id: number
  text: string
}
