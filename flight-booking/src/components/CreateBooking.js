import React, { Component } from "react";
/* Import necessary modules and functions Here */

class CreateBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        customerId: "",
        flightId: "",
        noOfTickets: "",
      },
      formErrorMessage: {
        customerId: "",
        flightId: "",
        noOfTickets: ""
      },
      formValid: {
        customerId: false,
        flightId: false,
        noOfTickets: false,
        buttonActive: false
      }
    };
  }


  submitBooking = () => {
    /* your code goes here */
  };

  handleSubmit = event => {
    /* your code goes here */
  };

  handleChange = event => {
    /* your code goes here */
  };

  validateField = (fieldName, value) => {
    /* your code goes here */
  };

  render() {
    return (
      <div className="CreateBooking ">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <br />
            <div className="card">
              <div className="card-header bg-custom">
                <h3>Flight Booking Form</h3>
              </div>
              <div className="card-body">
                {/* Implement the JSX of CreateBooking component */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//Pass state props to this component and export it