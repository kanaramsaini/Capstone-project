import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener,createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser:null,
    setCurrentUser: () => null
});

export const UserProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser,setCurrentUser};
        console.log(currentUser)
    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{
            if(user){
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
        })
        return unsubscribe;
    },[])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}