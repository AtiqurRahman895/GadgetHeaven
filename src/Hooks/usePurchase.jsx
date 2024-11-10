import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const usePurchase = ({cartList,totalCost,setOpenModal,setOrderList,}) => {
    const confirmPurchase=()=>{
        if(cartList.length===0){
            toast.error("Your cart is empty. Add gadgets in the cart to purchase")
        }else{
            setOpenModal(true)
            const currentTime= new Date()
            const order= {
                date: currentTime.toLocaleDateString(),
                time: currentTime.toLocaleTimeString(),
                cost: totalCost,
                items: cartList,
            }

            setOrderList((prevOrderList) => [...prevOrderList, order])

        }
    }
    return confirmPurchase
};

usePurchase.propTypes = {
    cartList: PropTypes.array.isRequired,
    totalCost: PropTypes.number.isRequired,
    setOpenModal: PropTypes.func.isRequired,
    setOrderList: PropTypes.func.isRequired,
};

export default usePurchase;