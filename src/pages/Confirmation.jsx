import { CheckIcon, MapPin } from 'lucide-react'
import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar';
import { useUser } from '../context/UserContext';
import axios from 'axios';
import toast from 'react-hot-toast';

function Confirmation() {
    const location = useLocation();
    const item = location.state.item;
    const total = location.state.total;
    const qty = location.state.qty;

    const refId = 'BSW-'+Math.floor(1000000+Math.random()*900000);

    const {user} = useUser();
   
    const isCart = Array.isArray(item);
    console.log(isCart);

    useEffect(()=>{

        const clearCart = async()=>{
            const res = await axios.delete(`http://localhost:5000/api/cart/clear/${user._id}`);
            console.log(res.data);
        }
        
        if(isCart){
            clearCart();
        }
        
    },[])

  return (
    <div className='bg-[#F6F6F6] min-h-screen'>
        <Navbar />
        <div className='flex flex-col items-center justify-center space-y-20 mt-10 p-5 transition-all'>
            <div className='text-center flex flex-col items-center space-y-5'>
                <p className='bg-green-300 fill-green-500 rounded-full p-2  text-center'><CheckIcon className='w-4 h-4 '/></p>
                <h1 className='font-bold text-2xl '>Order Confirmed!</h1>
                <p className='text-gray-400'>Thank you for your order. We're preparing your delicious meal!</p>
            </div>
            <div className='space-y-10 shadow-lg p-5 bg-white rounded-md max-w-xs md:max-w-lg leading-relaxed transition-all'>
                <div className='flex justify-between'>
                    <div>
                        <h2 className='font-bold text-lg md:text-xl'>Order Details</h2>
                    </div>
                    <div>{refId}</div>
                </div>
                
                <div className='flex justify-between gap-10 lg:gap-40 transition-all'>
                    <div className='flex flex-col space-y-5'>
                        {
                            !isCart ? (
                                <div>
                                    <h3 className='font-semibold md:text-lg'>{item.name} x {qty}</h3>
                                    <p className='text-sm'>Qty: {qty} x {item.price} each</p>
                                </div>
                            ) : (
                                item.map((cartItem,index)=>(
                                    <div key={index}>
                                        <h3 className='font-semibold md:text-lg'>{cartItem.foodId.name} x {cartItem.quantity}</h3>
                                        <p className='text-sm'>Qty: {cartItem.quantity} x {cartItem.foodId.price} each</p>
                                    </div>
                                ))
                            )
                        }
                    </div>
                    <div className='font-bold items-center flex'>{total}</div>
                </div>
                <div className='flex justify-between font-bold text-xl'>
                    <h2 className='text-lg'>Total Paid</h2>
                    <h2 className='text-lg text-orange-600'>${total}</h2>
                </div>
            </div>
            <div className='space-y-5 p-5 shadow-lg bg-white rounded-md max-w-xs md:max-w-md lg:max-w-lg leading-relaxed transition-all'>
                <div>
                    <h1 className='flex items-center font-bold text-lg md:text-xl'>
                        <MapPin className='w-4 h-4 mr-2' /> {'Delivery Information'}
                    </h1>
                </div>
                <div className='flex flex-col md:flex-row justify-between gap-14 md:gap-20 lg:gap-40'>
                    <div>
                        <h3 className='font-semibold'>Address:</h3>
                        <p>{user?.address}</p>
                    </div>
                    <div>
                        <p>Estimated delivery time:</p>
                        <h3 className='font-semibold'>25-35 minutes</h3>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <Link to='/dashboard' className='px-20 py-2 bg-[#01A64E] text-white rounded-md hover:cursor-pointer'>Order Again</Link>
                <Link to='/' className='px-20 py-2 bg-orange-600 text-white rounded-md hover:cursor-pointer'>Back To Home</Link>
            </div>
        </div>
    </div>
  )
}

export default Confirmation