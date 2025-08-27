import { Plus } from 'lucide-react'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFood } from '../context/FoodContext';
import axios from 'axios';
import { useUser } from '../context/UserContext';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

function FoodCard({item}) {

    const {addToCart, cartItem} = useFood();
    const {user} = useUser();
    const {cart, fetchCart} = useCart();
    const navigate = useNavigate();

    

    
    console.log(item)
    

    

    const handleCart =async()=>{
        
        if(user){
            const data = {
                userId: user?._id,
                foodId: item._id,
                quantity: 1
            }
            try{
                const res = await axios.post('http://localhost:5000/api/cart/add', data);
                await fetchCart();
                toast.success('Item Added to Cart'); 
            }catch(err){
                console.log('Error Adding Cart');
            }
        }
        else{
            toast.error('Login to Add');
        }
    }

    const handleBuy = () => {
        
        navigate('/checkout',{
            state:{
                item: item
            }
        });
        // console.log(foodItem)
    }

    
  return (
    <div className='rounded-lg hover:shadow-lg mx-5 my-2 p-5 bg-white max-w-80  transition-all'>
        <div className='w-full mb-5'>
            <img src={item.image} />
        </div>
        <div className='space-y-5'>
            <div className='flex items-center justify-between'>
                <h3 className='font-bold text-lg'>{item.name}</h3>
                <span className='text-xs rounded-full text-white px-1 md:px-2 py-1 bg-[#0055FF]'>{item.category}</span>
            </div>
            <div className='space-y-3'>
                <p className='text-gray-600'>{item.description}</p>
                <h2 className='font-extrabold text-xl text-orange-600'>${item.price}</h2>
            </div>
            <div className='flex space-x-5 justify-between mx-1 md:mx-5'>
                <button onClick={handleCart} className='px-2 py-1 text-xs md:text-base rounded-md bg-white text-gray-600 font-semibold flex items-center border border-gray-600  hover:shadow-md hover:scale-95 hover:cursor-pointer transition-all'>
                    <Plus className='w-3 h-3 mr-0'/>{'Add to Cart'}
                </button>
                <button  onClick={handleBuy} className='text-white text-sm md:text-base font-semibold bg-orange-600 px-2 py-1 rounded-md hover:bg-orange-700 hover:scale-95 hover:shadow-md hover:cursor-pointer transition-all'>Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default FoodCard