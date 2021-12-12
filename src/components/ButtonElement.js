import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';

const ButtonElement = ({id, index}) => {

  const [value, setValue] = useState("Button");
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
                placeholder="Button"
                value={value}
                onChange={(e)=>setValue(e.target.value)}
                style={{border:"none", backgroundColor:"rgb(63,143,233)", borderRadius:"5px", textAlign:"center", fontSize:"16px", "padding":"10px 0px", color:"white", fontWeight:"bold", width:"200px"}}
              />
              :
              <div style={{border:"none", backgroundColor:"rgb(63,143,233)", borderRadius:"5px", textAlign:"center", fontSize:"16px", "padding":"10px 0px", color:"white", fontWeight:"bold", width:"200px"}}>
                {value}
              </div>
            }
          </div>
        )
      }
      
    </Draggable>
   );
}
 
export default ButtonElement;