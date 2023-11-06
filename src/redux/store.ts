"use client"
import { configureStore } from '@reduxjs/toolkit'
import productsSlicer from './slicers/data'
import singleSlicer from './slicers/single'

export const store = configureStore({
  reducer: {
    products: productsSlicer,
    single: singleSlicer
  },
})

export type AppDispatch = typeof store.dispatch;
export default store;