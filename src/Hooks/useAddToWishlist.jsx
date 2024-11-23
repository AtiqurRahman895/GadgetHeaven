// import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { toast } from "react-toastify";
import { TransferLists } from '../Contexts/TransferLists';

const useAddToWishlist = ({specificGadget}) => {
    const {setWishList} = useContext(TransferLists);
    const addToWishList=()=>{
        setWishList((preWishList=>[...preWishList,specificGadget]))
        toast.success(`You've added ${specificGadget.product_title} to the wishlist.`)

    }

    return addToWishList
};

useAddToWishlist.propTypes = {
    specificGadget: PropTypes.object.isRequired,
    setWishList: PropTypes.func.isRequired
};

export default useAddToWishlist;