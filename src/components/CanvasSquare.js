import React, {useState} from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import ButtonElement from './ButtonElement';
import TextBoxElement from './TextBoxElement';
import TextFieldElement from './TextFieldElement';
import EmptyElement from './EmptyElement';


const CanvasSquare = ({id, index, element, position}) => {


  const renderElement = () =>{
    if(element === null){
      return <EmptyElement id={id} index={index}/>
    }
    switch(element.type){
      case 'textBox':
        return <TextBoxElement id={id} index={index}/>
      case 'textField':
        return <TextFieldElement id={id} index={index}/>
      case 'button':
        return <ButtonElement id={id} index={index}/>
      default:
        return <EmptyElement id={id} index={index}/>
    }
  }

  return ( 
      <Droppable droppableId={position}>
        {
          (provided, snapshot) => (
            <div 
              style={{display:"flex", width:"250px", height:"75px", justifyContent:"center", alignItems:"center", backgroundColor:snapshot.isDraggingOver ? "lightblue" : "white"}}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {renderElement()}
              {provided.placeholder}
            </div>
          )
        }
      </Droppable>
    
  );
}
 
export default CanvasSquare;