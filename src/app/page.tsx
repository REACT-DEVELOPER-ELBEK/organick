"use client"
import './Home.scss'
import { fetchProducts } from "@/redux/slicers/data"
import { RootState } from "@/redux/store"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function Home() {
  const dispatch = useDispatch()
  const productData = useSelector((state:RootState)=>state.products)
    useEffect(()=>{
      dispatch(fetchProducts())
    })
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="home__wrapper">
            <div className="home__banner">
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
