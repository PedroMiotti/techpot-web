// Redux
import { combineReducers } from "redux";

// Toplevel Slices
import authReducer from "./_auth";
import entitieReducer from "./_entities";
import uiReducer from "./_ui";

export default combineReducers({
  authenticate: authReducer,
  entitie: entitieReducer,
  ui: uiReducer,
});
