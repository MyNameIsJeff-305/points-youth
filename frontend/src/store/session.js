// frontend/src/store/session.js

import { csrfFetch } from './csrf';

//Constants
const GET_USER = 'session/GET_USER';
const ADD_USER = 'session/ADD_USER';
const REMOVE_USER = 'session/REMOVE_USER';
const LOGIN_USER = 'session/LOGIN_USER';
const LOGOUT_USER = 'session/LOGOUT_USER';
const SIGNUP_USER = 'session/SIGNUP_USER';

//Action Creators
const getUser = (user) => ({
    type: GET_USER,
    user,
});

const addUser = (user) => ({
    type: ADD_USER,
    user,
});

const removeUser = () => ({
    type: REMOVE_USER,
});

const loginUser = (user) => ({
    type: LOGIN_USER,
    user,
});

const logoutUser = () => ({
    type: LOGOUT_USER,
});

const signupUser = (user) => ({
    type: SIGNUP_USER,
    user,
});

//Thunks
export const restoreUser = () => async (dispatch) => {
    const response = await csrfFetch('/api/session');
    if (response.ok) {
        const user = await response.json();
        dispatch(getUser(user));
        return user;
    }
};

export const addUserThunk = (user) => async (dispatch) => {
    const response = await csrfFetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(user),
    });
    if (response.ok) {
        const newUser = await response.json();
        dispatch(addUser(newUser));
        return newUser;
    }
};

export const removeUserThunk = () => async (dispatch) => {
    const response = await csrfFetch('/api/users', {
        method: 'DELETE',
    });
    if (response.ok) {
        dispatch(removeUser());
    }
}

export const loginUserThunk = (user) => async (dispatch) => {
    const response = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify(user),
    });
    if (response.ok) {
        const loggedInUser = await response.json();
        dispatch(loginUser(loggedInUser));
        return loggedInUser;
    }
};

export const logoutUserThunk = () => async (dispatch) => {
    const response = await csrfFetch('/api/session', {
        method: 'DELETE',
    });
    if (response.ok) {
        dispatch(logoutUser());
    }
};

export const signupUserThunk = (user) => async (dispatch) => {
    const response = await csrfFetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify(user),
    });
    if (response.ok) {
        const newUser = await response.json();
        dispatch(signupUser(newUser));
        return newUser;
    }
};

//Reducer
const initialState = { user: null, allUsers: [] };

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return { ...state, user: action.user };
        case ADD_USER:
            return { ...state, user: action.user };
        case REMOVE_USER:
            return { ...state, user: null };
        case LOGIN_USER:
            return { ...state, user: action.user };
        case LOGOUT_USER:
            return { ...state, user: null };
        case SIGNUP_USER:
            return { ...state, user: action.user };
        default:
            return state;
    }
};

export default sessionReducer;