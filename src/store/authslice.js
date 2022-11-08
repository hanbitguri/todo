import { createSlice } from "@reduxjs/toolkit";

const initState = {
    auth : false
}
function authReducer (state,action){
    if(action.type==='LOGIN'){
        return {
            auth : true
        }
    }
    return state;
}

const authSlice = createSlice({
    name: 'auth',
    initialState : initState,
    reducers :  authReducer,
})

export const authAction = authSlice.actions;
export default authSlice.reducer