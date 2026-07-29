import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:'auth',
    initialState:{
        user:null,
        isAuthorized:false
    },
    reducers:{
        addUser:(state,action)=>{
            state.user = action.payload
        },
        removeUser:(state,action)=>{
            state.user = null;
        }
    }
})

export const {addUser,removeUser} = authSlice.actions;
export default authSlice.reducer;