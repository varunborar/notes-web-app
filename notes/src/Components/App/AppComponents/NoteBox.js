import React, {Component} from 'react';
import NoteCard from '../Common/NoteCard';

class NoteBox extends Component{

    constructor(props){
        super();
        //console.log(props.notes[0]["_id"]);

        this.deleteHandler = this.deleteHandler.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
    }

    deleteHandler = ()=>{
        // console.log("a note was deleted");
        this.forceUpdate();
    }

    updateHandler = ()=>{
        console.log("A note update was requested");
        this.forceUpdate();
    }

    render(){
        return( 
            <div className = "note-box">
                {this.props.notes.map(note => {
                    return( 
                    <NoteCard 
                    note= {note} 
                    key= {note._id} 
                    deleteHandler={this.deleteHandler} 
                    updateHandler={this.updateHandler}    
                    />
                    )
                })}
            </div>
        )
    } 
}
export default NoteBox;