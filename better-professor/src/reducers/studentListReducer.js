import * as actionTypes from '../actions';

const initialState = {
    students: [
        {
        name: 'Brainey',
        projects: 'Learning To Drive 101',
        date: 'July 6th, 2019',
        id: 0
      },
      {
        name: '2nd Student',
        projects: 'This is a Placeholder',
        date: 'July 7th, 2019',
        id: 1
      }
    ],
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