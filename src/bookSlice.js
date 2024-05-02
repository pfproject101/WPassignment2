import React from 'react'
import {createSlice} from '@redux.js/toolkit'

const bookSlice = createSlice(
{
    name: "bookSlice",
    initialState: {books:[]},
    reducers:{
        statusReducer(state, action){
            state.books.status == "Available"? "Not Available" : "Available"
        }
    }
}
)

export 

