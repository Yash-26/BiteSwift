import React from 'react'
import { useNavigate } from 'react-router-dom';

function SummaryCard({cart}) {

    const navigate = useNavigate();

    const total = cart.reduce((acc,item)=> {
        return acc+item.foodId.price*item.quantity
    },0).toFixed(2);
  return (
    <div className='bg-white max-w-xs rounded-lg p-5 m-5 space-y-10 hover:shadow-lg transition-all'>
        <div>
            <h2 className='font-bold text-lg md:text-xl'>Order Summary</h2>
        </div>
        <div>
            {
                cart.map((item, index) => (
                    <div key={index} className='flex justify-between space-x-12'>
                        <h3 className='text-base md:text-lg '>{item.foodId.name} x {item.quantity}</h3>
                        <h3 className='text-base md:text-lg '>{item.foodId.price}</h3>
                    </div>
                ))
            }
        </div>
        <div className='flex justify-between'>
            <h2 className='font-bold text-lg md:text-xl'>Total</h2>
            <h2 className='font-bold text-lg md:text-xl text-orange-600'>{total}</h2>
        </div>
        <div className='text-center'>
            <button
                onClick={()=>navigate('/payment',{
                    state:{
                        item:cart,
                        total:total
                    }
                })
            } 
                className='bg-orange-600 text-white px-4 py-2 rounded-md hover:cursor-pointer   transition-all'
            >
               Proceed To Checkout
            </button>
        </div>
    </div>
  )
}

export default SummaryCard