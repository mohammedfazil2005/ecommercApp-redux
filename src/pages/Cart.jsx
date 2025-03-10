import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice'

const Cart = () => {
  const cartProducts=useSelector(state=>state.cart)

  const dispatch=useDispatch()

  const [total,setTotal]=useState(0)

  
  useEffect(()=>{
   setTotal(cartProducts?.reduce((a,b)=>a+b['totalPrice'],0))
  },[cartProducts])


  return (
    <>
    <Header/>
    <div className='pt-20'>
      <div className='m-3'>
        <h1 className='text-5xl font-bold '>Cart Summary</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className='col-span-2 border rounded shadow p-4'>
            <table className='w-full'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th><i className="fa-solid fa-ellipsis"></i></th>
                </tr>
              </thead>
              <tbody>
                {cartProducts?.length>0?cartProducts?.map((a,index)=>(
                  <tr className='text-center '>
                  <td>{index+1}</td>
                  <td>{a.title}</td>
                  <td>
                    <div className='flex justify-center'>
                    <img style={{width:'100px'}} src={a.thumbnail} alt="" />
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center">
                      <button className='font-bold'>-</button>
                      <input type="text"style={{width:"40px"}} className='border m-2 font-bold rounded text-center' value={a.quantity} readOnly/>
                      <button className='font-bold' onClick={()=>dispatch(addToCart(a))}>+</button>
                    </div>
                  </td>
                  <td>{a.totalPrice}</td>
                 <td> <button><i class="fa-solid fa-trash text-red-600"></i></button></td>
                  
                </tr>
                )):""}
               
              </tbody>
            </table>
            <div className="float-right">
                  <button className='p-1 rounded bg-red-600 me-3 text-white shadow'>EMPTY CART</button>
                  <button className='p-1 rounded bg-blue-500'>SHOP MORE</button>
                </div>
          </div>
          <div className='border rounded shadow p-4'>
            <h1 className='text-2xl font-bold'>Total Amount <span className='text-red-400'>$ {total}</span></h1>
            <hr className='mt-2'/>
            <button className='bg-green-600 text-white border p-2 rounded border w-full mt-3'>Check out</button>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default Cart
