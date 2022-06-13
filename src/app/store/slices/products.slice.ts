import { createSlice } from "@reduxjs/toolkit";
import { PRODUCT } from "./action.type";

const initialState = {
  selectedCategory: null,
};

const productSlice = createSlice({
  name: PRODUCT,
  initialState: initialState,
  reducers: {
    setProductFilter: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const {setProductFilter} = productSlice.actions;
export default productSlice.reducer;
