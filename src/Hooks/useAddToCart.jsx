import PropTypes from 'prop-types';

import { toast } from "react-toastify";

const useAddToCart = ({specificGadget, setCartList,totalCost, setTotalCost}) => {
    const addToCart=()=>{
        toast.success(`You've added ${specificGadget.product_title} to the cart.`)
        setCartList((preCartList=>[...preCartList,specificGadget]))
        setTotalCost(totalCost+specificGadget.price)
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