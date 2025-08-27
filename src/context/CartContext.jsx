import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "./UserContext";


const CartContext = createContext();

export const CartProvider = ({children}) => {

    const {user} = useUser();
    const [cart, setCart] = useState([]);

    const fetchCart = async() => {
        if(!user?._id) return;

        try{
            const res = await axios.get(`http://localhost:5000/api/cart/${user._id}`);
            localStorage.setItem('cart', JSON.stringify(res.data.cart))
            setCart(res.data.cart);
            console.log(res.data.cart);
        }catch(err){
            console.log("Error getting Cart from backend", err.message);
        }
    }

    useEffect(()=>{

        fetchCart();
        
    },[user])


    return (
        <CartContext.Provider value={{cart, fetchCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);