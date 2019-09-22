import React, {Component} from 'react';

export default class ListItem extends Component{
  render(){
    return(
      <div className='well list' style={{backgroundColor:this.props.priority}}>
        <div >
          <p style={{backgroundColor:this.props.priority}} className='item-description card'>{this.props.description}</p>
        </div>
        <div className='edit'> 
          <div className='button container'>
            <input type='image' src='./editIcon.png' className='edit button' onClick={this.handleEdit}/>
            <input type='image' src='./delete.png' className='remove button' onClick={() => {this.props.removeItem(this.props.id)}}/>
          </div>
        </div>
      </div>
    );
  }
}

