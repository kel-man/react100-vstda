import React, {Component} from 'react'

class TodoForm extends Component{
    handleSubmit(e){
        this.setState({
            list: e.target.value
        });
        localStorage.setItem('myData', e.target.value); 
        console.log('myData');
    } 

    

    render(){
        return(
        <div className='form card' style={{display:'flex', justifySelf:'left'}}>
            <form style={{display:'flex', flexFlow:'column nowrap', justifyContent:'space-around left', alignContent:'space-around', height:'100%'}}>
                <h2 style={{color:'black'}}>New Item: </h2>
                <input type='text' name='title' className='title' placeholder='Create To-Do Item...'/>
                <input type='text' name='description' className='description input card' placeholder='To-Do Description...'/>
                <select className='priority card' onChange={this.handleSelect} type='number'>
                    <option className='low-priority card' value='1' style={{backgroundColor:'green'}}>Low</option>
                    <option className='mid-priority card' value='2' style={{color:'yellow'}}>Medium</option>
                    <option className='high-priority card' value='3' style={{color:'red'}}>Critical!!!</option>
                </select>
                <button type='submit' className='submit card' onClick={this.handleSubmit} style={{justifyContent:'right'}}>Submit!</button>
            </form>
            </div>
        );
    }

}

export default TodoForm;