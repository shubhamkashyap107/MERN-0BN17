import { createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

export function AuthContextProvider({children})
{
    
    return (
        <AuthContext.Provider value={"qwer"}>
            {children}
        </AuthContext.Provider>
    )
}