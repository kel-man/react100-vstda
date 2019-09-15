import React, { Component } from 'react';
import ListItem from './listitem';
import EditForm from './editform';

export default class ListBox extends Component{
    // createTable(){
    //     let table = []
    //     for (let i=0; i<3 ; i++){
    //         let children = []
    //         for (let j=0; j<5; j++){
    //             console.log('exists')
    //             children.push(<td>('column ${j+1}'</td>)
    //         }
    //     }
    // }
    render(){
        let storage = this.props.list;
        return(
            <div className='list card container' style={{padding:'0px'}} >
                <p className='list-title'>To Do: </p>
                <div style={{padding: '15px', display:'flex', flexFlow:'column wrap', justifyContent:'space-between', alignContent:'middle'}}>
                    {/* <ListItem
                        key={'2'}
                        title={'Test ToDo #2'}
                        description={'This is the second test placeholder description as I work out dataflow options'}
                        priority={'#ff5050'}/> */}
                    {/* {this.props.renderList()} */}
                    
                </div>
                {/* <table>
                {this.createTable()}
                </table> */}
                {storage.map((item, index) =>(
                    <ListItem 
                        key={index}
                        title={item.title}
                        description={item.description}
                        priority={item.priority} />
                ))}
            </div>
        )
    }
}