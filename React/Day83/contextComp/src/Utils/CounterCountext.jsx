import { createContext, useContext, useState } from "react";

const CounterContext = createContext()

export function CounterContextProvider({children})
{

    const[count, setCount] = useState(0)
    const[text, setText] = useState("")

    return (
        <CounterContext.Provider value={{count, setCount, text, setText}}>
            {children}
        </CounterContext.Provider>
    )
}


export function useCounterContext()
{
    return useContext(CounterContext)
}