import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from '../features/auth/state/authSlice'

export const store = configureStore({
    reducer:{
        auth:AuthSlice
    }
})