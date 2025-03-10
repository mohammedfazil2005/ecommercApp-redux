import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts=createAsyncThunk("prodcuts/fetchAllProducts",async()=>{
    let {data}=await axios.get("https://dummyjson.com/products")
    return data.products
},{})



const productSlice=createSlice({
    name:"products",
    initialState:{allProducts:[],dummyProducts:[],isLoading:false,errorMessage:""},
    reducers:{
        searchProducts:(state,value)=>{
            state.allProducts=state.dummyProducts.filter((a)=>a['title'].toLowerCase().includes(value.payload.toLowerCase()))
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAllProducts.fulfilled,(state,data)=>{
            state.allProducts=data.payload,
            state.dummyProducts=data.payload
            state.isLoading=false,
            state.errorMessage=""
        })
        builder.addCase(fetchAllProducts.pending,(state,data)=>{
            state.dummyProducts=[]
            state.allProducts=[]
            state.isLoading=true
            state.errorMessage=""
        })
        builder.addCase(fetchAllProducts.rejected,(state,data)=>{
            state.dummyProducts=[]
            state.allProducts=[]
            state.isLoading=false
            state.errorMessage="Error Occured!"
        })
    }
})

const singleProducts=createSlice({
    name:"singleProduct",
    initialState:{
        product:[],
        isLoading:false,
        errorMessage:""
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProductsById.fulfilled,(state,data)=>{
            state.product=data.payload,
            state.isLoading=false
            state.errorMessage=""
        })
        builder.addCase(fetchProductsById.pending,(state,data)=>{
            state.product=[],
            state.isLoading=true
            state.errorMessage=""
        })
        builder.addCase(fetchProductsById.rejected,(state,data)=>{
            state.product=[],
            state.isLoading=false
            state.errorMessage="Error occured"
        })
    }
})




export const {searchProducts}=productSlice.actions;
export default productSlice.reducer
