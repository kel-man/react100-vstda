import React, { Component } from 'react';
import ListItem from './listitem';

export default class ListBox extends Component{


    render(){
        var RightComponent;
        if (this.props.mode === 'edit'){
          RightComponent = <EditForm/>
        } else {
          RightComponent = this.props.list.map((item, index) =>(
            <ListItem 
                key={index}
                description={item.description}
                priority={item.priority} 
                id={item.id}
                removeItem={this.props.removeItem}
                 />
            ));
        }
        return(
            <div className='list container' >
                <p className='list-title'>To Do: </p>
                {RightComponent}
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