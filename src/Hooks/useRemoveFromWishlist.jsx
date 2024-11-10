import PropTypes from 'prop-types';

import { toast } from "react-toastify";

const useRemoveFromWishlist = ({specificGadget,wishList,setWishList}) => {
    const removeFromWishlist=()=>{
        const remainingWishGadgets =wishList.filter(gadget=>gadget.product_id !== specificGadget.product_id)
        toast.info(`You've removed ${specificGadget.product_title} from the wishlist.`)
        setWishList(remainingWishGadgets)
    }

    return removeFromWishlist
};

useRemoveFromWishlist.propTypes = {
    specificGadget: PropTypes.object.isRequired,
    wishList: PropTypes.array.isRequired,
    setWishList: PropTypes.func.isRequired
};

export default useRemoveFromWishlist;