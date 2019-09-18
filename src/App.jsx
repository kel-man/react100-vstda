import React, { Component } from 'react';
import TodoForm from './todoform';
// import EditForm from './editform';
import ListBox from './listbox';

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
  }

  addItem(data){
    let tempItem = this.state.list;
    let newList = tempItem.concat([data]);
    this.setState({
      list: newList
    });
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
            <ListBox list={this.state.list}/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
    