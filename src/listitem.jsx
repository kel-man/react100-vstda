import React, {Component} from 'react';
import TodoForm from './todoform';
import EditForm from './editform';
     export default props => (
      <div className='well list' style={{backgroundColor:props.priority}}>
        <div >
          <p style={{backgroundColor:props.priority}} className='item-description card'>{props.description}</p>
        </div>
        <div className='edit'> 
          <EditForm removeItem={props.removeItem} id={props.id} list={props.list}></EditForm>
        </div>
      </div>
    );
