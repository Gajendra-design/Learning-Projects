import { createSlice } from "@reduxjs/toolkit";
import { hydrateAction, loginAction } from "./authActions";
import { toast } from "react-toastify";

const authSlice = createSlice({
    name:'auth',
    initialState:{
        User:null,
        isAuthorized:false,
        isLoading:false
    },
    reducers:{
        logout:(state)=>{
            state.User = null
            state.isAuthorized = false
            localStorage.removeItem('accessToken')
            toast.success('logout sucessful')
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(loginAction.pending,(state,payload)=>{state.isLoading=true})
        .addCase(loginAction.fulfilled,(state,payload)=>{
            state.isLoading = false
            state.User = payload
            state.isAuthorized = true
            toast.success('login sucessful')
        })
        .addCase(loginAction.rejected,(state,payload)=>{
            state.isLoading=false
            toast.error('login failed')
        })
        .addCase(hydrateAction.pending,(state,payload)=>{
            state.isLoading = true;
        })
        .addCase(hydrateAction.fulfilled,(state,payload)=>{
            state.isLoading = false;
            state.isAuthorized = true
            state.User = payload
        })
        .addCase(hydrateAction.rejected,(state,payload)=>{
            state.isLoading = false
            state.isAuthorized =false
            toast.error('something went wrong,you were logged out')
        })
    }
})

export const {logout} = authSlice.actions

export default authSlice.reducer