const bookingReducer=(state,action)=>{
if(action.type ==='ADD_TO_BOOKING_LIST'){
const newState=[...state,action.payload];
return newState;
}

}