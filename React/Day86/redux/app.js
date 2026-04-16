const { createStore, combineReducers, applyMiddleware } = require("redux")
const reduxLogger = require("redux-logger").createLogger()

const BUY_CAKE = "BUY_CAKE"
const RESTOCK_CAKE = "RESTOCK_CAKE"
const BUY_ICE_CREAM = "BUY_ICE_CREAM"
const RESTOCK_ICE_CREAM = "RESTOCK_ICE_CREAM"


function buyCake(quantity)
{
    return {
        type : BUY_CAKE,
        payload : quantity || 1
    }

}

function restockCake(quantity)
{
    return {
        type : RESTOCK_CAKE,
        payload : quantity
    }
}

function buyIceCream(quantity)
{
    return {
        type : BUY_ICE_CREAM,
        payload : quantity || 1
    }

}

function restockIceCream(quantity)
{
    return {
        type : RESTOCK_ICE_CREAM,
        payload : quantity
    }
}


const initialCakeState = {
    numOfCakes : 20
}

const initialIceCreamState = {
    numOfIceCreams : 40
}

function cakeReducer(state = initialCakeState, action)
{
    switch(action.type)
    {
        case BUY_CAKE:
            if(action.payload <= state.numOfCakes)
            {
                return {
                    numOfCakes : state.numOfCakes - action.payload
                }
            }
            else
            {
                return {
                    numOfCakes : state.numOfCakes - 1
                }
            }
        
        case RESTOCK_CAKE:
            return {
                numOfCakes : state.numOfCakes + action.payload
            }

        default:
            return state
    }
}

function iceCreamReducer(state = initialIceCreamState, action)
{
    switch(action.type)
    {
        case BUY_ICE_CREAM:
            if(action.payload <= state.numOfIceCreams)
            {
                return {
                    numOfIceCreams : state.numOfIceCreams - action.payload
                }
            }
            else
            {
                return {
                    numOfIceCreams : state.numOfIceCreams - 1
                }
            }
        
        case RESTOCK_ICE_CREAM:
            return {
                numOfCakes : state.numOfIceCreams + action.payload
            }

        default:
            return state
    }
}

const rootReducer = combineReducers({
    cakeReducer, iceCreamReducer
})


const store = createStore(rootReducer, applyMiddleware(reduxLogger))
// console.log(store.getState())


// const unsubscribe = store.subscribe(() => console.log("Total cakes left :", store.getState()))



store.dispatch(buyCake(20))
store.dispatch(buyIceCream(40))

store.dispatch(restockCake(50))
store.dispatch(restockIceCream(100))