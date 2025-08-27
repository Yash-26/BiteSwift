import { Clock, Contact2, Star, UsersRound } from 'lucide-react'
import React from 'react'

function Feature() {

    const features = [
        {
            icon: <Clock />,
            lable: 'Fast Delivery',
            content: 'Get your food delivered in 30 minutes or less'
        },
        {
            icon: <Star />,
            lable: 'Quality Food',
            content: 'Fresh ingredients and top-rated restaurants'
        },
        {
            icon: <UsersRound />,
            lable: 'Great Service',
            content: '24/7 customer support and easy ordering'
        }
    ]
  return (
    <div className=' bg-white flex flex-col items-center justify-center py-16 gap-20'>
        <div className=' mt-14 flex flex-col gap-5'>
            <h2 className='font-bold text-3xl text-center'>Why Choose BiteSwift?</h2>
            <p className='text-gray-600 text-center font-semibold  text-lg '>Experience the best food delivery service</p>
        </div>
        <div className='md:flex'>
            {
                features.map((feature,index) => (
                    <div className='space-y-10 my-5 md:mx-5 md:my-0 lg:mx-10 p-5 rounded-2xl hover:shadow-lg transition-shadow' key={index}>
                        <div className='flex justify-center'>
                            <div className='bg-orange-100 text-orange-600 rounded-full p-5'>{feature.icon}</div>
                        </div>
                        <div className='space-y-5'>
                            <h3 className='text-center font-bold text-xl'>{feature.lable}</h3>
                            <p className='text-center text-lg text-gray-700 max-w-[200px] xl:max-w-[300px]'>{feature.content}</p>
                        </div>

                    </div>
                ))
            }
        </div>
        
    </div>
  )
}

export default Feature