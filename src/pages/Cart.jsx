import React, { useEffect, useState } from 'react'
import CartCard from '../components/CartCard';
import SummaryCard from '../components/SummaryCard';
import Navbar from '../components/Navbar';
import { useFood } from '../context/FoodContext';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';
import axios from 'axios';

function Cart() {
    const {user} = useUser();
    const {cart,fetchCart} = useCart();

    const quantityUpdate = async(id,newQuantity) =>{
        const data = {
            userId: user._id,
            foodId: id,
            newQuantity: newQuantity
        }  
        try{
            const res = await axios.patch('http://localhost:5000/api/cart/update',data);
            await fetchCart();
        }catch(err){
            console.log("Error Updating Quantity", err.message);
        }

    }

    useEffect(()=>{
        fetchCart();
    },[])

  return (
    <div>
        <Navbar />
        <div className='bg-[#f6f6f6] min-h-screen flex flex-col md:flex-row items-center md:items-start justify-around'>
            <div className='mt-10'>
                <div className=' text-center md:m-5 '>
                    <h1 className='font-bold text-2xl'>Your Cart</h1>
                </div>
                {
                    cart?.map((item,index)=>(
                        <div key={index}>
                            <CartCard  item={item} quantityUpdate={quantityUpdate} userId={user._id} cart={cart} fetchCart={fetchCart}/>
                        </div>
                    ))
                }
            </div>
            <div className='md:mt-20'>
                <SummaryCard cart={cart}/>
            </div>
        </div>
    </div>
  )
}

export default Cart