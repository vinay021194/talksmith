import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Talksmith from "./components/auth/Talksmith"
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Carrier from "./components/auth/Carrier"
import Ratesheet from "./components/auth/ratesheet"
import CarrierDashboard from "./components/auth/CarrierDashboard"
import EditCarrier from "./components/auth/EditCarrier"
import Report from "./components/auth/report"
import Homepage from "./components/auth/homepage"
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/talksmith" component={Talksmith} />
            <Route exact path="/report"component={Report}/>
            <Route exact path="/homepage"component={Homepage}/>
            <Route exact path="/ratesheet" component={Ratesheet} />
            <Route exact path="/CarrierDashboard" component={CarrierDashboard} />
            <Route exact path="/carrier/edit/:id" component={EditCarrier} />

            <Switch>
              <PrivateRoute exact path="/Carrier" component={Carrier} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;