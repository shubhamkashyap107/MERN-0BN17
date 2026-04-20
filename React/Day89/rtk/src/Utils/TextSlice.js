import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
    name : "text",
    initialState : "",
    reducers : {
        setText : (state, action) => {
            return action.payload
        }
    }
})


export default textSlice.reducer
export const{setText} = textSlice.actions