"use client"
import { configureStore } from '@reduxjs/toolkit'
import productsSlicer from './slicers/data'

export const store = configureStore({
  reducer: {
    products: productsSlicer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch