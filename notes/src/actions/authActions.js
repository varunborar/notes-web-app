import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './types';

const URL = "https://project-notes-server.herokuapp.com";
// const URL = "http://localhost:5000";

export const registerUser = (userData, history) =>
    dispatch => {
        axios.post(`${URL}/users/register`, userData)
            .then(res => {
                // console.log();
                history.push('login');   
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: GET_ERRORS,
                    payload: err
                })
            }
            );
    };


export const loginUser = userData => dispatch => {
    axios
        .post(`${URL}/users/login`, userData)
        .then(res => {

            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => {
            // console.log();
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        }
        );
};

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

export const setUserLoading = () => {
    return {
        type: USER_LOADING
    };
};

export const logoutUser = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(setCurrentUser({}));
};