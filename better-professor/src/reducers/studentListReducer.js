import * as actionTypes from '../actions';

const initialState = {
    students: [
        {
        name: 'Brainey',
        projects: 'Learning To Drive 101',
        date: 'July 6th, 2019'
      }
    ],
    gettingStudents: false,
    updatingStudents: false,
    creatingStudents: false,
    deletingStudents: false,
    error: null

};

export const studentListReducer = (state = initialState, action) => {
    switch ( action.type) {

        
        default:
            return state;
    }
}