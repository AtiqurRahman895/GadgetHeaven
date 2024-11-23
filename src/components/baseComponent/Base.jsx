// import React from 'react';
// import PropTypes from 'prop-types';

import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import { TransferLists } from "../../Contexts/TransferLists";

const Base = () => {
  const [cartList, setCartList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [showCart, setShowCart]=useState(true)
  const [orderList, setOrderList] = useState([]);
  const [openModal, setOpenModal]= useState(false)
  const [loading, setLoading]= useState(true)

  const value={
    loading, setLoading,
    cartList, setCartList,
    wishList, setWishList,
    totalCost, setTotalCost,
    showCart, setShowCart,
    orderList, setOrderList,
    openModal, setOpenModal,
  }

  useEffect(()=>{
    if(window.localStorage.getItem('wishList')){
      setWishList(JSON.parse(window.localStorage.getItem('wishList')))
    }
    if(window.localStorage.getItem('cartList')){
      setCartList(JSON.parse(window.localStorage.getItem('cartList')))
    }
    if(window.localStorage.getItem('orderList')){
      setOrderList(JSON.parse(window.localStorage.getItem('orderList')))
    }
    setLoading(false)
  },[])

  useEffect(()=>{
    // console.log(loading)
    loading || window.localStorage.setItem('cartList',JSON.stringify(cartList))
    setTotalCost(0)
    cartList.forEach((gadget)=>{
      setTotalCost(pre=>pre+gadget.price)
    })
  },[cartList])

  useEffect(()=>{
    loading || window.localStorage.setItem('wishList',JSON.stringify(wishList))
  },[wishList])

  useEffect(()=>{
    loading || window.localStorage.setItem('orderList',JSON.stringify(orderList))
  },[orderList])


  return (
    <>
      <TransferLists.Provider value={value}>
        <Header />
        <Outlet />
        <Footer />
      </TransferLists.Provider>

    </>
  );
};

// Base.propTypes = {

// };

export default Base;
