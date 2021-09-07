import React, {Component} from 'react';
import Navbar from './AppComponents/Navbar';
import NoteBox from './AppComponents/NoteBox';
import SearchBox from './AppComponents/SearchBox';
import AddControl from './AppComponents/AddControl';

import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { getNotes } from '../../actions/noteActions';


class Notes extends Component{

    componentDidMount(){
       this.props.getNotes();
    //    console.log(this.props.note.notes);
    }

    render(){
        return( 
            <div className="app-container">
                <Navbar/>
                <SearchBox></SearchBox>
                <AddControl></AddControl>
                <NoteBox notes={this.props.note.notes}></NoteBox>
            </div>
        )
    } 
}

Notes.propTypes = {
    getNotes: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
    note: state.note,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { getNotes }
)(Notes);