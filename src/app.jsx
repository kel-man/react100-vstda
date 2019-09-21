import React, { Component } from 'react';
import TodoForm from './todoform';
// import EditForm from './editform';
import ListBox from './listbox';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      list: []
    }
    this.addItem=this.addItem.bind(this);
    this.removeItem=this.removeItem.bind(this);
    // this.removeEvent=this.removeEvent.bind(this);
  }

  addItem(data){
    let tempItem = this.state.list;
    let newList = tempItem.concat([data]);
    this.setState({
      list: newList
    });
    console.log(newList);
  }
  
  removeItem(data){
    // let tempItem = this.state.list;
    let list = this.state.list;
    let location = this.state.list.findIndex(obj => obj.id === data);
    // tempItem.map(function(x) {return x.id; }).indexOf(data);
    // if(location<0){location=0}
    list.splice(location, 1);
    this.setState({
      list: list
    });
    console.log(location);
    console.log(this.state.list);
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
            <ListBox list={this.state.list} removeItem={this.removeItem}/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
    