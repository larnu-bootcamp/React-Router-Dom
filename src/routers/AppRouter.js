import { BrowserRouter, Route, Switch,} from "react-router-dom";
import Navbar from "../components/Navbar";
import DashboardPage from "../pages/DashboardPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "./PrivateRoute"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
       <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          {/* <Route exact path="/dashboard" component={DashboardPage} /> */}
          <PrivateRoute exact path="/dashboard" component={DashboardPage} />
      </Switch>
    </BrowserRouter>
  );
}


