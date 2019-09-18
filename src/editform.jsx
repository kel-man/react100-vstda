import React, {Component} from 'react';
import ListBox from './listbox';

export default class EditForm extends Component{
    constructor(props){
        super(props);
        this.state={
            isEditable: true,
            isBeingEdited: false,
            isSubmitted: false,
            isComplete: false,
            permissionsAlert: false
        }
    }

    handleEdit(){
        if(this.isEditable === true){
            this.setState({
                isBeingEdited: true
            });
        }
        if(this.isEditable === false){
            this.setState({
                permissionsAlert: true
            });
        }
    }

    handleRemove(){
        props.removeItem(props.key);
    }

    render(){
            return(
                <div className='button container'>
                    <input type='image' src='./editIcon.png' className='edit button' onClick={this.handleEdit}/>
                    <input type='image' src='./delete.png' className='remove button' onClick={this.handleRemove}/>
                </div>
            );
        }
}