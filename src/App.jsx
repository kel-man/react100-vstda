import React, { Component } from 'react';
// import axios from 'axios';
import TodoForm from './todoform';
// import EditForm from './editform';
import ListBox from './listbox';
/**It is imperative to plan this out correctly. Everything about the structure must be premeditated
 * DO NOT RUSH
 * DO NOT PANIC
 * DO NOT GET FRUSTRATED
 * JUST GO PIECE BY PIECE
 * YOU GOT THIS 
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
      list: []
    }
    this.addItem=this.addItem.bind(this);
  }
  // componentDidMount(){
  //   // axios
  //   // .get('./data.json')
  //   localStorage.setItem('myData', '"This is test data"');
  //   localStorage
  //   .getItem('myData');
  //   response => response.data;
  //   items => this.setState({ items });
  //   console.log(myData);
  // }
  addItem(item){
    var tempItem = this.state.list;
    var newList = tempItem.concat(item);
    console.log(newList);
    this.setState({
      list: newList
    })
    // var newState = React.addons.update(this.state, {
    //   list: {
    //     $push: [item]
    //   }
    // });
    // this.setState(newState);
   
    // this.setState({
    //   list: this.state.list.concat([item])
    // });
  }
  
  render() {
    return (
      <div className='container' id='mainContainer'>
        <h1 style={{color:'black', padding:'20px'}}>Very Simple To-Do Application</h1>
        <hr style={{borderTop:'3px solid white'}}/>
        <div style={{display:'flex', flexFlow:'row wrap', justifyContent:'center'}}>
          <div className='container' style={{width:'32%', alignSelf:'left'}}>
            <TodoForm addItem={this.addItem} />
          </div>
          <div style={{width:'60%', alignSelf:'right'}}>
            <ListBox/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
    