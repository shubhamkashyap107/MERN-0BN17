import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit"
import counterSliceReducer from "./CounterSlice"
import textSliceReducer from "./TextSlice"



const store = configureStore({
    reducer : {
        counter : counterSliceReducer,
        text : textSliceReducer
    }
})




export default store