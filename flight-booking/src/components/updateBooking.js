import React, { Component } from "react";
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



    updateBooking = () => {
        /* your code goes here */
    }

    handleSubmit = (event) => {
        /* your code goes here */
    }

    handleChange = (event) => {
        /* your code goes here */
    }

    validateField = (fieldName, value) => {
        /* your code goes here */
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
