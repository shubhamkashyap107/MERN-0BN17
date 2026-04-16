const { createStore } = require("redux")
const BUY_CAKE = "BUY_CAKE"

function buyCake()
{
    return {
        type : BUY_CAKE
    }
}

const initialCakeStore = {
    numOfCakes : 20
}

function cakeReducer(state = initialCakeStore, action)
{
    switch(action.type)
    {
        case BUY_CAKE:
            return {
                numOfCakes : state.numOfCakes - 1
            }

        default:
            return state
    }
}

const store = createStore(cakeReducer)
console.log(store)
console.log("Initial : ", store.getState())
const unsubscribe = store.subscribe(() => console.log("Cake sold", store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

console.log(store.getState())