import React, {useState} from 'react';
import CanvasSquare from './CanvasSquare';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import initialData from '../initialData';

const FormCanvas = ({data}) => {

  return (
    <div className="form-canvas">
        {
          data && data.map((component, index)=>{
            return (
              <CanvasSquare key={index} element={component} id={index.toString()} index={index} position={`position-${index}`}/>
            )
          })
        }
    </div> 
   );
}
 
export default FormCanvas;