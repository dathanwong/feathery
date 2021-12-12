import React, { useState, useEffect } from 'react';
import Element from './TextBoxElement';
import ElementTray from './ElementTray';
import FormCanvas from './FormCanvas';
import FormCanvasNew from './FormCanvasNew';
import ButtonElement from './ButtonElement';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from '../initialData';
import elementTemplates from '../elementTemplates';

const MainPage = (props) => {

  const [data, setData] = useState(initialData.components);

  const onDragEnd = (result) => {
    console.log(result);
    const { destination, source, draggableId } = result;
    let tempEl = data[source.index];
    let tempData = [...data];
    //Do nothing if moving tray element to somewhere off the canvas
    if(destination === null && source.droppableId==='element-tray'){
      return;
    }
    //Delete element if moved off the canvas
    if(destination === null){
      tempData[source.index] = null;
      setData(tempData);
      return;
    }
    //Add element to canvas
    if(source.droppableId === 'element-tray'){
      console.log(elementTemplates[draggableId]);
      tempData[destination.index] = {...elementTemplates[draggableId]};
      setData(tempData);
      return;
    }
    //Swap elements if moved to a location with another element
    tempData[source.index] = data[destination.index];
    tempData[destination.index] = tempEl;
    setData(tempData);
  }

  return ( 
    <DragDropContext onDragEnd={onDragEnd}>
      <ElementTray>
      </ElementTray>
      <FormCanvas data={data}/>
    </DragDropContext>
  );
}
 
export default MainPage;