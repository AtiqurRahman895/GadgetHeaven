import PropTypes from 'prop-types';
import useAddToCart from "../../Hooks/useAddToCart";
import useRemoveFromWishlist from "../../Hooks/useRemoveFromWishlist"

const WishlistCard = ({specificGadget}) => {
    const addToCart = useAddToCart({specificGadget});
    const removeFromWishlist=useRemoveFromWishlist({specificGadget})

    return (
        <div className="space-y-3">

            <div className="p-4 rounded-lg bg-white flex flex-col-reverse sm:flex-row items-center gap-3 relative">
                <button onClick={removeFromWishlist} className="btn btn-xs sm:btn-sm hover:bg-custom-purple hover:text-white btn-circle absolute right-2 top-2">
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

                    <div onClick={addToCart} className="primaryButton activePrimaryButton flex flex-nowrap gap-1 items-center">
                        Add To Card
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>

                </div>
            </div>
        </div>
    );
};

WishlistCard.propTypes = {
    specificGadget: PropTypes.object.isRequired
};

export default WishlistCard;