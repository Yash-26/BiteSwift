import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { Menu, ShoppingCart, X } from 'lucide-react'
import { useUser } from '../context/UserContext'
import toast from 'react-hot-toast';

function Navbar() {

  const {user, logoutUser} = useUser();

  const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false)

    const navlinks = [
      {name:"Cart", path:'/cart'},
      {name:"Login", path:'/login'},
      {name:"Register", path:'/register'}
    ]
  

    const handleLogOut = () => {
      logoutUser();
      toast.success('Logged Out');
      navigate('/');
      
    }

  return (
    <nav className='bg-white flex justify-between p-5'>
        <div>
            <Link to='/' className='text-orange-600 font-extrabold text-3xl'>BiteSwift</Link>
        </div>

        {/* Hamburger Icon */}
        <div className='m-1 pr-0 md:hidden transition-all'>
          <button onClick={()=> setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {
          !user ? (
            menuOpen &&(
            <ul className='absolute -right-1 top-16 text-center px-2 py-2 bg-white rounded-md md:hidden z-40 transition-all '>
              {
                navlinks.map((nav,index)=>(
                  <li key={index}>
                    <Link to={nav.path} >{nav.name =="Cart"?(
                      <div className='flex items-center justify-center'>
                        {nav.name} <ShoppingCart className='w-3 h-3 ml-1' />
                      </div>
                    ) : (
                      nav.name
                    )

                    }</Link>
                  </li>
                ))
              }
            </ul>
          )
          ) : (
            menuOpen &&(
            <ul className='absolute -right-1 top-16 text-center px-2 py-2 bg-white rounded-md md:hidden z-40 transition-all '>
              <li className='flex items-center justify-center'>
                Cart <ShoppingCart className='w-3 h-3 ml-1' />
              </li>
              <li>
                <button onClick={handleLogOut}>Logout</button>
              </li>
            </ul>
          )            
          )
        }
       
        <div className='md:flex items-center hidden'>
            {
              !user? (
                <div className='flex gap-5 items-center transition-all'>
                  <Link to='/cart' className='flex items-center px-4 py-2 bg-white rounded-md shadow-md hover:scale-90 transition-all' >
                    {"Cart"} <ShoppingCart className='h-4 w-4 ml-2'/> 
                  </Link>
                  <Link to='/login' className='text-gray-700 hover:text-gray-900 text-sm'>Login</Link>
                
                  <Link to='/register' className='bg-orange-600 px-4 py-2 rounded-md text-white hover:bg-orange-700 text-sm' >Sign Up</Link> 
                </div>
              ) : (
                <div className='flex gap-5 items-center transition-all'>
                  <Link to='/cart' className='flex items-center px-4 py-2 bg-white rounded-md shadow-md hover:scale-90 transition-all' >
                    {"Cart"} <ShoppingCart className='h-4 w-4 ml-2'/> 
                  </Link>
                  <button className='bg-orange-600 px-4 py-2 rounded-md text-white hover:bg-orange-700 text-sm hover:cursor-pointer' onClick={handleLogOut}>Logout</button> 
                </div>
              )
            }
        </div>

        
    </nav>
  )
}

export default Navbar