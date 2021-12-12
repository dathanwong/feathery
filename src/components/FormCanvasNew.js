import React, { useState } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import CanvasSquare from "./CanvasSquare";

// fake data generator
const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250
});

const FormCanvasNew = (props) => {

  const [items, setItems] = useState(getItems(1));

  const onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const newItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    setItems(newItems);
  }

  return (
    <div className="form-canvas">
      <DragDropContext onDragEnd={onDragEnd}>
        <CanvasSquare getItemStyle={getItemStyle} getListStyle={getListStyle}>
          Test
        </CanvasSquare>
        <CanvasSquare getItemStyle={getItemStyle} getListStyle={getListStyle}>
          Test
        </CanvasSquare>
        <CanvasSquare getItemStyle={getItemStyle} getListStyle={getListStyle}>
          Test
        </CanvasSquare>
      </DragDropContext>
    </div> 
   );
}
 
export default FormCanvasNew;
