import React, { Component } from "react";
import { handleFetchFlightIds, handleSubmitBooking, setMessageAction } from "../actions/Bookings";
/* Import necessary modules and functions Here */

import {connect} from 'react-redux';

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

  fetchFlightIds = ()=>{
    handleFetchFlightIds(this.props.dispatch);
  }

  componentDidMount = ()=>{
    this.fetchFlightIds();    
  }

  resetMessages = ()=>{
    this.props.dispatch(setMessageAction("", ""));
  }

  componentWillUnmount = ()=>{
    this.resetMessages();
  }

  submitBooking = () => {
    /* your code goes here */
    handleSubmitBooking(this.props.dispatch, this.state.form);
  };

  handleSubmit = event => {
    /* your code goes here */
    event.preventDefault();
    this.submitBooking();
  };

  handleChange = event => {
    /* your code goes here */
    const value = event.target.value;
    const name = event.target.name;
    this.setState({form:{...this.state.form, [name]:value}});
    this.validateField(name, value);
  };

  validateField = (fieldName, value) => {
    /* your code goes here */
    switch(fieldName){
      case "customerId":
        if(value==""){  // Check another comparison method or operator
          this.setState({formErrorMessage:{...this.state.formErrorMessage, customerId:"field required"}});     // may need to add this.state before ...formErrorMessage
          this.setState({formValid:{...this.state.formValid,customerId:false}});
        }else if(!/^[A-Z][\d]{4}$/.test(value)){
          this.setState({formErrorMessage:{...this.state.formErrorMessage, customerId:"Customer Id must start with an alphabet followed by 4 digits"}});
          this.setState({formValid:{...this.state.formValid,customerId:false}});
        }else{
          this.setState({formErrorMessage:{...this.state.formErrorMessage, customerId:""}});
          this.setState({formValid:{...this.state.formValid,customerId:true}});
        }
        break;
      case "noOfTickets":
        if(value==""){  // Check another comparison method or operator
          this.setState({formErrorMessage:{...this.state.formErrorMessage, noOfTickets:"field required"}});     // may need to add this.state before ...formErrorMessage
          this.setState({formValid:{...this.state.formValid,noOfTickets:false}});
        }else if(value<1 || value>10){
          this.setState({formErrorMessage:{...this.state.formErrorMessage, noOfTickets:"No of tickets should be greater than 0 and less than 10"}});     // may need to add this.state before ...formErrorMessage
          this.setState({formValid:{...this.state.formValid,noOfTickets:false}});
        } else{
          this.setState({formErrorMessage:{...this.state.formErrorMessage, noOfTickets:""}});
          this.setState({formValid:{...this.state.formValid,noOfTickets:true}});
        }
        break;
      case "flightId":
        if(value==""){  // Check another comparison method or operator
          this.setState({formErrorMessage:{...this.state.formErrorMessage, flightId:"field required"}});     // may need to add this.state before ...formErrorMessage
          this.setState({formValid:{...this.state.formValid,flightId:false}});
        }else{
          this.setState({formErrorMessage:{...this.state.formErrorMessage, flightId:""}});
          this.setState({formValid:{...this.state.formValid,flightId:true}});
        }
        break;
    }
    var formValid = this.state.formValid;
    formValid = {...formValid, buttonActive:(formValid.customerId && formValid.noOfTickets && formValid.flightId)};
    this.setState({formValid:formValid});

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
                <form className="form" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="customerId">Customer Id</label>
                    <input type="text" name="customerId" value={this.state.form.customerId} onChange={this.handleChange} 
                      placeholder="e.g.-P1001" className="form-control"></input>
                    <span className="text-danger">{this.state.formErrorMessage.customerId}</span>
                  </div>
                  <div className="form-group">
                    <label htmlFor="flightId">Flight Id</label>
                    <select type="text" name="flightId" value={this.state.form.flightId} onChange={this.handleChange} className="form-control">
                      <option value="" disabled>--Select Flight--</option>
                      {this.props.FlightIds.map((flightId)=>{
                        return(
                          <option value={flightId}>{flightId}</option>
                        )
                      })}
                    </select>
                    <span className="text-danger">{this.state.formErrorMessage.flightId}</span>
                  </div>
                  <div className="form-group">
                    <lable htmlFor="noOfTickets">Number of tickets</lable>
                    <input type="number" min="1" max="10" value={this.state.form.noOfTickets} onChange={this.handleChange} name="noOfTickets"
                      className="form-control" placeholder="min-1 max-10"></input>
                      <span className="text-danger">{this.state.formErrorMessage.noOfTickets}</span>
                  </div>
                  <button type="submit" className="btn btn-primary" disabled={!this.state.formValid.buttonActive}>Book Flight</button>
                  <span className="text-success">{this.props.Messages.successMessage}</span>
                  <span className="text-danger">{this.props.Messages.errorMessage}</span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){    // check the way of setting the state
  return({
    FlightIds: state.FlightIds,
    Messages: state.Messages
  })
}

//Pass state props to this component and export it
export default connect(mapStateToProps)(CreateBooking);
