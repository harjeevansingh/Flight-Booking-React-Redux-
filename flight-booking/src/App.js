import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route, Redirect} from "react-router-dom";
import CreateBooking from "./components/CreateBooking";
import GetBookings from "./components/GetBookings";
import updateBooking from "./components/updateBooking"

import Evaluator from './components/evaluator';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Evaluator></Evaluator>
          <nav className="navbar navbar-expand-lg navbar-light  bg-custom">
            <span className="navbar-brand">WorldGo Airlines</span>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/bookFlight">
                  Book Flight
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/viewBookings">
                  View Bookings
                </Link>
              </li>
              
            </ul>
          </nav>
          <div>
            {/* Implement the routing here */}
            <Switch>
              <Route path="/bookFlight" component={CreateBooking}/>
              <Route path="/viewBookings" component={GetBookings}/>
              <Route path="/updateBooking/:bookingId" component={updateBooking}/>
              <Route path="/" render={()=><Redirect to="/bookFlight"/>}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;