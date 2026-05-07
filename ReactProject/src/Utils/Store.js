import { configureStore } from "@reduxjs/toolkit";
import locationSliceReducer from "./LocationSlice"
import cacheSliceReducer from "./CacheSlice"

const Store = configureStore({
    reducer : {
        location : locationSliceReducer,
        cache : cacheSliceReducer
    }
})


export default Store