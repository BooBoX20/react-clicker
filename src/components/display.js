import React from 'react';
import './display.css';

const display = (props)=> {
   return(
       <div className='display'>
           {props.display}
       </div>
   )
};


export default display;