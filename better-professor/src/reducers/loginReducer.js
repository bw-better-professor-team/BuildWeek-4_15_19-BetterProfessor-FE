import * as actionTypes from '../actions';

const initialState = {
    loginData: [],
    loggingIn: false,
    loginError: null
};

export const loginReducer = (state = initialState, action) => {
    switch ( action.type) {
        case actionTypes.LOGIN_START:
            return{
                ...state,
                loggingIn: true,
            }
        case actionTypes.CREATE_ACCOUNT_START:
            return{
                ...state,
                
            }
        default:
            return state;
    }
}