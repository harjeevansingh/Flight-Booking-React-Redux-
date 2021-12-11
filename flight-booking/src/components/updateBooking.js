import React, { Component } from "react";
import { connect } from "react-redux";
import { handleUpdateBooking } from "../actions/Bookings";
/* Import necessary modules here */

class UpdateBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                bookingId: "",
                noOfTickets: ""
            },
            formErrorMessage: {
                bookingId: "",
                noOfTickets: ""
            },
            formValid: {
                bookingId: true,
                noOfTickets: false,
                buttonActive: false
            },
            id: this.props.match.params.bookingId
        };
    }

    componentDidMount = ()=>{
        this.setState({form:{...this.state.form, bookingId:this.props.match.params.bookingId}});
    }



    updateBooking = () => {
        /* your code goes here */
        handleUpdateBooking(this.props.dispatch, this.state.id, this.state.form);   // might need to handle error message
    }

    handleSubmit = (event) => {
        /* your code goes here */
        event.preventDefault();
        this.updateBooking();
    }

    handleChange = (event) => {
        /* your code goes here */
        const name = event.target.name;
        const value = event.target.value;
        this.setState({form:{...this.state.form, [name]:value}});
        this.validateField(name,value);
    }

    validateField = (fieldName, value) => {
        /* your code goes here */        
        var {formErrorMessage, formValid} = this.state;
        switch(fieldName){
            case "noOfTickets":
                if(value===""){  // Check another comparison method or operator
                    formErrorMessage[fieldName] = "field required";
                    formValid[fieldName] = false;
                }else if(value<1 || value>=10){
                formErrorMessage[fieldName] = "No of tickets should be greater than 0 and less than 10";
                formValid[fieldName] = false;
                console.log(formErrorMessage);
                } else{
                formErrorMessage[fieldName] = "";
                formValid[fieldName] = true;
                }
                break;
        }
        formValid["buttonActive"] = formValid.bookingId && formValid.noOfTickets;
        this.setState({formValid:formValid, formErrorMessage:formErrorMessage});
    }

    render() {
        return (
            <React.Fragment>
                <div className="UpdateBooking">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <br />
                            <div className="card">
                                <div className="card-header bg-custom">
                                    <h4>Update Flight Booking for id: {this.state.id}</h4>
                                </div>
                                <div className="card-body">
                                    {/* Implement the JSX of UpdateBooking component here */}
                                        <form className="form" onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="bookingId">BookingId</label>
                                                <input className="form-control" name="bookingId" disabled type="text" value={this.state.form.bookingId}
                                                    />
                                                <span className="text-danger">{this.state.formErrorMessage.bookingId}</span>
                                            </div>
                                            <div className="noOfTickets">
                                                <lable htmlFor="noOfTickets">Number of tickets</lable>
                                                <input type="number" min="1" max="10" value={this.state.form.noOfTickets} onChange={this.handleChange} name="noOfTickets"
                                                    className="form-control" placeholder="min-1 max-10"></input>
                                                <span className="text-danger">{this.state.formErrorMessage.noOfTickets}</span>
                                            </div>
                                            <button type="submit" className="btn btn-primary" disabled={!this.state.formValid.buttonActive}>Update Booking</button>
                                        </form>
                                        <span className="text-danger">{this.props.Messages.errorMessage}</span>
                                        <span className="text-success">{this.props.Messages.successMessage}</span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

//Pass state props to this component and export it
function mapStateToProps(state){
    return({
        Messages:state.Messages
    })
}
export default connect(mapStateToProps)(UpdateBooking);
