// Redux
import { combineReducers } from "redux";

// _entities Slices
    import UserReducer from './User'
    import EventReducer from './Event'

export default combineReducers({
    user: UserReducer,
    event: EventReducer,
    
});
