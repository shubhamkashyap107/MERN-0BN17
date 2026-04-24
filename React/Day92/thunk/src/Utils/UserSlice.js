import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUserDataThunk = createAsyncThunk("get-user-data", async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    return data
})

const userSlice = createSlice({
    name : "users",
    initialState : {
        loading : false,
        data : [],
        error : null
    },
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(getUserDataThunk.pending, (state, action) => {
            return {
                ...state,
                loading : true
            }
        })
        .addCase(getUserDataThunk.fulfilled, (state, action) => {
            return {
                ...state,
                loading : false,
                data : action.payload
            }
        })
        .addCase(getUserDataThunk.rejected, () => {
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        })
    }
})


export default userSlice.reducer