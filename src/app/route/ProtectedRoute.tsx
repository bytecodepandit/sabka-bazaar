import { Navigate, Route , Outlet} from "react-router-dom";
import { ROUTES } from "./app-route-labels";

const ProtectedRoute = ({  Component }: any) => {
    return false ? <Component /> : <Navigate to={`/${ROUTES.SIGN_IN}`} />
  };

export default ProtectedRoute;
