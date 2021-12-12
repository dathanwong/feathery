import React, { useState, useEffect } from 'react';


const ElementTray = (props) => {
  return ( 
    <div className="element-tray">
      {props.children}
    </div>
   );
}
 
export default ElementTray;