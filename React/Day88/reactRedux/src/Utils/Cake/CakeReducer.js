import { BUY_CAKE, RESTOCK_CAKE } from "./CakeActions";

const initialCakeState = {
    numOfCakes : 20
}

export function CakeReducer(state = initialCakeState, action)
{
    switch(action.type)
    {
        case BUY_CAKE:
            return {
                numOfCakes : action.payload <= state.numOfCakes ? state.numOfCakes - action.payload : state.numOfCakes - 1
            }

        case RESTOCK_CAKE:
            return {
                numOfCakes : state.numOfCakes + action.payload
            }

        default:
            return state
    }
}