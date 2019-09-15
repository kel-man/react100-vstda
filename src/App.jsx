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
      isEditable: '',
      removable: '',
      priorityArray: [],
      list: []
    }
    this.addItem=this.addItem.bind(this);
    // this.renderList=this.renderList.bind(this);
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
  addItem(data){
    let tempItem = this.state.list;
    let newList = tempItem.concat([data]);
    this.setState({
      list: newList
    });
  }
  // renderList(){
  //   let storage = this.state.list;
  //   return(
  //     <div>
  //   {storage.map(item, index =>(
  //     <ListItem 
  //         key={index}
  //         title={item.title}
  //         description={item.description}
  //         priority={item.priority} />
  // ))}
  // </div>
  //   )
  // }
  
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
            <ListBox list={this.state.list}/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
    