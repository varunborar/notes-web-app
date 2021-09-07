import React, {Component} from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteNote, Delete, updateNote} from '../../../actions/noteActions';

class NoteCard extends Component{

    constructor(props){
        super();

        this.onStateChange = this.onStateChange.bind(this);
        this.state = {
            "_id": props.note._id,
            "title": props.note.title,
            "content": props.note.content,
            "user-id": props.note["user-id"],
            "labels": props.note.labels,
            "date": props.note.date,
            "textareaStyle": {
                height: "inherit",
                maxHeight: "inherit",
                minHeight: "inherit"
            }
        }
    }

    onStateChange = (event) => {
        // console.log(event.currentTarget.name, " ", event.currentTarget.value);
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value,
            "date": new Date()
        });
        this.setState({
            "textareaStyle": {
                height: "inherit",
                minHeight: event.currentTarget.scrollHeight,
                maxHeight: event.currentTarget.scrollHeight
            }
        })
    }

    componentDidMount(){
        this.setState({
            "textareaStyle": {
                minHeight: this.textarea.scrollHeight,
            }
        })
    }
    
    onKeyDown = (event) =>{
        this.setState({
            "textareaStyle": {
                minHeight: "inherit",
            }
        })
    }

    update = (event)=> {
        const note = {
            "_id": this.state._id,
            "title": this.state.title,
            "content": this.state.content,
            "user-id": this.state["user-id"],
            "labels": this.state.labels,
            "date": this.state.date
        }
        // console.log(note);
        this.props.updateNote(note);
    }

    delete = (event) => {
        this.props.Delete(this.props.note);
        this.props.deleteHandler();
        this.props.deleteNote(this.props.note);
    }

    parseDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString('default', {year: 'numeric', month: 'short', day: 'numeric' });
    }
        
    render(){
        return (
                <div className="note-card" onBlur={this.update}>
                    <input className="title" name="title" value={this.state.title} onChange={this.onStateChange} onBlur={this.update}></input>
                    <textarea 
                        className="content" 
                        style={this.state.textareaStyle} 
                        name="content" value={this.state.content} 
                        onChange={this.onStateChange} 
                        onBlur={this.update}
                        onKeyDown={this.onKeyDown}
                        ref={c => this.textarea = c}
                        >
                        </textarea>
                    <div className="date">
                        {this.parseDate(this.props.note.date)}
                        <button className="btn" onClick={this.delete} type ="button"><div className="fa fa-trash"></div></button>
                    </div>
                    
            </div>
            
        )
    } 
}

NoteCard.propTypes = {
    deleteNote: PropTypes.func.isRequired,
    Delete: PropTypes.func.isRequired,
    updateNote: PropTypes.func.isRequired
}

const mapStateToProps = state => ({

});

export default connect(
    mapStateToProps,
    { deleteNote, Delete, updateNote }
)(NoteCard);