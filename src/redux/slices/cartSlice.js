import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart:(state,data)=>{
            const existingProduct=state.find((a)=>a['id']==data.payload.id)
            if(existingProduct){
                existingProduct.quantity++
                existingProduct.totalPrice=existingProduct.price*existingProduct.quantity
                const remainingProducts=state.filter((a)=>a['id']!=existingProduct.id)
                state=[...remainingProducts,existingProduct]
            }else{
                state.push({...data.payload,quantity:1,totalPrice:data.payload.price})
            }
        },
        decrementCart:(state,data)=>{
            const existingProduct=state.find((a)=>a['id']==data.payload.id)
            if(existingProduct){
                existingProduct.quantity--
                existingProduct.totalPrice=existingProduct.price*existingProduct.quantity
                const remainingProducts=state.filter((a)=>a['id']!=existingProduct.id)
                state=[...remainingProducts,existingProduct]
            }else{
                state.push({...data.payload,quantity:1,totalPrice:data.payload.price})
            }
        },
        removeFromCart:(state,data)=>{
            return state.filter((a)=>a.id!=data.payload)
        },
        emptyCart:(state)=>{
           return state=[]
        }
    }
})

export default cartSlice.reducer;
export const {addToCart,decrementCart,removeFromCart,emptyCart}=cartSlice.actions