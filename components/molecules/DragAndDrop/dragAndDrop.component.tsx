import React, { useEffect, useState } from 'react'

import { Menu } from '@mui/icons-material'
import {
  DragDropContext,
  Draggable,
  DraggableProvided,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'

import { DragAndDropComponentProps, LabList } from './dragAndDrop.model'
import { DragAndDropGlobalStyles, DragAndDropLocalStyles } from './dragAndDrop.styles'

export const DragAndDropComponent = ({
  laboratoryList,
  setLaboratoryInOrder,
}: DragAndDropComponentProps) => {
  const [laboratories, setLaboratories] = useState(laboratoryList)
  const { colors } = theme

  const handleReorder = (list: LabList[], startIndex: number, endIndex: number) => {
    const result: LabList[] = [...list]
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    setLaboratoryInOrder(result)
    return result
  }

  const handleOnDrag = (result: DropResult) => {
    const { source, destination } = result
    if (!destination) return
    if (source.index === destination.index) return

    setLaboratories((prevLabs) => handleReorder(prevLabs, source.index, destination.index))
  }
  useEffect(() => {
    setLaboratories(laboratoryList)
  }, [laboratoryList])

  return (
    <>
      <DragDropContext onDragEnd={(result) => handleOnDrag(result)}>
        <Droppable droppableId="laboratory">
          {(droppableProvided) => (
            <div
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
              className="laboratory__cards">
              {laboratories.map((lab, index) => (
                <Draggable key={lab.id} draggableId={`${lab.id}`} index={index}>
                  {(draggableProvided: DraggableProvided) => (
                    <div
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      style={{ ...draggableProvided.draggableProps.style }}
                      className="laboratory__item"
                      {...draggableProvided.dragHandleProps}>
                      <Menu sx={{ color: colors.neutrals[100] }} />
                      <Typography variant="c1" color={colors.neutrals[500]} className="itemNumber">
                        {index + 1}
                      </Typography>
                      <Typography variant="s1" color={colors.neutrals[300]}>
                        {lab.text}
                      </Typography>
                    </div>
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <style jsx>{DragAndDropLocalStyles}</style>
      <style jsx global>
        {DragAndDropGlobalStyles}
      </style>
    </>
  )
}
