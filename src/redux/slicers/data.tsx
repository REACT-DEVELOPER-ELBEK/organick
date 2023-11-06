"use client"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/data", async () => {
  try {
    let response = await axios("https://fakestoreapi.com/products");
    return response.data
  } catch (error) {
    console.log(error);
  }
});

interface initialType {
  loading: boolean;
  data: [] | null;
  error: boolean;
}

export const initialState: initialType = {
  loading: false,
  data: [],
  error: false,
};

const productsSlicer = createSlice({
  name: "productsData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state)=>{
        state.loading = true
    }).addCase(fetchProducts.fulfilled, (state, action)=>{
        state.data = action.payload
    }).addCase(fetchProducts.rejected, (state)=>{
        state.error = true
        console.log("@fetching_products_error")
    })
  },
});

export default productsSlicer.reducer