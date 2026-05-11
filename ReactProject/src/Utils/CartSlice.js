import { createSlice } from "@reduxjs/toolkit"



const cartSlice = createSlice({
    name : "cart",
    initialState : {id : "", items : []},
    reducers : {
        clearCart : (state) => {
            return {}
        },
        addToCart : (state, action) => {


            let itemId = action.payload.foodItem.itemId
            let existingItem = state.items.find((f) => {
                return f.itemId == itemId
            })


            if(!existingItem)
            {
                return{
                    id : action.payload.id,
                    items : [...state.items, {...action.payload.foodItem, quantity : 1}]
                }
            }
            else
            {
                let newData = state.items.map((f) => {
                    if(f.itemId == itemId)
                    {
                        return {...f, quantity : f.quantity + 1}
                    }
                    else
                    {
                        return f
                    }
                })
                return {
                    id : action.payload.id,
                    items : newData
                }
            }
        }
       
    }
})

export default cartSlice.reducer
export const{ clearCart, addToCart} = cartSlice.actions
