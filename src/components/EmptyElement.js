import React, { useState, useEffect } from 'react';
import { Draggable } from 'react-beautiful-dnd';

const EmptyElement = ({id, index}) => {

  const [value, setValue] = useState("Button");
  const [isEditing, setisEditing] = useState(false);


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