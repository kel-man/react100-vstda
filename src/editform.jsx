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
            permissionsAlert: false,
            list: this.props.list,
            id: this.props.id
        }
        this.handleEdit=this.handleEdit.bind(this);
        this.handleRemove=this.handleRemove.bind(this);
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
        console.log('Clicked!');
        console.log(this.state.id);
        this.props.removeItem(this.state.id);
        
    }

    render(){
            return(
                <div className='button container'>
                    <input type='image' src='./editIcon.png' className='edit button' onClick={this.handleEdit}/>
                    <input type='image' src='./delete.png' className='remove button' onClick={this.handleRemove}/>
                    {/* <input type='image' src='./delete.png' className='remove button' onClick={props} */}
                </div>
            );
        }
}