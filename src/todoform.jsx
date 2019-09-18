import React, {Component} from 'react';

class TodoForm extends Component{
    constructor(props){
        super(props);
        this.state={
            item:[],
            title:'',
            description:'',
            isEditable:'',
            priority:'#29a329'
        }
        this.handleTitle=this.handleTitle.bind(this);
        this.handleDescription=this.handleDescription.bind(this);
        this.handleSelect=this.handleSelect.bind(this);
        this.handleButtonClick=this.handleButtonClick.bind(this);
        this.handleToggle=this.handleToggle.bind(this);
    }

    handleButtonClick(){
        var item = {
            title: this.state.title,
            description: this.state.description, 
            priority: this.state.priority,
            isEditable: this.state.isEditable
        }
        this.props.addItem(item); 
        this.setState({
            title:'',
            description:'',
            isEditable:'',
            priority:'#29a329'
        });
    }
    handleTitle(e){
        this.setState({
            title: e.target.value
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
    handleToggle(e){
        this.setState({
            isEditable: e.target.value
        });
    }
    render(){
        return(
            <div className='form card' style={{display:'flex', alignContent:'space-around', justifyContent:'space-around'}}>
                <h4 className='card-header' style={{color:'black'}}>New Item: </h4>
                <input type='text' name='title' className='title' placeholder='TITLE' onChange={this.handleTitle} value={this.state.title}/>
                <input type='text' name='description' className='description input card' placeholder='DESCRIPTION' onChange={this.handleDescription} value={this.state.description}/>
                <select className='priority' onChange={this.handleSelect} type='number' value={this.state.priority}>
                    <option className='low-priority' value='#29a329' style={{color:'#29a329'}}>Low</option>
                    <option className='mid-priority' value='#b3b300' style={{color:'#b3b300'}}>Medium</option>
                    <option className='high-priority' value='#e62e00' style={{color:'#e62e00'}}>Critical!!!</option>
                </select>
                <input type='checkbox' name='editToggle' onClick={this.handleToggle}/>
                <button type='submit' className='submit card' onClick={this.handleButtonClick} style={{justifyContent:'flex-start'}}>Add Item!</button>
            </div>
        );
    }
}
export default TodoForm;