import React from 'react'
import Header from '../components/Header'

const Wishlist = () => {
  return (
    <div>
      <Header/>
      <div className="pt-30 ms-3">
        <>
        <h1>My wishist</h1>
        <div className="grid grid-cols-4 gap-3 m-2">
          <div className='border shadow p-3'>
            <img src="https://www.pngmart.com/files/23/Gorillaz-PNG-File.png" alt="" />
            <div className="text-center">
              <h3 className='font-bold  text-xl mb-2'>Archa jabbar</h3>   
            </div>
           <div className='flex justify-evenly'>
            <button className='text-lg'><i className="fa-solid fa-heart-circle-plus text-red-600"></i></button>
            <button className='text-lg'><i className="fa-solid fa-cart-shopping text-green-600"></i></button>
           </div>
          </div>
        </div>
        </>
      </div>
    </div>
  )
}

export default Wishlist
