// Redux
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

//Reducer
import reducer from "./reducer";

// Middleware
// import api from "./middleware/api";

export default function () {
  return configureStore({
    reducer,
    // middleware: [...getDefaultMiddleware(), api],
  });
}
