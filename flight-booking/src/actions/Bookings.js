/* Import necessary modules */

export const GET_ALL_BOOKINGS = 'GET_ALL_BOOKINGS';
export const SET_MESSAGE = 'SET_MESSAGE';
export const GET_ALL_FLIGHTIDS = 'GET_ALL_FLIGHTIDS'

// Set Message action creator
export const setMessageAction = (successMessage, errorMessage) => {
    /* your code goes here */
}

// Get bookings action creator
export const getBookingsAction = (bookings) => {
    /* your code goes here */
}

//fetch FlightIds action creator
export const fetchFlightIdsAction = (flightIds) => {
    /* your code goes here */
}

// Get Bookings
export const handleGetBookings = (dispatch) => {
    /* your code goes here */
}

//Delete Booking
export const handleDeleteBooking = (dispatch, bookingId) => {
    /* your code goes here */
}

//Update Booking
export const handleUpdateBooking = (dispatch, bookingId, formData) => {
    /* your code goes here */
}

//Fetch all flight Ids
export const handleFetchFlightIds = (dispatch) => {
    /* your code goes here */
}

//Submit Booking
export const handleSubmitBooking = (dispatch, formData) => {
    /* your code goes here */
}