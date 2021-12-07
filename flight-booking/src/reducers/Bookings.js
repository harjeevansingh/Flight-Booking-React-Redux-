import { GET_ALL_BOOKINGS,  SET_MESSAGE, GET_ALL_FLIGHTIDS } from "../actions/Bookings";

//Return all flight Ids
export const FlightIds = ( state = [], action ) => {
    /* your code goes here */
    if(action.type == GET_ALL_FLIGHTIDS){  // may need to use equals
        return([                                // might need to remove the ...state
            ...state,
            action.flightIds
        ]);
    }else{
        return [...state]
    }
}

//Returns all bookings
export const AllBookings = (state = null, action) => {
    /* your code goes here */
    if(action.type== GET_ALL_BOOKINGS){
        return action.bookings // might need to replace bookings by flightIds
    }else{
        return state;
    }
}

//Return success and error messages
export const Messages = (state = { successMessage: "", errorMessage: '' }, action) => {
    /* your code goes here */
    if(action.type== SET_MESSAGE){
        return ({
            ...state,
            successMessage:action.successMessage,
            errorMessage:action.errorMessage
        })
    }else{
        return {...state}
    }

}
