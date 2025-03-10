import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { fetchAllProducts } from '../redux/slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { all } from 'axios'

const Home = () => {

  const dispatch=useDispatch()

  const {allProducts,isLoading,errorMessage}=useSelector(state=>state.productsFetch)

  console.log(allProducts)

  useEffect(()=>{
    dispatch(fetchAllProducts() )
    },[])



  return (
    <div>
      <Header fromHomeComponent={true}/>
      <div className='pt-30'>
        {isLoading?(
          <div className='flex justify-center'>

          <img src="https://i.gifer.com/ZKZg.gif" alt="" />

        </div>

        ):

        <div className='grid grid-cols-4 gap-3 m-2'>
          {
             allProducts?.length>0?allProducts?.map((a)=>(
              <div className="">
               <div className='border shadow p-3'>
                 <img src={a.thumbnail} alt="" />
                 <div className="text-center">
                   <h3 className='font-bold  text-xl mb-2'>{a.title}</h3>
                   <Link to={`/${a.id}/view`} className=' border boder-2 ps-2 pe-2 mb-2 bg-red-600 text-white'>View more..</Link>
                 </div>
               </div>
             </div>
            )):""
          
          }
        </div>
        
    
          
       
      }
       
      </div>
    </div>
  )
}

export default Home
