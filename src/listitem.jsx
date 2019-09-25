import React, {Component} from 'react';

export default class ListItem extends Component{
  render(){
    return(
      <div className='well list' style={{backgroundColor:this.props.priority}}>
        <div >
          <input type='checkbox' className='complete button' onChange={() => {this.props.completeItem(this.props)}}/>
          <p style={{backgroundColor:this.props.priority, textDecoration:this.props.completion}} className={this.props.completion}>{this.props.description}</p>
        </div>
        <div className='edit'> 
          <div className='button container'>
            <input type='image' src='./editIcon.png' className='edit button' onClick={() => {this.props.editItem(this.props.id)}}/>
            <input type='image' src='./delete.png' className='remove button' onClick={() => {this.props.removeItem(this.props.id)}}/>
          </div>
        </div>
      </div>
    );
  }
}

