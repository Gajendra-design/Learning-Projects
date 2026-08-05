import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState:{
        user:null,
        isAuthorized:false,
        isLoading:true
    },
    reducers:{
        addUser:(state,payload)=>{
            state.user = payload,
            state.isAuthorized = true;
            state.isLoading = false;
        },
        removeUser:(state)=>{
            state.user = null,
            state.isAuthorized = false;
            state.isLoading = true;  
            localStorage.removeItem('accessToken')
        }
    }
})

export const {addUser,removeUser} = authSlice.actions
export default authSlice.reducer;