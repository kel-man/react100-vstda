import React, {Component} from 'react';
import TodoForm from './todoform';
// class ListItem extends Component {
  // render(){
    // return(
     export default props => (
      <div className='well' style={{}}>
        <h2 className='item-number'>{props.id}</h2>
        <p className='item-description card' style={{/*color:this.state.prior*/}}>{props.description}</p>
        <button className='edit button btn-primary btn' style={{backgroundColor:'yellow', color:'black', width:'20%'}}>Edit</button>
        <button className='button remote btn' style={{backgroundColor:'red', color:'black', width:'20%'}}>Delete</button>
      </div>
    );
//   }
// }