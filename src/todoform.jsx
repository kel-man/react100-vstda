import React, {Component} from 'react'

class TodoForm extends Component{
    constructor(props){
        super(props);
        this.state={
            item:[],
            title:'',
            description:'',
            editable:false,
            priority:'1'
        }
        this.handleTitle=this.handleTitle.bind(this);
        this.handleDescription=this.handleDescription.bind(this);
        this.handleSelect=this.handleSelect.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        let item = {
            title: this.state.title,
            description: this.state.description,
            priority: this.state.priority
        }
        this.props.addItem(item);
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

    render(){
        return(
        <div className='form card' style={{display:'flex', alignContent:'space-around', justifyContent:'space-around'}}>
            <form style={{display:'flex', flexFlow:'column nowrap', alignContent:'space-around'}}>
                <h4 className='card-header' style={{color:'black'}}>New Item: </h4>
                <input type='text' name='title' className='title' placeholder='TITLE' onChange={this.handleTitle} value={this.state.title}/>
                <input type='text' name='description' className='description input card' placeholder='DESCRIPTION' onChange={this.handleDescription} value={this.state.description}/>
                <select className='priority card' onChange={this.handleSelect} type='number'>
                    <option className='low-priority' value='1' style={{backgroundColor:'green'}}>Low</option>
                    <option className='mid-priority' value='2' style={{color:'yellow'}}>Medium</option>
                    <option className='high-priority' value='3' style={{color:'red'}}>Critical!!!</option>
                </select>
                <input type='checkbox' name='isEditable'/>
                <button type='submit' className='submit card' onClick={this.handleSubmit} style={{justifyContent:'flex-start'}}>Submit!</button>
            </form>
            </div>
        );
    }
}

export default TodoForm;