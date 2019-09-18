import React, {Component} from 'react';
import TodoForm from './todoform';
// class ListItem extends Component {
  // render(){
    // return(
     export default props => (
      <div className='well' style={{backgroundColor:props.priority}}>
        {/* <h2 className='item-number'>{props.id}</h2> */}
        <div style={{width:'100%'}}>
          <p className='item-title card' style={{backgroundColor:props.priority, width:'90%'}}>{props.title}</p>
          <button className='edit button btn-primary btn' style={{backgroundColor:'#0099cc', color:'black', width:'10%'}}>Edit</button>
        </div>
        <div style={{width:'100%'}}>
          <p className='item-description card' style={{backgroundColor:props.priority, width:'90%'}}>{props.description}</p>
          <button className='button remove btn' style={{backgroundColor:'#80002a', color:'black', width:'10%'}}>Delete</button>
        </div>
      </div>
    );
//   }
// }