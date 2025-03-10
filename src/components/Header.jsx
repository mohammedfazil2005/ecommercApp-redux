import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProducts } from '../redux/slices/productSlice'


const Header = ({fromHomeComponent}) => {
  const dispatch=useDispatch()
  const wishlist=useSelector(state=>state.wishlist)
 const cartProducts=useSelector(state=>state.cart)
  
  return (
   
      <nav className='flex bg-blue-400 w-full fixed justify-between p-4 items-center'>
        <Link to={'/'}><i className="fa-solid fa-truck-fast font-bold"></i>Daily cart</Link>
        <ul className='flex gap-5 items-center'>
         {fromHomeComponent? <li className='bg-white'><input onChange={(e)=>dispatch(searchProducts(e.target.value))} type="text" placeholder='Search products here' className='border border-1 rounded p-2 w-80'/></li>:""}
         <Link to={'/wishlist'}> <li><i className="fa-solid fa-heart text-red-600"></i>wishlist <span className='bg-gray-300  rounded p-1'>{wishlist?.length}</span></li></Link>
         <Link to={'/cart'}> <li><i className="fa-solid fa-cart-shopping text-green-600" ></i>cart <span  className='bg-gray-300  rounded p-1'>{cartProducts?.length}</span></li></Link>
        </ul>
      </nav>

  
  )
}

export default Header

    