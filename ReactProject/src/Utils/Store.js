import { configureStore } from "@reduxjs/toolkit";
import locationSliceReducer from "./LocationSlice"
import cacheSliceReducer from "./CacheSlice"
import cartSliceReducer from "./CartSlice"

const Store = configureStore({
    reducer : {
        location : locationSliceReducer,
        cache : cacheSliceReducer,
        cart : cartSliceReducer
    }
})


export default Store