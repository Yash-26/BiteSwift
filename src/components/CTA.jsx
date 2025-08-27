import React from 'react'
import { Link } from 'react-router-dom'

function CTA() {
  return (
    <div className='bg-orange-600 flex flex-col items-center gap-10 py-16'>
        <div className='text-center space-y-2'>
            <h2 className='font-bold text-white text-4xl'>Ready to Order?</h2>
            <p className='text-white text-lg'>Join thousands of satisfied customers</p>
        </div>
        <div>
            <button className='bg-white text-orange-600 px-4 py-2 rounded-md text-lg font-semibold'>
                <Link to='/dashboard' >Start Ordering Now</Link>
            </button>
        </div>
    </div>
  )
}

export default CTA