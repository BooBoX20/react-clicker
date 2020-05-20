import React, { Component } from 'react';
import './App.css';
import  Button from './components/button';
import Display from './components/display';

class App extends Component {
   state= {
     increment: 0,
     
   }
    
   incrementHandler = ()=>{
     this.setState({
       increment: this.state.increment + 1
     })
   } 
   refreshHandler = ()=>{
     this.setState({
       increment: 0
     })
   }
   
   decrementHandler = ()=>{
     this.setState({
       increment: this.state.increment - 1
     })
   }
   render(){
     const  style = {
       width: '450px',
       margin: 'auto',
       marginTop: '100px',
       boxShadow: '0px 20px 50px #eee'

     }
     return(
       <div style = {style}>
          <Display display = {this.state.increment}/>
          <Button 
           increment = {this.incrementHandler}
           refresh = {this.refreshHandler}
           decrement = {this.decrementHandler}/>
       </div>
     )
   }
}

export default App;
