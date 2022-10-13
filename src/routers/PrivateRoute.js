import { Route, Redirect } from "react-router-dom";
import useAuth from "../auth/useAuth";

// const user = null;
// const user = {id: 1, usuario: "Larnu"}

export default function PrivateRoute({ component: Component, ...rest }) {
  const auth = useAuth

   return (
    <Route {...rest}>
      {auth.user ? (<Component />) : (<Redirect to="/login" />)}
    </Route>
       
  );
}
