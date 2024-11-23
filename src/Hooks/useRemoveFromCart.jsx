import PropTypes from 'prop-types';
import { useContext } from 'react';
import { toast } from "react-toastify";
import { TransferLists } from '../Contexts/TransferLists';

const useRemoveFromCart = ({specificGadget}) => {
    const {cartList, setCartList} = useContext(TransferLists);
    const removeFromCart=()=>{
        const targetedGadgetIndex =cartList.findIndex(gadget=>gadget.product_id === specificGadget.product_id)
        const remainingGadgetsInCart =cartList.filter((gadget,index)=>index !== targetedGadgetIndex)
      //   const remainingGadgetsInCart = cartList.filter((gadget, index) => 
      //     index !== cartList.findIndex(item => item.product_id === specificGadget.product_id)
      // );
        toast.info(`You've removed ${specificGadget.product_title} from the cartList.`)
        setCartList(remainingGadgetsInCart)
    }
    return removeFromCart
};

useRemoveFromCart.propTypes = {
    specificGadget: PropTypes.object.isRequired,
    cartList: PropTypes.array.isRequired,
    setCartList: PropTypes.func.isRequired,
    totalCost: PropTypes.number.isRequired,
    setTotalCost: PropTypes.func.isRequired

};

export default useRemoveFromCart;