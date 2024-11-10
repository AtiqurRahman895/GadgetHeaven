// import React from 'react';
// import PropTypes from 'prop-types';

import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import { TransferLists } from "../../Contexts/TransferLists";

const Base = () => {
  const [cartList, setCartList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [showCart, setShowCart]=useState(true)
  const [orderList, setOrderList] = useState([]);



  return (
    <>
      <TransferLists.Provider value={[cartList, setCartList,wishList, setWishList,totalCost, setTotalCost, showCart, setShowCart,orderList, setOrderList]}>
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
