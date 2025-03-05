import React from 'react'
import Header from '../components/Header'

const Cart = () => {
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
                <tr className='text-center '>
                  <td>1</td>
                  <td>Product</td>
                  <td>
                    <div className='flex justify-center'>
                    <img style={{width:'100px'}} src="https://www.pngmart.com/files/23/Gorillaz-PNG-File.png" alt="" />
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center">
                      <button className='font-bold'>-</button>
                      <input type="text"style={{width:"40px"}} className='border m-2 font-bold rounded text-center' value={0} readOnly/>
                      <button className='font-bold'>+</button>
                    </div>
                  </td>
                  <td>price</td>
                 <td> <button><i class="fa-solid fa-trash text-red-600"></i></button></td>
                  
                </tr>
               
              </tbody>
            </table>
            <div className="float-right">
                  <button className='p-1 rounded bg-red-600 me-3 text-white shadow'>EMPTY CART</button>
                  <button className='p-1 rounded bg-blue-500'>SHOP MORE</button>
                </div>
          </div>
          <div className='border rounded shadow p-4'>
            <h1 className='text-2xl font-bold'>Total Amount <span className='text-red-400'>$ 9.99</span></h1>
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
