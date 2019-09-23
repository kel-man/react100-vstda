import React, { Component } from 'react';
import ListItem from './listitem';
import EditForm from './editform';

export default class ListBox extends Component{


    render(){
        var display;
        if (this.props.mode === 'edit'){
          display = <EditForm changeItem={this.props.changeItem} 
                              item={this.props.item} 
                              id={this.props.id}
                              />
        } else if (this.props.mode === 'display' && this.props.alert === 'on') {
          display = this.props.list.map((item, index) =>(
            <ListItem 
                key={index}
                description={item.description}
                priority={item.priority} 
                id={item.id}
                removeItem={this.props.removeItem}
                editItem={this.props.editItem}
                />
            ));
        }
        else if (this.props.mode === 'display' && this.props.alert === 'off') {
          display = this.props.list.map((item, index) => (
            <ListItem
                key={index}
                description={item.description}
                priority={item.priority}
                id={item.id}
                removeItem={this.props.removeItem}
                editItem={this.props.editItem}
                />
          ));
        }
        return(
            <div className='list container' >
                <p className='list-title'>To Do: </p>
                {display}
                {/* {this.props.list.map((item, index) =>(
                    <ListItem 
                        key={index}
                        description={item.description}
                        priority={item.priority} 
                        id={item.id}
                        list={storage}
                        removeItem={this.props.removeItem}
                         />
                ))} */}
            </div>
        )
    }
}