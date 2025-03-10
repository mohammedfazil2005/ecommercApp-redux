import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import singleProduct from './slices/singleProductSlice'
import wishlistSlice from './slices/wishlistSlice'
import cartSlice from './slices/cartSlice'

const cartStore=configureStore({
    reducer:{
        productsFetch:productSlice,
        singleProducts:singleProduct,
        wishlist:wishlistSlice,
        cart:cartSlice
    }
})

export default cartStore



