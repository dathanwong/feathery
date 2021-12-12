import React  from 'react';
import { Droppable} from 'react-beautiful-dnd';



const ElementTray = (props) => {
  return ( 
      <Droppable droppableId={'element-tray'} isDropDisabled={true}>
        {
          (provided) => (
            <div 
              className="element-tray"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {props.children}
              {provided.placeholder}
            </div>
          )
        }
      </Droppable>
   );
}
 
export default ElementTray;