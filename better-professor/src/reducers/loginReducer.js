import * as actionTypes from '../actions';

const initialState = {
    token: [],
    loggingIn: false,
    creatingAccount: false,
    accountCreationError: null,
    loginError: null,

};

export const loginReducer = (state = initialState, action) => {
    switch ( action.type) {
        case actionTypes.LOGIN_START:
            return{
                ...state,
                token: [],
                loggingIn: true,
                loginError: null,
                creatingAccount: false,
                accountCreationError: null,
            }
        case actionTypes.LOGIN_SUCCESS:
            return{
                ...state,
                token: [action.payload],
                loggingIn: false,
                loginError: null,
                creatingAccount: false,
                accountCreationError: null,
            }
        case actionTypes.LOGIN_FAILURE:
            return{
                ...state,
                token: [action.payload],
                loggingIn: false,
                loginError: true,
                creatingAccount: false,
                accountCreationError: null,
            }
        case actionTypes.CREATE_ACCOUNT_START:
        
            return{
                ...state,
                creatingAccount: true,
                accountCreationError: null,
                loggingIn: false,
                loginError: null,
            }
        case actionTypes.CREATE_ACCOUNT_SUCCESS:

            return{
                ...state,
                creatingAccount: false,
                accountCreationError: null,
                loggingIn: false,
                loginError: null,
            }
        case actionTypes.CREATE_ACCOUNT_FAILURE:

            return{
                ...state,
                creatingAccount: false,
                accountCreationError: true,
                loggingIn: false,
                loginError: null,
            }
        default:
            return state;
    }
}