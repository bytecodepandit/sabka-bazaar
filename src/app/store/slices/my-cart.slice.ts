import { createSlice } from "@reduxjs/toolkit";
import { ProductItem } from "app/core/models/interfaces/ProductItem";
import {
  addItemReducer,
  decreaseItemCountReducer,
  increaseItemCountReducer,
  removeItemReducer,
  setUserCartFromLocalStorage,
} from "../reducers/my-cart.reducer";
import { MY_CART } from "../slices/action.type";

export interface MyCartState {
  show: boolean;
  count: number;
  items: ProductItem[];
  totalAmount: number;
  showCartModal: boolean;
}

const initValue: MyCartState = {
  show: false,
  count: 0,
  items: [],
  totalAmount: 0,
  showCartModal: false,
};

const myCartSlice = createSlice({
  name: MY_CART,
  initialState: initValue,
  reducers: {
    setUserCart: setUserCartFromLocalStorage,
    addItem: addItemReducer,
    removeItem: removeItemReducer,
    increaseCount: increaseItemCountReducer,
    decreaseCount: decreaseItemCountReducer,
    toggleCartModal: (state) => {
      state.showCartModal = !state.showCartModal;
    },
    hideCartModal: (state) => {
      state.showCartModal = false;
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseCount,
  decreaseCount,
  toggleCartModal,
  setUserCart,
  hideCartModal,
} = myCartSlice.actions;

export default myCartSlice.reducer;
