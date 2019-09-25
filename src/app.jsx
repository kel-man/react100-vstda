import React, { Component } from 'react';
import TodoForm from './todoform';
import ListBox from './listbox';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      list: [],
      mode: 'display',
      selectedItem: [],
      selectedId: '',
      alert: 'off'
    }
    this.addItem=this.addItem.bind(this);
    this.removeItem=this.removeItem.bind(this);
    this.editItem=this.editItem.bind(this);
    this.changeItem=this.changeItem.bind(this);
    this.findIndexById=this.findIndexById.bind(this);
  }

  findIndexById(data){
    for(let i=0; i<this.state.list.length; i++){
      if(this.state.list[i]['id'] === data){
        return i;
      }
    }
    return -1;
  }

  changeItem(item){
    let index = this.findIndexById(item.id);
    let newList = this.state.list;
    newList[index]= item;
    this.setState({
      list: newList,
      mode: 'display'
    });
  }

  editItem(id){
    let item = this.state.list.find(item => item.id===id);
    if(item.isEditable === true){
      this.setState({
        mode: 'edit',
        selectedId: id,
        selectedItem: item,
        alert: 'off'
      });
    } else {
      this.setState({
        alert: 'on'
      })
    }
  }
  
  addItem(data){
    let tempItem = this.state.list;
    let newList = tempItem.concat([data]);
    this.setState({
      list: newList
    });
  }
  
  removeItem(id){
    let newList = this.state.list.filter(item => item.id!==id)
    this.setState({
      list: newList
    })
  }
  

  render() {
    var alert;
    if (this.state.alert==='on'){
      alert=<div className='alert'>You do not have permission to access this item!</div>
    } else {
      alert=<div></div>
    }
    return (
      <div className='container' id='mainContainer'>
        <h1 style={{color:'black', padding:'20px'}}>Very Simple To-Do Application</h1>
        <hr style={{borderTop:'3px solid white'}}/>
        <div style={{display:'flex', flexFlow:'row wrap', justifyContent:'center'}}>
          <div className='container' style={{width:'32%', alignSelf:'left'}}>
            <TodoForm addItem={this.addItem} />
          </div>
          <div style={{width:'60%', alignSelf:'right'}}>
            <ListBox  list={this.state.list} 
                      removeItem={this.removeItem} 
                      mode={this.state.mode} 
                      editItem={this.editItem} 
                      selectedItem={this.state.selectedItem} 
                      changeItem={this.changeItem} 
                      selectedId={this.state.selectedId}
                      alert={this.state.alert}
                      completeItem={this.completeItem}
                      />
            {alert}
          </div>
        </div>
      </div>
    );
  }
}

export default App;