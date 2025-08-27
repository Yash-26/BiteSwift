import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Landing from './pages/Landing.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Checkout from './pages/Checkout.jsx'
import { FoodProvider } from './context/FoodContext.jsx'
import Payment from './pages/Payment.jsx'
import Confirmation from './pages/Confirmation.jsx'
import Cart from './pages/Cart.jsx'
import { UserProvider } from './context/UserContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { Toaster } from 'react-hot-toast';

function App() {
  

  return (
    <div>
      <Toaster position='top-right' reverseOrder={false} />
      <UserProvider>
        <FoodProvider>
          <CartProvider>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/confirmation' element={<Confirmation />} />
                <Route path='/cart' element={<Cart />} />
              </Routes>
            </BrowserRouter>
          </CartProvider>
        </FoodProvider>
      </UserProvider>
    </div>
  
  )
}

export default App
