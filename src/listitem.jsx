import React, {Component} from 'react';
import TodoForm from './todoform';
import EditForm from './editform';
     export default props => (
      <div className='well list' >
        <div style={{borderColor:props.priority, borderWidth:'2em', borderStyle:'solid'}}>
          <p className='item-description card' style={{width:'90%'}}>{props.description}</p>
        </div>
        <div>
          <EditForm></EditForm>
        </div>
      </div>
    );
