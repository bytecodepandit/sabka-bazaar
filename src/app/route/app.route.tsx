import MyCart from "app/modules/private/MyCart";
import Home from "app/modules/public/Home";
import Products from "app/modules/public/Products";
import Registration from "app/modules/public/Registration";
import SignIn from "app/modules/public/SignIn";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./app-route-labels";
import ProtectedRoute from "./ProtectedRoute";

export const AppRoute = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path={ROUTES.HOME} element={<Home />} />
    {/* <Route
      path={ROUTES.MY_CART}
      element={<ProtectedRoute Component={MyCart} />}
    /> */}
    <Route path={ROUTES.PRODUCTS} element={<Products />} />
    <Route path={ROUTES.REGISTRATION} element={<Registration />} />
    <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);
