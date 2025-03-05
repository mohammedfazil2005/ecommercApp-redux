import React from 'react'
import Header from '../components/Header'

const View = () => {
  return (
    <div >
      <Header/>
      <>
      <div className='pt-30'>
        <div className="grid grid-cols-2">
          <div>
           <img src="https://www.pngmart.com/files/23/Gorillaz-PNG-File.png" alt="" />
           <div className='flex justify-around mt-10'>
            <button className='bg-green-500 border rounded p-1 ms-2'>Add to wishlist</button>
            <button className='bg-blue-400 border rounded p-1'>Add to cart</button>
           </div>
          </div>
          <div >
            <h6 className='font-bold'>PID:1</h6>
            <h1 className='text-xl font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing eli</h1>
            <h5 className='text-xl text-blue-600 font-bold'>₹9.99</h5>
            <p>Brand :essence</p>
            <p>Category:anime</p>
            <p><span className='font-bold'>Description  </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quae nesciunt accusamus alias quibusdam dignissimos quos dolore excepturi. Nihil officiis et voluptas possimus accusamus dolores error quasi dignissimos, non debitis.</p>
            <h1 className='mt-10'>Client reviews</h1>
            <div className='border shadow rounded me-2 border-red-50 p-2'>
              <h3><span className='font-bold'>Jhon doe:</span>Verr very happy for this!</h3>
              <p><span>Rating:</span>2⭐</p>
            </div>
          </div>
        </div>
      </div>
      </>
    </div>
  )
}

export default View
