// Redux
import { combineReducers } from "redux";

// _entities Slices
    import UserReducer from './User'

export default combineReducers({
    user: UserReducer,
    
});
