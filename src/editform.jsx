import React, {Component} from 'react';

export default class EditForm extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            selectedItem: this.props.selectedItem,
            editDescription: this.props.selectedItem.description,
            editPriority: this.props.selectedItem.priority,
        }
        this.handleEditDescription=this.handleEditDescription.bind(this);
        this.handleEditPriority=this.handleEditPriority.bind(this);
        this.handleEditButtonClick=this.handleEditButtonClick.bind(this);
    }

    handleEditButtonClick(){
        let item = {
            id: this.props.selectedId,
            description: this.state.editDescription,
            priority: this.state.editPriority,
            isEditable: true,
            completion: ''
        }
        this.props.changeItem(item);
    }
 
    handleEditDescription(e){
        this.setState({
            editDescription: e.target.value
        });
    }

    handleEditPriority(e){
        this.setState({
            editPriority: e.target.value
        });
    }

    render(){
        return(
            <div>
                <div className='edit container'>
                    <h4 className='edit-title'>Edit To-Do Item</h4>
                    <label className='edit-label'>I want to... </label>
                    <textarea type='text' className='edit-description' id='description' onChange={this.handleEditDescription} value={this.state.editDescription}></textarea>
                    <label className='priority-label'>Change priority level?</label>
                    <select className='priority-card' onChange={this.handleEditPriority} value={this.state.editPriority}>
                        <option className='low-priority' value='#29a329'>Low</option>
                        <option className='mid-priority' value='#ffff99'>High</option>
                        <option className='high-priority' value='#ff4d4d'>Critical!!!</option>
                    </select>
                    <button className='change-button' placeholder='Change' onClick={this.handleEditButtonClick}/>
                </div>
            </div>
        );
    }
}