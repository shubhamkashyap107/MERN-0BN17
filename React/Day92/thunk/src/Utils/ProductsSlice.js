import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const getProductDataThunk = createAsyncThunk("get-product-data", async() => {
    const res = await fetch("https://dummyjson.com/products")
    const data = await res.json()
    return data.products
})

const productSlice = createSlice( {
    name : "products",
    initialState : {
        loading : false,
        data : [],
        error : null
    },
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(getProductDataThunk.pending, (state, action) => {
            return {
                ...state,
                loading : true
            }
        })
        .addCase(getProductDataThunk.fulfilled, (state, action) => {
            return {
                ...state,
                loading : false,
                data : action.payload
            }
        })
        .addCase(getProductDataThunk.rejected, () => {
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        })
    }
})

export default productSlice.reducer