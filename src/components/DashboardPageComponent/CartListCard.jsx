import PropTypes from 'prop-types';
import { useContext } from 'react';
import useRemoveFromCart from '../../Hooks/useRemoveFromCart';
import { TransferLists } from '../../Contexts/TransferLists';
import { Link } from 'react-router-dom';

const CartListCard = ({specificGadget}) => {
    const {cartList,setCartList,totalCost,setTotalCost} = useContext(TransferLists);
    const removeFromCart=useRemoveFromCart({specificGadget,cartList,setCartList,totalCost,setTotalCost})

    return (
        <div className="space-y-3">

            <div className="p-4 rounded-lg bg-white flex flex-col-reverse sm:flex-row items-center gap-3 relative">
                <button onClick={removeFromCart} className="btn btn-xs sm:btn-sm hover:bg-custom-purple hover:text-white btn-circle absolute right-2 top-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-5 w-4 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <img src={specificGadget.product_image} alt="" className='bg-custom-ash rounded-lg w-full sm:w-auto h-auto sm:h-[160px]'/>

                <div className="space-y-3 ">


                    <h6>{specificGadget.product_title}</h6>

                    <p>
                        <b>Description: </b> {specificGadget.description}
                    </p>

                    <p className="">
                        Price: $<span className="text-custom-orange"> {specificGadget.price}</span>
                    </p>

                    <div className="primaryButton activePrimaryButton">
                        <Link to={`/gadget/${specificGadget.product_id}`} type="button" className="text-nowrap">
                            View Details
                        </Link>
                    </div>



                </div>
            </div>
        </div>
    );
};

CartListCard.propTypes = {
    specificGadget: PropTypes.object.isRequired
};

export default CartListCard;