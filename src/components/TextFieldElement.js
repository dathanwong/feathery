import React, { useState, useEffect } from 'react';
import { Draggable } from 'react-beautiful-dnd';

const TextFieldElement = ({id, index}) => {

  const [value, setValue] = useState("Text Field");
  const [isEditing, setisEditing] = useState(false);

  const handleDoubleClick = (e) => {
    setisEditing(true);
    console.log(e);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setisEditing(false);
    }
  }

  return ( 
    <Draggable draggableId={id.toString()} index={index}>
      {provided => (
          
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onDoubleClick={handleDoubleClick}
            onBlur={() => setisEditing(false)}
            onKeyPress={handleKeyPress}
          >
            {
              isEditing ?
              <input
                type="text"
                placeholder="Text Field"
                value={value}
                onChange={(e)=>setValue(e.target.value)}
                style={{padding:"10px 5px", fontSize:"16px", border:"1px solid black", borderRadius:"5px", width:"200px"}}
              />
              :
              <div style={{padding:"10px 5px", fontSize:"16px", border:"1px solid black", borderRadius:"5px", width:"200px", backgroundColor:"white"}}>
                {value}
              </div>
            }
          </div>
        )
      }
      
    </Draggable>
   );
}
 
export default TextFieldElement;