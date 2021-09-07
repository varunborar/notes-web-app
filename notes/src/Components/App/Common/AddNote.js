import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNote } from '../../../actions/noteActions';


class AddNote extends Component {

    constructor(props) {
        super();

        this.onStateChange = this.onStateChange.bind(this);
        this.state = {
            "title": "",
            "content": "",
            "date": new Date(),
            "labels": ["All Notes"],
            "textareaStyle": {
                height: "inherit",
                maxHeight: "inherit",
                minHeight: "inherit"
            }
        }
    }

    onStateChange = (event) => {
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

    componentDidMount() {
        this.setState({
            "textareaStyle": {
                minHeight: this.textarea.scrollHeight,
            }
        })
    }

    onKeyDown = (event) => {
        this.setState({
            "textareaStyle": {
                minHeight: "inherit",
            }
        })
    }

    addNote = (event) => {
        const note = {
            "title": this.state.title,
            "content": this.state.content,
            "labels": this.state.labels,
            "date": this.state.date
        }
        // console.log(note);
        if (this.state.title || this.state.content) {
            this.props.addNote(note);
        } else {
            console.log("Cannot save empty note");
        }
        this.props.deleteHandler();
    }

    delete = (event) => {
        this.props.deleteHandler();
    }

    parseDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString('default', { year: 'numeric', month: 'short', day: 'numeric' });
    }

    render() {
        return (
            <div className="note-box">
                <div className="note-card" onBlur={this.update}>
                    <input
                        className="title"
                        name="title"
                        value={this.state.title}
                        onChange={this.onStateChange}
                        placeholder="Title"
                    ></input>
                    <textarea
                        className="content"
                        style={this.state.textareaStyle}
                        name="content" value={this.state.content}
                        onChange={this.onStateChange}
                        placeholder="Start writing..."
                        onKeyDown={this.onKeyDown}
                        ref={c => this.textarea = c}
                    >
                    </textarea>
                    <div className="date">
                        {this.parseDate(this.state.date)}
                        <button className="btn" onClick={this.delete} type="button"><div className="fa fa-trash"></div></button>
                        <button className="btn" onClick={this.addNote} type="button"><div className="fa fa-save"></div></button>
                    </div>
                </div>
            </div>

        )
    }
}

AddNote.propTypes = {
    addNote: PropTypes.func.isRequired
}
const mapStateToProps = state => ({

})

export default connect(
    mapStateToProps,
    { addNote }
)(AddNote);