import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import sample from '../assets/Character Design.jpeg';
import FoodCard from '../components/FoodCard';
import { useFood } from '../context/FoodContext';
import axios from 'axios';

function Dashboard() {

    const categories = ["All", "Starters", "Main Course", "Beverages", "Desserts"];
    const [selectedCategory, setSelectedCategory] = useState("All");
    const {menuItems} = useFood();

    const filteredItems = selectedCategory ==="All"
        ? menuItems 
        : menuItems.filter(item => item.category==selectedCategory);


  return (
    <div>
        <Navbar />
        <div className='bg-[#f6f6f6] transition-all'>
            <div className='text-center space-y-3 pt-6'>
                <h2 className='font-bold text-xl'>Our Menu</h2>
                <p className='text-sm text-gray-700'>Discover our delicious selection of food and beverages</p>
            </div>
            <div className='flex text-xs md:text-base gap-3 flex-wrap my-10 justify-center'>
                {
                    categories.map((category,index)=>(
                        <button
                        key={index}
                        onClick={()=>setSelectedCategory(category)}
                        className={`rounded-md px-4 py-2 border hover:cursor-pointer hover:scale-95 transition-all
                                    ${selectedCategory===category
                                        ? 'bg-orange-600 text-white'
                                        : 'bg-white text-gray-600'
                                    }`}
                        >
                            {category}
                        </button>
                    ))
                }
            </div>
            <div className='flex flex-wrap p-5 justify-center transition-all'>
                {
                    filteredItems.map((item,index)=>(
                        
                        <FoodCard key={index} item={item}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Dashboard