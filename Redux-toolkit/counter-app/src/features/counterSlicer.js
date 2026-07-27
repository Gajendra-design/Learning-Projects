import { createSlice } from "@reduxjs/toolkit";

const counterSlicer = createSlice({
    name:'count',
    initialState:{
        count:0
    },
    reducers:{
        increaseCount: (state)=>{state.count++},
        decreaseCount: (state)=>{state.count--}
    }
})

export const {increaseCount,decreaseCount} = counterSlicer.actions;
export  const counterReducer =  counterSlicer.reducer;