/* Import the necessary modules here */
import Axios from 'axios';

const url = "http://localhost:1050";

export const fetchFlightIdsAPI = () => {
    /* your code goes here */
    Axios
        .get(url+"/getFlightIds")
        .then(response=>response.data)
        .catch(error=>{
            if(error.response){
                throw(error.response.data.message);
            }else{
                throw "Please start your express server";
            }
            
        })

}

export const submitBookingAPI = (formData) => {
    /* your code goes here */
    Axios
        .post(url+"/bookFlight/", formData)
        .then(response=>response.data.message)
        .catch(error=>{
            if(error.response){
                throw(error.response.data.message);
            }else{
                throw "Please start your express server";
            }
        })
}

export const getAllBookingsAPI = () => {
    /* your code goes here */
    Axios
        .get(url+"/getAllBookings")
        .then(response=>response.data)
        .catch(error=>{
            if(error.status==404){ // try error.data.status
                throw error.data.message;
            } else{
                throw "Please start your Express server";
            }
        })
}

export const deleteBookingAPI = bookingId => {
    /* your code goes here */
    Axios
        .delete(url+"/deleteBooking/"+bookingId)
        .then(res=>res.data.message)
        .catch(error=>{
            if(error.status==404){ // try error.data.status
                throw error.data.message;
            } else{
                throw "Please start your Express server";
            }
        })
}

export const updateBookingAPI = (bookingId, formData) => {
    /* your code goes here */
    Axios
        .put(url+"/updatebooking/"+bookingId, formData)
        .then(res=>res.data.message)
        .catch(error=>{
            if(error.status==404){ // try error.data.status
                throw error.data.message;
            } else{
                throw "Please start your Express server";
            }
        })
}
