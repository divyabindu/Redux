import { combineReducers } from 'redux';
import FirstReducer from './FirstReducer';


const reducer = combineReducers ({
    credentials : FirstReducer
})

export default reducer