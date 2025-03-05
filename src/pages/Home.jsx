import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { fetchAllProducts } from '../redux/slices/productSlice'
import { useDispatch } from 'react-redux'

const Home = () => {

  const dispatch=useDispatch()
  console.log(dispatch)

  useEffect(()=>{
    dispatch(fetchAllProducts() )
    },[])



  return (
    <div>
      <Header/>
      <div className='pt-30'>
     
        <>
        <div className="grid grid-cols-4 gap-3 m-2">
          <div className='border shadow p-3'>
            <img src="https://www.pngmart.com/files/23/Gorillaz-PNG-File.png" alt="" />
            <div className="text-center">
              <h3 className='font-bold  text-xl mb-2'>Archa jabbar</h3>
              <Link to={'/id/view'} className=' border boder-2 ps-2 pe-2 mb-2 bg-red-600 text-white'>View more..</Link>
            </div>
          </div>
        </div>
        </>
      </div>
    </div>
  )
}

export default Home
