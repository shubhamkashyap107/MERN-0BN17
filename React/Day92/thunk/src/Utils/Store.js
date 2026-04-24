import { configureStore } from "@reduxjs/toolkit"
import userSliceReducer from "./UserSlice"
import productSLiceReducer from "./ProductsSlice"
import cartSliceREducer from "./CartSlice"

const Store = configureStore({
    reducer : {
        user : userSliceReducer,
        product : productSLiceReducer,
        cart : cartSliceREducer
    }
})

export default Store