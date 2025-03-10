import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { fetchAllProducts } from '../redux/slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { all } from 'axios'

const Home = () => {

  const dispatch=useDispatch()

  const {allProducts,isLoading,errorMessage}=useSelector(state=>state.productsFetch)

  const [currentPage,setCurrentPage]=useState(1)

  console.log(allProducts)

  let productPerPage=8
  let totalPage=Math.ceil(allProducts?.length / productPerPage)

  let lastIndexOfCurrentPage=currentPage*productPerPage
  let firstIndexOfCurrentPage=lastIndexOfCurrentPage-productPerPage


  let pageintaedArray=allProducts?.slice(firstIndexOfCurrentPage,lastIndexOfCurrentPage)

  
  const onBackward=()=>{
    if(currentPage>1){
      setCurrentPage(currentPage-1)
    }
  }

  const onForward=()=>{
    if(currentPage<totalPage){
      setCurrentPage(currentPage+1)
    }
  }


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
        <>
        <div className='grid grid-cols-4 gap-3 m-2'>
          {
             allProducts?.length>0?pageintaedArray?.map((a)=>(
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
        <div className='text-center font-bold m-5 text-xl'>
          <span onClick={()=>onBackward()}><i className='fa-solid fa-backward me-3 cursor-pointer'></i></span>
          <span className='m-3'>{currentPage} of {totalPage}</span>
          <span onClick={()=>onForward()}><i className='fa-solid fa-forward ms-3 cursor-pointer'></i></span>
        </div>
        </>
        
    
          
       
      }
       
      </div>
    </div>
  )
}

export default Home
