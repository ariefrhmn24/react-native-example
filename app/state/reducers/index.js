import { combineReducers } from 'redux';
import tesReducer from './tesReducer';
 
// Combine all the reducers
const rootReducer = combineReducers({
  tesReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})
 
export default rootReducer;