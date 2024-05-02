import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice(
    {
        name:"counter",
        initialState:{
            count:0
        },
        reducers:{
            increment(state){
                state.count+=1;
            },
            decrement(state){
                state.count-=1;
            },
            incByAmount(state, action){
                state.count += action.payload.amount;
            }
        }
    }
)

export const {increment, decrement, incByAmount} = counterSlice.actions
export default counterSlice.reducer