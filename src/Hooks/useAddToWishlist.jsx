// import React from 'react';
import PropTypes from 'prop-types';

import { toast } from "react-toastify";

const useAddToWishlist = ({specificGadget,setWishList}) => {
    const addToWishList=()=>{
        toast.success(`You've added ${specificGadget.product_title} to the wishlist.`)
        setWishList((preWishList=>[...preWishList,specificGadget]))
    }

    return addToWishList
};

useAddToWishlist.propTypes = {
    specificGadget: PropTypes.object.isRequired,
    setWishList: PropTypes.func.isRequired
};

export default useAddToWishlist;