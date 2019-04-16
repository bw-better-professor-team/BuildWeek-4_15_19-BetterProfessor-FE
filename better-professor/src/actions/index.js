import axios from 'axios';

export const  LOGIN_START = 'LOGIN_START';
export const  CREATE_ACCOUNT_START = 'CREATE_ACCOUNT_START';


export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
}

export const accountCreation = creds => dispatch => {
    dispatch({ type:CREATE_ACCOUNT_START });
}