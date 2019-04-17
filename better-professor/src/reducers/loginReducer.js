import * as actionTypes from '../actions';

const initialState = {
    token: [],
    loggingIn: false,
    creatingAccount: false,
    loginError: null
};

export const loginReducer = (state = initialState, action) => {
    switch ( action.type) {
        case actionTypes.LOGIN_START:
            return{
                ...state,
                token: [],
                loggingIn: true,
            }
        case actionTypes.LOGIN_SUCCESS:
            return{
                ...state,
                token: [action.payload],
                loggingIn: false,
            }
        case actionTypes.CREATE_ACCOUNT_START:
        
            return{
                ...state,
                creatingAccount: true,
            }
        case actionTypes.CREATE_ACCOUNT_SUCCESS:

            return{
                ...state,
                creatingAccount: false,
            }
        default:
            return state;
    }
}