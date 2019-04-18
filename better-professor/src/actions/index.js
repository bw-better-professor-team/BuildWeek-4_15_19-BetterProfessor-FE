import axios from 'axios';

export const  LOGIN_START = 'LOGIN_START';
export const  LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const  CREATE_ACCOUNT_START = 'CREATE_ACCOUNT_START';
export const  STUDENT_ADDING = 'STUDENT_ADDING';
export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS';
export const CREATE_MESSAGE_START = 'CREATE_MESSAGE_START';
export const CREATE_ACCOUNT_FAILURE = 'CREATE_ACCOUNT_FAILURE';
export const MESSAGE_CREATED = 'MESSAGE_CREATED';
export const STUDENT_DATA_GRAB_SUCCESS = 'STUDENT_DATA_GRAB_SUCCESS';




export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios.post('https://betterprofessor.herokuapp.com/api/login', creds)
    .then(res => {
        localStorage.setItem('token',  res.data.token)
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.token})
        
    }
    )
}

export const studentDataGrab = () => dispatch => {
    dispatch({ type:STUDENT_ADDING})
    return axios.get('https://betterprofessor.herokuapp.com/api/professor-student-info')
        .then(res => {
            dispatch({ type: STUDENT_DATA_GRAB_SUCCESS, payload: res.data})
        })
}

export const accountCreation = creds => dispatch => {
    dispatch({ type:CREATE_ACCOUNT_START });
    return axios.post('https://betterprofessor.herokuapp.com/api/register', creds)

    .then(res => {
        console.log(res)
        dispatch({ type: CREATE_ACCOUNT_SUCCESS, payload: res.data.payload })
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: CREATE_ACCOUNT_FAILURE, payload: err})
    })
}

export const studentAddition = info => dispatch => {
    dispatch({ type: STUDENT_ADDING });
}

export const createAccount = creds => dispatch => {

}

export const creatingReminder = creds => dispatch => {
    dispatch({ type: CREATE_MESSAGE_START });
    return axios.post('https://betterprofessor.herokuapp.com/api/login', creds)
    .then(res => {
        dispatch({ type: MESSAGE_CREATED, payload: res.data.token})
    }
    )
}