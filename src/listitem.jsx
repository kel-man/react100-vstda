import React, {Component} from 'react';

export default class ListItem extends Component{
  render(){
    return(
      <div className='well list' style={{background:this.props.priority}}>
        <div className='one-line' style={{background:this.props.priority}}>
          <div className='complete-div' style={{background:this.props.priority}}>
            <input type='checkbox' className='complete-button' style={{background:this.props.priority}}/>
          </div>
          <p style={{background:this.props.priority}} className='well-description'>{this.props.description}</p>
        </div>
        <div className='edit' style={{background:this.props.priority}}> 
          <div className='button-container' style={{background:this.props.priority}}>
            <input type='image' src='./editIcon.png' className='edit button edit-todo' onClick={() => {this.props.editItem(this.props.id)}}/>
            <input type='image' src='./delete.png' className='delete-todo remove button' onClick={() => {this.props.removeItem(this.props.id)}}/>
          </div>
        </div>
      </div>
    );
  }
}

