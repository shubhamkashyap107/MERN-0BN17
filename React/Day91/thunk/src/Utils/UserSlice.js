import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUserData = createAsyncThunk("getdata", async() => {


        const[users, harry, products] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users/").then(res => res.json()),
            fetch("https://hp-api.onrender.com/api/characters").then(res => res.json()),
            fetch("https://dummyjson.com/products").then(res => res.json())
        ])

        return {
            users, harry, products : products.products
        }
     
    
})

const userSlice = createSlice({
    name : "User",
    initialState : {
        loading : false,
        data : [],
        error : null
    },
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(getUserData.pending, (state, action) => {
            return {
                ...state,
                loading : true
            }
        })
        .addCase(getUserData.fulfilled, (state, action) => {
            return {
                ...state,
                loading : false,
                data : action.payload
            }
        })
        .addCase(getUserData.rejected, (state, action) => {
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        })
    }
})



export default userSlice.reducer