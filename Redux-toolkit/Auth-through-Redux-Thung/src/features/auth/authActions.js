import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/axiosInstace";

//yaha pe thung ka action create kara hai ye do argument leta ha phala name of the action usme kuch bhi rakh sakthe hai humne auth/login iss liye rakha hai raki bas hamari understanding ke liye ki ye eala thung humne auth ke logi ke liye banaya hai nahi tho wha pe cheel ka moot bhi likh do koi dikkat nahi hai 
//second argument yaha pe hai callback fucntion isme phir 2 argument hai phala jab isko call karge kahi se tho isme jo pass hoga eho and second for showing error and remember jo bhi yaha se return hoga wo hum amareauthSlice me payload meaccess kar sakthe hai
//isko authSlice me access hum extaReducer me kar sakthe hai hai ha iski 3 state pending,sucess,reject ko
export const loginAction = createAsyncThunk('auth/login', async (credential, thungerror) => {
    try {
        const response = await api.post('auth/login', credential)
        localStorage.setItem('accessToken', JSON.stringify(response.data.accessToken))
        return response.data

    } catch (error) {
        return thungerror.rejectWithValue('Login Failed')
    }
})

export const hydrateAction = createAsyncThunk('auth/hydrate', async (_, thungerror) => {
    try {
        const accessToken = JSON.parse(localStorage.getItem('accessToken'))
        const response = await api.get('auth/me', {
            headers: {
            Authorization: `Bearer ${accessToken}`
        }})
        return response.data;
    } catch (error) {
        return thungerror.rejectWithValue('hydration failed')
    }
})