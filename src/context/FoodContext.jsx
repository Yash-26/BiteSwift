import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  

    const [menuItems, setMenuItems] = useState([]);
    const [ cartItem, setCartItem] = useState([]);

    useEffect(()=>{
        const fetchData = async() => {
            try{
                const res = await axios.get('http://localhost:5000/api/foods');
                setMenuItems(res.data.foods);
                localStorage.setItem('MenuItems', JSON.stringify(res.data.foods));
            }catch(err){
                console.log('Error Fetchin Data', err.message);
            }
        }
        const storedMenu = localStorage.getItem('MenuItems');

        if(storedMenu){
          setMenuItems(JSON.parse(storedMenu));
        }
        else{
          fetchData();
        }
    },[])

    const addToCart = (item) => {
      
        setCartItem(prev=>[
            ...prev,
            item
        ])
        
    }
  

  return (
    <FoodContext.Provider value={{ menuItems, cartItem, addToCart}}>
      {children}
    </FoodContext.Provider>
  );
};

export const useFood = () => useContext(FoodContext);
