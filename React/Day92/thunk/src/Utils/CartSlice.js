import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        addToCart : (state, action) => {
            
            const newItemId = action.payload.id

            const foundItem = state.find((item) => {
                return item.id == newItemId
            })

            if(!foundItem)
            {
                state.push({...action.payload, quantity : 1})
            }
            else
            {
                foundItem.quantity = foundItem.quantity + 1
            }

        },
        removeFromCart : (state, action) => {
            
            let itemToBeRemovedId = action.payload

            return state.map((item) => {
                return {
                    ...item,
                    quantity : (item.id == itemToBeRemovedId ? item.quantity - 1 : item.quantity)
                }
            })
            .filter((item) => {
                return item.quantity > 0
            })

        }
    }
})


export default cartSlice.reducer
export const{ addToCart, removeFromCart } = cartSlice.actions