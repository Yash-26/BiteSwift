import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Timer from '../components/Timer';
import toast from 'react-hot-toast';

function Payment() {
    const navigate = useNavigate();
    const location = useLocation();
    const item = location.state.item;
    const total = location.state.total;
    const qty = location.state.qty;

    const isCart = Array.isArray(item);

    const handlePay = () => {
        toast.success('Payment Successful');
        if(!isCart){
            navigate('/confirmation',{
            state:{
                item: item,
                total: total,
                qty: qty
            }
        })
        }
        else{
            navigate('/confirmation',{
                state:{
                    item:item,
                    total:total
                }
            });
        }
    }

    console.log(item)
  return (
    <div className='bg-[#f6f6f6] p-2 min-h-screen overflow-hidden'>
        <Navbar />
        <div className=' flex flex-col items-center justify-center space-y-20 mt-20 transition-all'>
            <div>
                <h1 className='font-bold text-2xl text-center'>Payment</h1>
                <Timer />
            </div>
            <div className='space-y-10 bg-white p-5 rounded-lg'>
                <div>
                    <h2 className='text-lg md:text-xl font-bold'>Payment Summary</h2>
                </div>
                <div className='flex items-center justify-between space-x-10  lg:space-x-40 transition-all'>
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
                    <div className='font-bold items-center flex '>{total}</div>
                </div>
                <div className='flex justify-between font-bold text-xl'>
                    <h2 className='text-lg'>Total Amount</h2>
                    <h2 className='text-lg text-orange-600'>${total}</h2>
                </div>
            </div>
            <div>
                <button onClick={handlePay} className='px-20 py-2 bg-[#01A64E] text-white rounded-md hover:cursor-pointer'>Pay {total}</button>
            </div>
        </div>
    </div>
  )
}

export default Payment