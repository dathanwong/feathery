import React from 'react';
import CanvasSquare from './CanvasSquare';

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