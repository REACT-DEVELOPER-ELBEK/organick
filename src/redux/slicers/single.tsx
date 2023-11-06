"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingle = createAsyncThunk("products/single", async () => {
  try {
    let response = await axios("https://fakestoreapi.com/products/:id");
    return response.data;
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
} as any;

const singleSlicer = createSlice({
  name: "single",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingle.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingle.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(fetchSingle.rejected, (state) => {
        state.error = true;
        console.log("@fetching_products_error");
      });
  },
});

export default singleSlicer.reducer;
