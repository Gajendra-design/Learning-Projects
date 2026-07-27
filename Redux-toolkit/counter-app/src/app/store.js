import {configureStore} from '@reduxjs/toolkit'
import { counterReducer } from '../features/counterSlicer'

export const store = configureStore(
    {
        reducer:{
            counter:counterReducer
        },
    }
)