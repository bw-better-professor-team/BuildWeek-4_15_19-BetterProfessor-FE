import { combineReducers } from 'redux';
import { studentListReducer } from './studentListReducer';
import { loginReducer } from './loginReducer';

export default combineReducers({
    studentListReducer,
    loginReducer
    
});
