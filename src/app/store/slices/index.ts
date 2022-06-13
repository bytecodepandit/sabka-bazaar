import { combineReducers } from "redux";
import { MY_CART, PRODUCT, TOGGLE_SIDEBAR } from "./action.type";
import toggleSidebarSlice from "./layout.slice";
import myCartSlice from "./my-cart.slice";
import productSlice from './products.slice';

export const rootReducer = combineReducers({
  [TOGGLE_SIDEBAR]: toggleSidebarSlice,
  [MY_CART]: myCartSlice,
  [PRODUCT]: productSlice
});
