import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import tasksListReducer from "./tasksSlice"

const store  = configureStore(
    {
        reducer:{
            counter: counterReducer,
            tasksList: tasksListReducer
        },
    },
);

export default store;