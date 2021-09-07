import {SET_NOTES, ADD_NOTE, UPDATE_NOTE, DELETE_NOTE } from "../actions/types";

const initialState = {
    notes: []
}

export default function (state=initialState, action)
{
    switch (action.type) {
        case SET_NOTES:
            return {
                ...state,
                notes: action.payload
            };
        
        case ADD_NOTE:
            state.notes.unshift(action.payload)
            return {
                ...state,
                notes: state.notes
            }
        
        case UPDATE_NOTE:
            const updatedIndex = state.notes.findIndex((note)=>{
                return note._id === action.payload._id
            })
            state.notes[updatedIndex] = action.payload;
            return {
                ...state,
                notes: state.notes
            }
        
        case DELETE_NOTE:
            const deletedIndex = state.notes.findIndex((note)=>{
                return note._id === action.payload._id
            })
            if(deletedIndex !== -1) state.notes.splice(deletedIndex, 1)
            return {
                ...state
            }
        default:
            return state;
    }
}