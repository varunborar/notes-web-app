import React, {Component} from 'react';
import AddNote from '../Common/AddNote';
import AddButton from '../Common/AddButton';


class AddControl extends Component{


    constructor(props){
        super();

        this.state ={
            showNewNote: false
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleNewNote = this.handleNewNote.bind(this);
    }

    handleNewNote = () => {
        this.setState({
            showNewNote: true
        })
    }

    handleDelete = () => {
        this.setState({
            showNewNote: false
        })
    }

    render(){
        var show;
        if(this.state.showNewNote)
            show = <AddNote deleteHandler={this.handleDelete}/>
        else
            show = <AddButton onClickHandler={this.handleNewNote}/>
        return( 
            <div>
                {show}
            </div>
        )
    } 
}
export default AddControl;