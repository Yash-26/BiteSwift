import { createContext, useContext, useEffect, useState } from "react";


const UserContext = createContext();

export const UserProvider = ({children}) =>{

    const [user,setUser] = useState(null);

    useEffect(()=>{
        const storedUser = localStorage.getItem("UserData");

        if(storedUser){
            setUser(JSON.parse(storedUser));
        }
    },[])

    const loginUser = (userData) => {
        setUser(userData);
        localStorage.setItem("UserData",JSON.stringify(userData));
    }

    const logoutUser = () => {
        setUser(null);
        localStorage.removeItem("UserData");
    }

    return (
        <UserContext.Provider value={{user, loginUser, logoutUser}}>
            {children}
        </UserContext.Provider>
    )

}

export const useUser = () => useContext(UserContext);