const { createStore, applyMiddleware } = require("redux")
const thunk = require("redux-thunk").thunk
const API = "https://jsonplaceholder.typicode.com/users/"
const FETCH_USERS = "FETCH_USERS"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE"



function fetchUsersRequest()
{
    return {
        type : FETCH_USERS
    }
}

function fetchUsersSuccess(data)
{
    return {
        type : FETCH_USERS_SUCCESS,
        payload : data
    }
}

function fetchUsersFailure(errorMsg)
{
    return {
        type : FETCH_USERS_FAILURE,
        payload : errorMsg
    }
}

function fetchUsers()
{
    return function(dispatch)
    {
        dispatch(fetchUsersRequest())
        fetch(API)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            dispatch(fetchUsersSuccess(data))
        })
        .catch((err) => {
            dispatch(fetchUsersFailure(err.message))
        })
    }
}


const intialState = {
    loading : false,
    data : [],
    error : null
}


function reducer(state = intialState, action)
{
    switch(action.type)
    {
        case FETCH_USERS:
            return {
                ...state,
                loading : true
            }

        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading : false,
                data : action.payload
            }
        
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading : false,
                error : action.payload
            }

        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

console.log("Initial state :",store.getState())

const unsubscribe = store.subscribe(() => {
    console.log("State is ", store.getState())
})

store.dispatch(fetchUsers())

// unsubscribe()


