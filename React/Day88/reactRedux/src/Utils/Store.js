import { createStore } from "redux"
import { CakeReducer } from "./Cake/CakeReducer"
import { composeWithDevTools } from "@redux-devtools/extension"


export const Store = createStore(CakeReducer, composeWithDevTools())