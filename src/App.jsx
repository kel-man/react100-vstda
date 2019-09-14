import React, { Component } from 'react';
import ListItem from './listitem';
// import axios from 'axios';
import TodoForm from './todoform';
// import EditForm from './editform';
import ListBox from './listbox';
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
    // axios
    // .get('./data.json')
    localStorage.setItem('myData', '"This is test data"');
    localStorage
    .getItem('myData');
    response => response.data;
    items => this.setState({ items });
    console.log(myData);
  }

  
  render() {
    return (
      <div className='container' id='mainContainer'>
        <h1 style={{color:'black', padding:'20px'}}>Very Simple To-Do Application</h1>
        <hr style={{borderTop:'3px solid white'}}/>
        <div style={{display:'flex', flexFlow:'row wrap', justifyContent:'center'}}>
          <div className='container' style={{width:'28%', alignSelf:'left'}}>
            <TodoForm/>
          </div>
          <div style={{width:'60%', alignSelf:'right'}}>
            <ListBox></ListBox>
          </div>
        </div>
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
    