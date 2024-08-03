import { configureStore } from '@reduxjs/toolkit';
import {dataReducer} from '../Features/dataSlice';
export const store = configureStore( {
    reducer:dataReducer,
})