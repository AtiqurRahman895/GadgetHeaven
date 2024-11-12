// import PropTypes from 'prop-types';

import { useContext } from "react";
import { TransferLists } from "../../Contexts/TransferLists";
import WishlistCard from "./WishlistCard";

const Wishlist = () => {
  const {wishList} = useContext(TransferLists);

    return (
        <section className="py-10">
            <div className="container space-y-5">
                <h4>Wishlist</h4>
                {wishList.length==0?
                <div className="place-items-center text-center space-y-4 py-10">
                    <h2 className="text-custom-purple">No gadgets have been added yet. Start by adding some to your wishlist!</h2>
                </div>:
                wishList.map((eachWishListItem,index)=>(
                    <WishlistCard key={index} specificGadget={eachWishListItem}/>
                ))
                }
            </div>
        </section>
    );
};

// Wishlist.propTypes = {
    
// };

export default Wishlist;