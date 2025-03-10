import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishList } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'


const Wishlist = () => {
  const wishlist=useSelector(state=>state.wishlist)
  const dispatch=useDispatch()
   const cartProducts=useSelector(state=>state.cart)

     const onCartClick=(product)=>{
       dispatch(removeFromWishList(product))
       const isProductexists=cartProducts.find((a)=>a['id']==product.id)
       dispatch(addToCart(product))
       if(isProductexists){
         alert("Product incremented in your cart!")
       }else{
         alert("product added to cart!")
       }
   
     }

  return (
    <div>
      <Header/>
      <div className="pt-30 ms-3">
      <h1 className='text-4xl font-bold'>My wishist</h1>
        {wishlist?.length>0?
         <>

         {wishlist.map((a)=>(
         <div className="grid grid-cols-4 gap-3 m-2">
         <div className='border shadow p-3'>
           <img src={a?.thumbnail} alt="" />
           <div className="text-center">
             <h3 className='font-bold  text-xl mb-2'>{a?.title}</h3>   
           </div>
          <div className='flex justify-evenly'>
           <button className='text-lg' onClick={()=>dispatch(removeFromWishList(a))}><i className="fa-solid fa-heart-circle-plus text-red-600"></i></button>
           <button className='text-lg' onClick={()=>onCartClick(a)}><i className="fa-solid fa-cart-shopping text-green-600"></i></button>
          </div>
         </div>
       </div>
    
         ))}
            </>
         
        
      :<div className='flex justify-center'>
        <img src="https://assets-v2.lottiefiles.com/a/0953d504-117d-11ee-aa49-1f149204cb5f/9uZcoEJaoF.gif" alt="" />
        </div>}
       
      </div>
    </div>
  )
}

export default Wishlist
