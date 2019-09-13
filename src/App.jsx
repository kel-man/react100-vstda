import React, { Component } from 'react';
import ListItem from './listitem';
import axios from 'axios';
import TodoForm from './todoform';
// import customData from '../public/data.json'
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
class App extends Component {

  constructor(props){
    super(props);
    this.state={
      priority: '',
      place: '',
      name: '',
      description: 'This description passed from App',
      editable: '',
      removable: '',
      priorityArray: [],
      array: [3, 5, 6],
      items: []
    }
    this.handleSelect=this.handleSelect.bind(this);
    // this.handleSubmit=this.handleSubmit.bind(this);
    // this.handleNameChange=this.handleNameChange.bind(this);
    // this.handleDescriptionChange=this.handleDescriptionChange.bind(this); 
  }

  handleSelect(e){
    this.setState({
      priority: e.target.value,
      priorityArray: e.target.value
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
  
  componentDidMount(){
    // var json = require('./data.json');
    // $.getJSON("data.json")
    axios
    .get('./data.json')
    .then(response => response.data)
    // .then(data => console.log(data))
    .then(items => this.setState({ items }));
    // .catch(error => console.error(error));
  }

  
  render() {
    return (
      
      <div className='container'>
         <h1 style={{color:'black', padding:'20px'}}>Very Simple To-Do Application</h1>
         <hr style={{borderTop:'3px solid white'}}/>
        <TodoForm/>
        {this.state.items.map(item =>(
           <ListItem 
              key={item.id}
              title={item.title}
              description={item.description}
              priority={item.priority} />
        ))}
       </div>
    );
  }
  
  // renderList(){
    //   return(
      //     <ListItem/>
      //   )
      // }
    }
    
    export default App;
    