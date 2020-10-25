// Redux
import { combineReducers } from "redux";

// UI Slices
    import CreatePostModalReducer from './CreatePostModal'

export default combineReducers({
  CreatePostModal: CreatePostModalReducer,
});
