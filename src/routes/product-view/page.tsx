"use client";
import { fetchSingle } from "@/redux/slicers/single";
import { AppDispatch } from "@/redux/store";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const productView = () => {
    const [single, setSingle] = useState([])
    const params = useParams()
    console.log(params);
    
  useEffect(()=>{
    axios("https://fakestoreapi.com/products")
    .then(res=>setSingle(res.data))
    .catch(error=>console.log(error))
  }, [])

  return (
    <div className="single">
      <div className="container">
        <div className="single__wrapper"></div>
      </div>
    </div>
  );
};

export default productView;
