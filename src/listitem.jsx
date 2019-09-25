import React, {Component} from 'react';

export default class ListItem extends Component{
  render(){
    return(
      <div className='well list' style={{backgroundColor:this.props.priority}}>
        <div className='one-line'>
          <input type='checkbox' id='complete' className='complete-button'/>
          <label style={{backgroundColor:this.props.priority}} className='well-description'>{this.props.description}</label>
        </div>
        <div className='edit'> 
          <div className='button-container'>
            <input type='image' src='./editIcon.png' className='edit button' onClick={() => {this.props.editItem(this.props.id)}}/>
            <input type='image' src='./delete.png' className='remove button' onClick={() => {this.props.removeItem(this.props.id)}}/>
          </div>
        </div>
      </div>
    );
  }
}

