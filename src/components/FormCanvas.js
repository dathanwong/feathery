import React, {useState} from 'react';
import CanvasSquare from './CanvasSquare';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import initialData from '../initialData';

const FormCanvas = (props) => {

  const [data, setData] = useState(initialData.components);

  const onDragEnd = (result) => {
    console.log(result);
    const { destination, source, draggableId } = result;
    let tempEl = data[source.index];
    let tempData = [...data];
    tempData[source.index] = data[destination.index];
    tempData[destination.index] = tempEl;
    setData(tempData);
  }

  return (
    <div className="form-canvas">
      <DragDropContext onDragEnd={onDragEnd} className="form-canvas">
        {
          data && data.map((component, index)=>{
            return (
              <CanvasSquare key={index} element={component} id={index.toString()} index={index} position={`position-${index}`}/>
            )
          })
        }
      </DragDropContext>
    </div> 
   );
}
 
export default FormCanvas;