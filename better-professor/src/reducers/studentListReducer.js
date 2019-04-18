import * as actionTypes from '../actions';


const initialState = {
    students: [],
    gettingStudents: false,
    addingStudent: false,
    updatingStudents: false,
    deletingStudents: false,
    creatingReminder: false,
    error: null

};

export const studentListReducer = (state = initialState, action) => {
    switch ( action.type) {
        case actionTypes.STUDENT_ADDING:
        return {
            ...state,
            addingStudent: true,

        }
        case actionTypes.STUDENT_DATA_GRAB_SUCCESS:
        return {
            ...state,
            students: action.payload
        }
        case actionTypes.CREATE_MESSAGE_START:
        return {
            ...state,
            creatingReminder: true,

        }
        case actionTypes.MESSAGE_CREATED:
        return {
            ...state,
            creatingReminder: false,

        }
        
        default:
            return state;
    }
}