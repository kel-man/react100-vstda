import React, {Component} from 'react';

class TodoForm extends Component{
    constructor(props){
        super(props);
        this.state={
            item:{},
            description:'',
            isEditable:false,
            priority:'#ccffcc',
            id:''
        }
        this.handleDescription=this.handleDescription.bind(this);
        this.handleSelect=this.handleSelect.bind(this);
        this.handleButtonClick=this.handleButtonClick.bind(this);
        this.handleToggle=this.handleToggle.bind(this);
    }

    handleButtonClick(){
        var item = {
            id: Math.random()+1,
            description: this.state.description, 
            priority: this.state.priority,
            isEditable: this.state.isEditable
        }
        this.props.addItem(item); 
        this.setState({
            description:'',
            priority:'#ccffcc'
        });
    }
    handleDescription(e){
        this.setState({
            description: e.target.value
        });
    }
    handleSelect(e){
        this.setState({
            priority: e.target.value
        });
    }
    handleToggle(){
        if (this.state.isEditable === true){
            this.setState({
                isEditable: false
            })
        } else if (this.state.isEditable === false){
            this.setState({
                isEditable: true
            })
        }
    }
    render(){
        return(
            <div className='form card'>
                <h4 className='card-header ftitle'>Add New Todo </h4>
                <label >I want to...</label>
                <textarea type='text' id='description' className='description input card create-todo-text' onChange={this.handleDescription} value={this.state.description}/>
                <label>How much of a priority is this?</label>
                <select className='priority' onChange={this.handleSelect} type='number' value={this.state.priority}>
                    <option className='low-priority' value='#29a329' style={{color:'#ccffcc'}}>Low</option>
                    <option className='mid-priority' value='#ffff99' style={{color:'#ff8000'}}>High</option>
                    <option className='high-priority' value='#ff4d4d' style={{color:'#ff9980'}}>Critical!!!</option>
                </select>
                <div className='checkbox-div'>
                <label style={{width:'70%'}}>Enable editing?..................</label>
                <input type='checkbox' className='editToggle' onChange={this.handleToggle}/>
                </div>
                <footer className='form-footer'>
                    <button type='submit' className='submit card add-todo' onClick={this.handleButtonClick} >Add Item!</button>
                </footer>
            </div>
        );
    }
}
export default TodoForm;