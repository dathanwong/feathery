import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';

const TextBoxElement = ({id, index}) => {

  const [value, setValue] = useState("Text Box");
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
                placeholder="Text Box"
                value={value}
                onChange={(e)=>setValue(e.target.value)}
                style={{border:"none", textAlign:"center", fontWeight:"bold", fontSize:"16px"}}
              />
              :
              <div style={{border:"none", textAlign:"center", fontWeight:"bold", fontSize:"16px"}}>
                {value}
              </div>
            }
          </div>
        )
      }
      
    </Draggable>
   );
}
 
export default TextBoxElement;