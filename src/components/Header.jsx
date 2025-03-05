import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   
      <nav className='flex bg-blue-400 w-full fixed justify-between p-4 items-center'>
        <Link to={'/'}><i className="fa-solid fa-truck-fast font-bold"></i>Daily cart</Link>
        <ul className='flex gap-5 items-center'>
          <li className='bg-white'><input type="text" placeholder='Search products here' className='border border-1 rounded p-2 w-80'/></li>
         <Link to={'/wishlist'}> <li><i className="fa-solid fa-heart text-red-600"></i>wishlist <span className='bg-gray-300  rounded p-1'>0</span></li></Link>
         <Link to={'/cart'}> <li><i className="fa-solid fa-cart-shopping text-green-600" ></i>cart <span  className='bg-gray-300  rounded p-1'>0</span></li></Link>
        </ul>
      </nav>

  
  )
}

export default Header

    