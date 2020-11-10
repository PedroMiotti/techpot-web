// Redux
import { combineReducers } from "redux";

// Toplevel Slices
import entitieReducer from "./_entities";
import uiReducer from "./_ui";

export default combineReducers({
  entitie: entitieReducer,
  ui: uiReducer,
});
