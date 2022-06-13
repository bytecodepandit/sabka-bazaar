import { createSlice } from "@reduxjs/toolkit";
import { TOGGLE_SIDEBAR } from "../slices/action.type";

const initialState = {
  showSidebar: true,
};

export const toggleSidebarSlice = createSlice({
  name: TOGGLE_SIDEBAR,
  initialState,
  reducers: {
    toggleSidebar: (state, action) => {
      state.showSidebar = action.payload;
    },
  },
});


export const { toggleSidebar } = toggleSidebarSlice.actions;

export default toggleSidebarSlice.reducer;
