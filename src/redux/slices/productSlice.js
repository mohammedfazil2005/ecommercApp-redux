import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts=createAsyncThunk("prodcuts/fetchAllProducts",async()=>{
    let {data}=await axios.get("https://dummyjson.com/products")
    console.log(data)
    return data
})

const productSlice=createSlice({
    name:"products",
    initialState:{allProducts:[]},
    reducers:{

    }
})