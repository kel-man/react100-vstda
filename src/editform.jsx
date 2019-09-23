import React, {Component} from 'react';
import ListBox from './listbox';

export default class EditForm extends Component{
 
    render(){
            return(
                <div>
                    <div>
                        <h2>{this.props.item}</h2>
                    </div>
                    <div className='button container'>
                        <button onClick={() => {this.props.changeItem(this.props.item)}}/>
                    </div>
                </div>
            );
        }
}