import axios from 'axios';

export const  LOGIN_START = 'LOGIN_START';
export const  LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const  CREATE_ACCOUNT_START = 'CREATE_ACCOUNT_START';
export const  STUDENT_ADDING = 'STUDENT_ADDING';
export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS'



export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    axios.post('https://betterprofessor.herokuapp.com/api/login', creds)
    .then(res => {
        localStorage.setItem('token',  res.data.token)
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.token})
    }
    )
}

export const accountCreation = creds => dispatch => {
    dispatch({ type:CREATE_ACCOUNT_START });
    axios.post('https://betterprofessor.herokuapp.com/api/register', creds)
    .then(res => {
        console.log(res)
        dispatch({ type: CREATE_ACCOUNT_SUCCESS, payload: res.data.payload })
    });
}

export const studentAddition = info => dispatch => {
    dispatch({ type: STUDENT_ADDING });
}

export const createAccount = creds => dispatch => {

}