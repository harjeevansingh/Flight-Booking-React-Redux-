import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import Evaluator from './components/evaluator';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Evaluator></Evaluator>
          <nav className="navbar navbar-expand-lg navbar-light  bg-custom">
            <span className="navbar-brand">Infy Airlines</span>
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
          </div>
        </div>
      </Router>
    );
  }
}

export default App;