import PropTypes from 'prop-types';
import { toast } from "react-toastify";

const useRemoveFromCart = ({specificGadget,cartList,setCartList,totalCost,setTotalCost}) => {
    const removeFromCart=()=>{
        const removeOnlyFirstoneWithId=(arr, id)=>{
            for (let i = 0; i < arr.length; i++) {
              if (arr[i].product_id === id) {
                arr.splice(i, 1);
                break; 
              }
            }
            return arr;
          }
        const remainingCartList=removeOnlyFirstoneWithId(cartList, specificGadget.product_id)
        toast.info(`You've removed ${specificGadget.product_title} from the cart.`)
        setCartList(remainingCartList)
        setTotalCost(totalCost-specificGadget.price)
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