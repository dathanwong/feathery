import React, { useState, useEffect } from 'react';
import Element from './TextBoxElement';
import ElementTray from './ElementTray';
import FormCanvas from './FormCanvas';
import FormCanvasNew from './FormCanvasNew';
import ButtonElement from './ButtonElement';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from '../initialData';

const MainPage = (props) => {

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
    <DragDropContext onDragEnd={onDragEnd}>
      <ElementTray>
      </ElementTray>
      <FormCanvas data={data}/>
    </DragDropContext>
  );
}
 
export default MainPage;