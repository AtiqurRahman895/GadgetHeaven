import PropTypes from 'prop-types';
import { useContext } from 'react';

import { toast } from "react-toastify";
import { TransferLists } from '../Contexts/TransferLists';

const useAddToCart = ({specificGadget}) => {
    const {setCartList} = useContext(TransferLists);
    const addToCart=()=>{
        toast.success(`You've added ${specificGadget.product_title} to the cart.`)
        setCartList((preCartList=>[...preCartList,specificGadget]))
    }

    return addToCart
};

useAddToCart.propTypes = {
    specificGadget: PropTypes.object.isRequired,
    setCartList: PropTypes.func.isRequired,
    totalCost: PropTypes.number.isRequired,
    setTotalCost: PropTypes.func.isRequired
};

export default useAddToCart;