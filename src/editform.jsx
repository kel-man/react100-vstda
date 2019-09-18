import React, {Component} from 'react';

export default class EditForm extends Component{
    constructor(props){
        super(props);
        this.state={
            isEditable: true,
            isBeingEdited: false,
            isSubmitted: false,
            isComplete: false
        }
    }
    render(){
        // if(this.isBeingEdited === false){
            return(
                <div className='button container'>
                    <input type='image' src='./editIcon.png' className='edit button'/>
                    <input type='image' src='./delete.png' className='remove button'/>
                </div>
            );
        }
    //     if(this.isBeingEdited === true, this.isEditable === true){
    //         return(
    //             <div>
    //                 <textarea></textarea>
    //             </div>
    //         )
    //     }
    // }
}