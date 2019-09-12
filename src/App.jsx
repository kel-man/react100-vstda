import React, { Component } from 'react';
import ListItem from './listitem';
import axios from 'axios';
/**It is imperative to plan this out correctly. Everything about the structure must be premeditated
 * DO NOT RUSH
 * DO NOT PANIC
 * DO NOT GET FRUSTRATED
 * JUST GO PIECE BY PIECE
 * YOU GOT THIS 
 * Create an axios structure for writing and pulling each item from JSON file for ToDos
 * the rest of the structure for this program is just a combination of TopSpots and Change Calculator, with a ListItem component fit within a couple containers using the json information to populate each element
 */

//  const TodoForm = ({addTodo}) => {
//    let input;
//    return (
//      <div>
//        input ref={node => {
//          input = node;
//       }}/>
//       <button onClick={() => {
//         addTodo(input.value);
//         input.value = '';
//       }}>
//         +
//       </button>
//      </div>
//    );
//  };
class TodoForm extends Component {
  handleSubmit(e){
    this.setState({
      state: form
    })
  }
  render(){
    return(
      <div>
        <form>
          <h2>New Item: </h2>
          <input type='text' name='title' className='title'/>
          <input type='text' name='description' className='description input card'/>
        </form>
      </div>
    );
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      priority:'',
      place:'',
      name:'',
      details:'',
      editable:'',
      removable:''
    }
    this.handleSelect=this.handleSelect.bind(this);
    // this.handleSubmit=this.handleSubmit.bind(this);
    // this.handleNameChange=this.handleNameChange.bind(this);
    // this.handleDescriptionChange=this.handleDescriptionChange.bind(this); 
  }

  // compontentWillMount(){
  //   axios
  //   .get('filenamegoeshere.json')
  //   .then(response => list.data)
  //   .then()
  // }
  
  // getInitialState: function(){
  //   return{
  //     'city': '',
  //     'zip': '',
  //     'temp': ''
  //   }
  // }

  handleSelect(e){
    this.setState({
      priority: e.target.value
    });
  }
  
  handleNameChange(e){
    this.setState({
      name: e.target.value
    })
  }
  
  handleDescriptionChange(e){
    this.setState({
      description: e.target.value
    })
  }
  
  /* handleSubmit(e){
    e.preventDefault();
    let x = Number(this.state.place);
    let y = x + 1;
      let newItem = {
        priority: this.state.priority,
        name: this.state.name,
        details: this.state.details,
        editable: this.state.editable,
        removable: this.state.removable
        place: y;
      }
      this.setState({
        items: newItem
      });
  }*/
  
  render() {
    return (
      
       <div className='container' style={{display:'flex', flexFlow:'column wrap', justifyContent:'space-around', alignContent:'space-around', height:'100%'}}>
         <TodoForm/>
         <ListItem/>
         <ListItem/>
         <ListItem/>
         <h1 style={{color:'black', padding:'20px'}}>Very Simple To-Do Application</h1>
         <hr style={{borderTop:'3px solid white'}}/>
         <form className='input form card'>
          <div className='input card' style={{display:'flex', flexFlow:'row wrap', alignSelf:'space-around', alignContent:'space-around', height:'100%'}}>
            <div className='inputBox' style={{width:'30%', justifyContent:'left'}}>
              <h3 className='box-title' style={{color:'black', backgroundColor:'#f5f5f5', alignContent:'left'}}>Add New Todo: I want to...</h3>
              <input className='create-todo-text card'/>
              <select className='priority card' onChange={this.handleSelect} type='number' value={this.state.priority}>
                <option className='low-priority card' value='1' style={{}}>Low</option>
                <option className='mid-priority card' value='2' style={{}}>Medium</option>
                <option className='high-priority card' value='3' style={{}}>Critical!!!</option>
              </select>
              <button type='submit' className='submit' onClick={this.handleSubmit} />
            </div>
         </div> 
        </form>
       </div>
    );
  }
}

export default App;
