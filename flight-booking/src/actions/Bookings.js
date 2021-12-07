/* Import necessary modules */
import { deleteBookingAPI, fetchFlightIdsAPI, getAllBookingsAPI, submitBookingAPI, updateBookingAPI } from "../utils/api";

export const GET_ALL_BOOKINGS = 'GET_ALL_BOOKINGS';
export const SET_MESSAGE = 'SET_MESSAGE';
export const GET_ALL_FLIGHTIDS = 'GET_ALL_FLIGHTIDS'

// Set Message action creator
export const setMessageAction = (successMessage, errorMessage) => {
    /* your code goes here */
    return({
        type: SET_MESSAGE,
        successMessage,
        errorMessage
    })
}

// Get bookings action creator
export const getBookingsAction = (bookings) => {
    /* your code goes here */
    return({
        type: GET_ALL_BOOKINGS,
        bookings

    })
}

//fetch FlightIds action creator
export const fetchFlightIdsAction = (flightIds) => {
    /* your code goes here */
    return ({
        type:GET_ALL_FLIGHTIDS,
        flightIds
    })
}

// Get Bookings
export const handleGetBookings = (dispatch) => {
    /* your code goes here */
    try{
        const bookings = getAllBookingsAPI();
        dispatch(getBookingsAction(bookings));
        dispatch(setMessageAction("", ""));
    }catch(error){
        dispatch(setMessageAction("", error.message));  // Only error message has to be set and success msg shouls not have been toucheds(clear- mentioned only msg should be displayed)
        dispatch(getBookingsAction([]))
    }
    

}

//Delete Booking
export const handleDeleteBooking = (dispatch, bookingId) => {    // from are they getting the dispatch 
    /* your code goes here */
    try{
        const successMessage = deleteBookingAPI(bookingId);
        dispatch(setMessageAction(successMessage, ""));
        handleGetBookings(dispatch);
    }catch(error){
        dispatch(setMessageAction("", error.message));
    }

}

//Update Booking
export const handleUpdateBooking = (dispatch, bookingId, formData) => {
    /* your code goes here */
    try{
        const successMessage = updateBookingAPI(bookingId, formData);
        dispatch(setMessageAction(successMessage, ""));
    }catch(error){
        dispatch(setMessageAction("", error.message));
    }
}

//Fetch all flight Ids
export const handleFetchFlightIds = (dispatch) => {
    /* your code goes here */
    try{
        const flightIds = fetchFlightIdsAPI();
        dispatch(fetchFlightIdsAction(flightIds));
        dispatch(setMessageAction("", ""));
    }catch(error){
        dispatch(setMessageAction("", error.message));
        dispatch(fetchFlightIdsAction([]));
    }
}

//Submit Booking
export const handleSubmitBooking = (dispatch, formData) => {
    /* your code goes here */
    try{
        const successMessage = submitBookingAPI(formData);
        dispatch(setMessageAction(successMessage, ""));
    }catch(error){
        dispatch(setMessageAction("", error.message));
    }
}