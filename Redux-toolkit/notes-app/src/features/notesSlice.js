import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const notesSlice = createSlice({
    name:'notes',
    initialState:{
        notes:[]
    },
    reducers:{
        addNotes:(state,action)=>{            
            state.notes.unshift({id:nanoid(),title:action.payload.title})
        },
        deleteNotes:(state,action)=>{
            state.notes = state.notes.filter((note)=>{return note.id !== action.payload.id})
        },
        editNotes: (state,action)=>{
            state.notes = state.notes.map((note)=>{
                if(note.id === action.payload.id){
                    return {...note,title:action.payload.updatedTitle}
                }
                return note
            })
        }
    }
})

export const {addNotes,deleteNotes,editNotes} = notesSlice.actions;
export const notesSliceReducer = notesSlice.reducer;