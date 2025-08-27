import { Trash2 } from 'lucide-react'
import React, { useId, useState } from 'react'
import sample from '../assets/Character Design.jpeg';
import axios from 'axios';


function CartCard({item,quantityUpdate, cart, userId, fetchCart}) {

    

    const handleDelete = async(id) => {

        const data = {
            userId: userId,
            foodId: id
        }
        try{
            const res = await axios.post('http://localhost:5000/api/cart/remove',data);
            await fetchCart();
        }catch(err){
            console.log("Error Deleting Item", err.message);
        }
    }

    const handleIncrement = () => {
        quantityUpdate(item.foodId._id,item.quantity+1);
    }

    const handleDecrement = () => {
    if (item.quantity > 1) {
      quantityUpdate(item.foodId._id, item.quantity-1);
    }
  };
    
  return (
    <div className='flex flex-col items-center md:flex-row bg-white rounded-md p-5 m-5 max-w-3xl space-x-3   md:justify-around hover:shadow-lg transition-all'>
        <div className='flex items-center'>
            <img src={item.foodId.image} alt='foodImg'  className='w-24 rounded-md shadow-md'/>
        </div>
        <div className='space-y-2'>
            <h3 className='font-bold text-lg'>{item.foodId.name}</h3>
            <p className='text-gray-600 text-left leading-relaxed'>{item.foodId.description}</p>
            <h3 className='font-bold text-orange-600'>{item.foodId.price}</h3>
        </div>
        <div className="flex items-center mt-3 space-x-5 text-sm transition-all">
            <button onClick={handleDecrement} className="px-1 border border-orange-600 shadow-md">-</button>
                <span>Quantity:{item.quantity}</span>
            <button onClick={handleIncrement} className="px-1 border border-orange-600 shadow-md">+</button>
            <Trash2 onClick={()=>handleDelete(item.foodId._id)} className='w-4 h-4 text-orange-600'/>
        </div>
    </div>
  )
}

export default CartCard