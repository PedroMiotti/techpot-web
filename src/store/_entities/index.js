// Redux
import { combineReducers } from "redux";

// _entities Slices
    import UserReducer from './User';
    import EventReducer from './Event';
    import GroupReducer from './Group';
    import PostReducer from './Post';

export default combineReducers({
    user: UserReducer,
    event: EventReducer,
    group: GroupReducer,
    post : PostReducer,
    
});
