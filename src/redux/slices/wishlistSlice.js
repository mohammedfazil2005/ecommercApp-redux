import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:"whishlist",
    initialState:[],
    reducers:{
        addToWishList:(state,data)=>{
            state.push(data.payload)
        },
        removeFromWishList:(state,data)=>{
            return state.filter((a)=>a['id']!=data.payload.id)
        }
        
    }
})

export const {addToWishList,removeFromWishList}=wishlistSlice.actions;
export default wishlistSlice.reducer;