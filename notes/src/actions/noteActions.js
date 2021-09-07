import axios from 'axios';

import { GET_ERRORS, SET_NOTES, ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from './types';


const URL = "https://project-notes-server.herokuapp.com";
// const URL = "http://localhost:5000";


export const getNotes = () => dispatch => {
    axios.get(`${URL}/notes/`)
    .then(res => {
        const notes = res.data;
        dispatch(setNotes(notes));
    })
}

export const setNotes = (notes)=>{
    return {
        type: SET_NOTES,
        payload: notes
    };
}

export const addNote = (note) => dispatch => {
    axios.post(`${URL}/notes/add`, note)
    .then(res => {
        dispatch(add(res.data));
    })
    .catch(
        err => {
            // console.log();
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        }
    );
}

export const add = (note) => {
    return {
        type: ADD_NOTE,
        payload: note
    }
}

export const updateNote = (note) => dispatch => {
    axios.put(`${URL}/notes/update/${note._id}`, note)
    .then(res => {
        // console.log(note);
        dispatch(update(note))
    })
    .catch(
        err => {
            // console.log();
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        }
    );
}

export const update = (note) => {
    return {
        type: UPDATE_NOTE,
        payload: note
    }
}

export const deleteNote = (note) => dispatch =>{
    axios.delete(`${URL}/notes/delete/${note._id}`)
    .then(res => {
        // dispatch(Delete(note))
    })
    .catch(
        err => {
            // console.log();
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        }
    );
}

export const Delete = (note)=> {
    return {
        type: DELETE_NOTE,
        payload: note
    }
}