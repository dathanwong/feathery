import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const EmptyElement = ({id, index}) => {


  return ( 
    <Draggable draggableId={id.toString()} index={index}>
      {provided => (
          
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
          </div>
        )
      }
      
    </Draggable>
   );
}
 
export default EmptyElement;