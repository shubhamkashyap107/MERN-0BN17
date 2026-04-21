import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name : "list",
    initialState : [],
    reducers : {
        addItem : (state, action) => {
            return [...state, action.payload]
        },
        clearList : () => {
            return []
        }
    },
})

export default listSlice.reducer
export const {addItem, clearList} = listSlice.actions