import { DragAndDropComponent } from './dragAndDrop.component'
import { DragAndDropComponentProps } from './dragAndDrop.model'

export const DragAndDropContainer = (props: DragAndDropComponentProps) => (
  <DragAndDropComponent {...props} />
)
