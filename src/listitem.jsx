import React, {Component} from 'react';
import TodoForm from './todoform';
import EditForm from './editform';
import ListBox from './listbox';

export default class ListItem extends Component{
  constructor(props){
    super(props);
    this.state={
      priority: this.props.priority,
      description: this.props.description,
      removeItem: this.props.removeItem,
      id: this.props.id
    }
  }
  render(){
    return(
      <div className='well list' style={{backgroundColor:this.state.priority}}>
        <div >
          <p style={{backgroundColor:this.state.priority}} className='item-description card'>{this.state.description}</p>
        </div>
        <div className='edit'> 
          <div className='button container'>
            <input type='image' src='./editIcon.png' className='edit button' onClick={this.handleEdit}/>
            <input type='image' src='./delete.png' className='remove button' onClick={() => {this.state.removeItem(this.state.id)}}/>
          </div>
        </div>
      </div>
    );
  }
}

