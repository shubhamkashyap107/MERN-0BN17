import { configureStore } from "@reduxjs/toolkit"
import ListSliceReducer from "./ListSlice"

const Store = configureStore({
    reducer : {
        list : ListSliceReducer
    }
})


export default Store