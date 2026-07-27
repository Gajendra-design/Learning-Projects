import { configureStore } from "@reduxjs/toolkit";
import { notesSliceReducer } from "../features/notesSlice";

export const store = configureStore({
    reducer:{
        notes:notesSliceReducer
    }
})