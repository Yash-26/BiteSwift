import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function Hero() {
  return (
    <div className='py-20 bg-gradient-to-br from-orange-50 to-red-50 flex flex-col items-center justify-center p-5 gap-10'>
        
                <div className='space-y-5'>
                    <h1 className='text-center font-extrabold text-4xl md:text-6xl'>Delicious Food</h1>
                    <h1 className='text-center font-extrabold text-4xl md:text-6xl text-orange-600'>Delivered Fast</h1>
                    <p className='max-w-md md:max-w-xl text-center text-gray-600 text-xl'>Order your favorite meals from the best restaurants in town. Fresh, 
                      fast, and delivered right to your doorstep.</p>
                </div>
                <div className='space-x-5 md:space-x-10 flex'>
                    <button className='bg-orange-600 px-4 py-2 rounded-md text-white text-lg md:text-xl flex items-center'>
                        <Link to='/dashboard' >Order Now</Link>
                        <ArrowRight className='h-5 w-5 ml-2'/>
                    </button>
                    <button className='bg-white px-4 py-2 rounded-md text-lg md:text-xl'>
                        <Link to='/dashboard' >View Menu</Link>
                    </button>
                </div>
        
    </div>
  )
}

export default Hero