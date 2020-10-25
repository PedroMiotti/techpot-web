// Redux
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "CreatePostModal",
  initialState: {
    isOpen: false,
  },
  reducers: {
    TOGGLE_MODAL: (modal, action) => {
      modal.isOpen = !modal.isOpen;
    },
  },
});

export const { TOGGLE_MODAL } = slice.actions;

export default slice.reducer;
