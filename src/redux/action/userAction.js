export function addtobookingList(payload){
return{
    type:'ADD_TO_BOOKING_LIST',
    payload:payload
}
}

export function removebookingList(payload)
{
    return{
        type:'REMOVE_FROM_BOOKING_LIST',
        payload:payload
    }
    }