import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useFood } from '../context/FoodContext';
import Navbar from '../components/Navbar';
import toast from 'react-hot-toast';
import { useUser } from '../context/UserContext';

function Checkout() {

    const navigate = useNavigate();
    const location = useLocation()
    const {user} = useUser();
    const {item} = location.state
    const {cartItem} = useFood();
    const [quantity, setQuantity] = useState(1);
    const [total,setTotal] = useState(item?.price || 0);
    console.log(cartItem)

    const handleCheckOut = () => {
        if(user){
            navigate('/payment',{
            state:{
                item: item,
                total: total,
                qty: quantity
            }
        })
        }
        else{
            toast.error('Login to Pay')
        }
    }

    useEffect(()=>{
        if(item){
            setTotal((item.price*quantity).toFixed(2));
        }
    },[quantity,item])
  return (
    <div>
        <Navbar />
        <div className=' flex flex-col items-center justify-center space-y-20 mt-20 transition-all'>
            <div>
                <h1 className='font-bold text-2xl'>Checkout</h1>
            </div>
            <div className='space-y-10 transition-all'>
                <div>
                    <h2 className='font-bold text-xl'>Order Details</h2>
                </div>
                <div className='flex justify-between gap-20 md:gap-60 transition-all'>
                    <div className='space-y-5 transition-all'>
                        <h3 className='font-semibold text-lg transition-all'>{item.name} x {quantity}</h3>
                        <div className="flex items-center mt-3 space-x-4 text-sm transition-all">
                            <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-2 border border-orange-600 shadow-md">-</button>
                            <span>Quantity: {quantity}</span>
                            <button onClick={() => setQuantity(q => q + 1)} className="px-2 border border-orange-600 shadow-md">+</button>
                        </div>
                        <p className='text-sm text-orange-600'>${item.price} each</p>
                    </div>
                    <div className='font-bold text-lg transition-all'>{total}</div>
                </div>
                <div className='flex justify-between font-bold text-xl'>
                    <h2 className=''>Total Amount</h2>
                    <h2 className='text-orange-600'>${total}</h2>
                </div>
            </div>
            <div>
                <button onClick={handleCheckOut} className='text-white bg-orange-600 rounded-md px-4 py-2 hover:cursor-pointer transition-all' >Proceed to Payment</button>
            </div>
        </div>
    </div>
  )
}

export default Checkout