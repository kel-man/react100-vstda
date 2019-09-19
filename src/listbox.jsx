import React, { Component } from 'react';
import ListItem from './listitem';
import EditForm from './editform';

export default class ListBox extends Component{
    render(){
        let storage = this.props.list;
        return(
            <div className='list container' >
                <p className='list-title'>To Do: </p>
                {/* <div style={{padding: '15px', display:'flex', flexFlow:'row wrap', justifyContent:'space-between'}}> */}
                {/* </div> */}
                {storage.map((item, index) =>(
                    <ListItem 
                        key={index}
                        description={item.description}
                        priority={item.priority} 
                        removeItem={this.removeItem} />
                ))}
            </div>
        )
    }
}