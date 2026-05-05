import { configureStore } from "@reduxjs/toolkit";
import locationSliceReducer from "./LocationSlice"

const Store = configureStore({
    reducer : {
        location : locationSliceReducer
    }
})


export default Store