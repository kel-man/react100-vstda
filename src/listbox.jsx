import React, { Component } from 'react';
import ListItem from './listitem';
import EditForm from './editform';

export default class ListBox extends Component{
    render(){
        return(
            <div>
                {this.state.items.map(item =>(
              <ListItem 
                key={item.id}
                title={item.title}
                description={item.description}
                priority={item.priority} />
            ))}
            </div>
        )
    }
}