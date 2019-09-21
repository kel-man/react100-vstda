import React, { Component } from 'react';
import ListItem from './listitem';
import EditForm from './editform';

export default class ListBox extends Component{
    render(){
        let storage = this.props.list;
        return(
            <div className='list container' >
                <p className='list-title'>To Do: </p>
                {this.props.list.map((item, index) =>(
                    <ListItem 
                        key={index}
                        description={item.description}
                        priority={item.priority} 
                        id={item.id}
                        list={storage}
                        removeItem={this.props.removeItem}
                         />
                ))}
            </div>
        )
    }
}