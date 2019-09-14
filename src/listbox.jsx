import React, { Component } from 'react';
import ListItem from './listitem';
import EditForm from './editform';

export default class ListBox extends Component{
    render(){
        return(
            <div className='list card container' style={{display:'flex', flexFlow:'column wrap', justifyContent:'space-around', alignContent:'flex-start'}}>
                <p>This text to demonstrate placement This text to demonstrate wider placement This text to test if placement is fluid</p>
                <ListItem
                    key={'1'}
                    title={'Test ToDo #1'}
                    description={'This is a test description to hold the place of the ToDo item description.'}
                    priority={'3'}/>
                <ListItem
                    key={'2'}
                    title={'Test ToDo #2'}
                    description={'This is the second test placeholder description as I work out dataflow options'}
                    priority={'2'}/>
                {/* {this.state.items.map(item =>(
              <ListItem 
                key={item.id}
                title={item.title}
                description={item.description}
                priority={item.priority} />
            ))} */}
            </div>
        )
    }
}