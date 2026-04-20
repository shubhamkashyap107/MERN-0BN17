import { createSlice } from "@reduxjs/toolkit";

const counterSlice  = createSlice({
    name : "Counterxyz",
    initialState : 0,
    reducers : {
        increment : (state, action) => {
            return state + 1
        },
        decrement : (state, actiom) => {
            return state - 1
        },
        reset : () => {
            return 0
        }
    }
})




export default counterSlice.reducer
export const{increment, decrement, reset} = counterSlice.actions