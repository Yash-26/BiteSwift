import { ArrowLeft } from 'lucide-react';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useUser } from '../context/UserContext';
import toast from 'react-hot-toast';

function Login() {

    const navigate = useNavigate();
    const {loginUser} = useUser();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        try{
            const res = await axios.post('http://localhost:5000/api/auth/login',formData);
            loginUser(res.data.user);
            toast.success('Login Successful');
            navigate('/');
        }catch(err){
            console.log('Error', err.message);
            toast.error('Invalid Credentials');
        }

    }

  return (
    <>

    <div className='min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex flex-col items-center justify-center p-4'>
        
        <div className=' max-w-md mb-8 relative right-28 md:right-40'>
            <Link to='/' className='flex items-center text-orange-600 hover:text-orange-700'>
                <ArrowLeft className='h-4 w-4 mr-2' />
                Back To Home
            </Link>
        </div>
        <div className='bg-white rounded-lg shadow-md border border-gray-200 w-full max-w-md '>
            <div className='p-6 text-center border-b border-gray-200 '>
                <h2 className='text-2xl font-bold text-orange-600'>BiteSwift</h2>
                <p className='text-gray-600 mt-2'>Sign in to your account</p>
            </div>
            <div className='p-6'>
                <form className='space-y-5' onSubmit={handleSubmit}>
                    <div className='space-y-2'>
                        <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
                        <input 
                            id='email'
                            name='email'
                            type='email'
                            placeholder='Enter Your Email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500'
                        />
                    </div>
                    <div>
                        <label htmlFor='pswd' className='block text-sm font-medium text-gray-700'>Password</label>
                        <input
                            id='pswd'
                            name='password'
                            type='password'
                            placeholder='Enter Your Password'
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500'

                        />
                    </div>
                    <button
                        type='submit'
                        className='w-full bg-orange-600 text-white font-medium px-4 py-2 rounded-md hover:bg-orange-700 transition-colors'
                    >Sign In</button>
                </form>

                <div className='mt-6 text-center'>
                    <p className='text-sm text-gray-600'>
                        {"Don't have an Account?"}
                        <Link to='/register' className='font-medium text-orange-600 hover:text-orange-700' >Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login