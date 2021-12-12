import React, { useState, useEffect } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import ButtonElement from './ButtonElement';
import TextBoxElement from './TextBoxElement';
import TextFieldElement from './TextFieldElement';


const ElementTray = (props) => {
  return ( 
      <Droppable droppableId={'element-tray'}>
        {
          (provided) => (
            <div 
              className="element-tray"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <ButtonElement id="button" index={100} />
              <TextFieldElement id="textField" index={101}/>
              <TextBoxElement id="textBox" index={102}/>
              {provided.placeholder}
            </div>
          )
        }
      </Droppable>
   );
}
 
export default ElementTray;