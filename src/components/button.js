import React from 'react';
import './button.css'

const buttons = (props)=>{
    return(
        <div className = 'buttons' >
           <div className='increment' onClick = {props.increment}>
           <i className="fa fa-plus" ></i>
           </div>
           <div className = 'refresh'  onClick = {props.refresh}>
           <i className="fa fa-refresh" ></i>
           </div>
           <div className = 'decrement' onClick = {props.decrement}>
           <i className="fa fa-minus"></i>
           </div>
        </div>
        )
}
export default buttons;