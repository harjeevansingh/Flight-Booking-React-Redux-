import React, { Component } from "react";
import { connect } from "react-redux";
import { handleDeleteBooking, handleGetBookings } from "../actions/Bookings";
/* Import necessary modules and functions Here */

import { Redirect } from "react-router-dom";

class GetBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingId: "",
      updateStatus: false
    };
  }

  fetchBooking = () => {
    handleGetBookings(this.props.dispatch);
  }

  componentDidMount = ()=>{
    this.fetchBooking();
  }
 
  updateBooking = (bid) => { 
    /* your code goes here */
    this.setState({bookingId:bid, updateStatus:true});  // add it to button for update  // Should invoke some action


  }

  deleteBooking = (id) => { 
    /* your code goes here */
    handleDeleteBooking(this.props.dispatch, id); // invoked on the click of Cancel
  }

  render() {
    var redirect = null;

    if (this.state.updateStatus) {
      redirect = <Redirect to={"/updateBooking/" + this.state.bookingId} push />;
    }

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
                {this.props.Messages.errorMessage!=="" ?  
                  <span className="text-danger">{this.props.Messages.errorMessage}</span> :
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Customer Id</th>
                        <th>Booking Id</th>
                        <th>Total Tickets</th>
                        <th>Total Cost</th>
                        <th colSpan="2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.AllBookings!==null? this.props.AllBookings.map((booking)=>{
                        return(
                          <tr>
                            <td>{booking.customerId}</td>
                            <td>{booking.bookingId}</td>
                            <td>{booking.noOfTickets}</td>
                            <td>{booking.bookingCost}</td>
                            <td><button className="btn btn-success" onClick={()=>{this.updateBooking(booking.bookingId)}}>Update</button></td>
                            <td><button className="btn btn-danger" onClick={()=>{this.deleteBooking(booking.bookingId)}}>Cancel</button></td>
                          </tr>
                        )
                      }) : null }
                    </tbody>
                  </table>
                }
                {redirect}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return({
    AllBookings:state.AllBookings,
    Messages:state.Messages
  })
}

//Pass state props to this component and export it
export default connect(mapStateToProps)(GetBooking);