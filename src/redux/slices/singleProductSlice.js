import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProductsById=createAsyncThunk("prodcuts/fetchAllProducts",async(id)=>{
    let {data}=await axios.get(`https://dummyjson.com/products/${id}`)
    return data;
},{})


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


export default singleProducts.reducer