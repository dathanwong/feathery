import React, { useState } from 'react';
import ElementTray from './ElementTray';
import FormCanvas from './FormCanvas';
import { DragDropContext } from 'react-beautiful-dnd';
import elementTemplates from '../elementTemplates';
import ButtonElement from './ButtonElement';
import TextBoxElement from './TextBoxElement';
import TextFieldElement from './TextFieldElement';

const MainPage = (props) => {

  const rows = 4;
  const cols = 2;

  /**
   * Generate the default grid array to store the component data
   * @param {int} rows 
   * @param {int} cols 
   */
  const generateGrid = (rows, cols) =>{
    return new Array(rows*cols).fill(null);
  }

  const [data, setData] = useState(generateGrid(rows, cols));

  const onDragEnd = (result) => {
    console.log(result);
    const { destination, source, draggableId } = result;
    let tempEl = data[source.index];
    let tempData = [...data];
    //Do nothing if moving tray element to somewhere off the canvas
    if(destination === null && source.droppableId==='element-tray'){
      return;
    }
    //Do nothing if moving anything to the element tray
    if(destination?.droppableId === 'element-tray'){
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
        <ButtonElement id="button" index={100} />
        <TextFieldElement id="textField" index={101}/>
        <TextBoxElement id="textBox" index={102}/>
      </ElementTray>
      <FormCanvas data={data}/>
    </DragDropContext>
  );
}
 
export default MainPage;