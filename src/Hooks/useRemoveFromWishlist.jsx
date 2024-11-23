import PropTypes from 'prop-types';
import { useContext } from 'react';

import { toast } from "react-toastify";
import { TransferLists } from '../Contexts/TransferLists';

const useRemoveFromWishlist = ({specificGadget,}) => {
    const {wishList,setWishList} = useContext(TransferLists);
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