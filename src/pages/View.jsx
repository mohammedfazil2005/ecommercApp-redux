import React, { useEffect } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsById } from '../redux/slices/singleProductSlice'
import { addToWishList } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

const View = () => {
  const {product}=useSelector(state=>state.singleProducts)
  const wishlist=useSelector(state=>state.wishlist)
  const cartProducts=useSelector(state=>state.cart)

  console.log(product)


  const {id}=useParams()
  const dispatch=useDispatch()
  console.log(id)

  const onAddToWishList=(proDetails)=>{
    const isProductAlreadyExists=wishlist.find((a)=>a['id']==proDetails.id)
    if(isProductAlreadyExists){
      alert('Product already exists!')
    }else{
      dispatch(addToWishList(proDetails))
    }

  }

  const onCartClick=(product)=>{
    
    const isProductexists=cartProducts.find((a)=>a['id']==product.id)
    dispatch(addToCart(product))
    if(isProductexists){
      alert("Product incremented in your cart!")
    }else{
      alert("product added to cart!")
    }

  }
 


  useEffect(()=>{
    dispatch(fetchProductsById(id))
  },[])


  return (
    <div >
      <Header/>
      <>
      <div className='pt-30'>
        <div className="grid grid-cols-2">
          <div>
           <img src={product.thumbnail} alt="" />
           <div className='flex justify-around mt-10'>
            <button className='bg-green-500 border rounded p-1 ms-2' onClick={()=>onAddToWishList(product)}>Add to wishlist</button>
            <button className='bg-blue-400 border rounded p-1' onClick={()=>onCartClick(product)}>Add to cart</button>
           </div>
          </div>
          <div >
            <h6 className='font-bold'>PID:{product.id}</h6>
            <h1 className='text-xl font-bold'>{product.title}</h1>
            <h5 className='text-xl text-blue-600 font-bold'>₹{product.price}</h5>
            <p>Brand :{product.brand}</p>
            <p>Category:{product.category}</p>
            <p><span className='font-bold'>Description  </span>{product.description}</p>
            <h1 className='mt-10'>Client reviews</h1>
           {product.reviews?.map((a)=>(
             <div className='border shadow rounded me-2 border-red-50 p-2'>
             <h3><span className='font-bold'>{a.reviewerName}:</span>{a.comment}</h3>
             <p><span>Rating:</span>2⭐</p>
           </div>
           ))}
            
          </div>
        </div>
      </div>
      </>
    </div>
  )
}

export default View
