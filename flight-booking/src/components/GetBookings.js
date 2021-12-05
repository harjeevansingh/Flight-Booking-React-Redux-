import React, { Component } from "react";
/* Import necessary modules and functions Here */

class GetBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingId: "",
      updateStatus: false
    };
  }

 
  updateBooking = (bid) => { 
    /* your code goes here */
  }

  deleteBooking = (id) => { 
    /* your code goes here */
  }

  render() {

    return (
      <div className="GetBooking">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <br />
            <div className="card">
              <div className="card-header bg-custom">
                <h3 align="center">Booking Details</h3>
              </div>
              <div className="card-body">
                {/* Implement the JSX of GetBooking component here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//Pass state props to this component and export it