import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { TransferLists } from '../../Contexts/TransferLists';

const NavIndicator = ({itIsCart}) => {
    const navigate = useNavigate();  
    const {cartList,wishList,setShowCart} = useContext(TransferLists);
    const goToDashboardCart=(take)=>{
        setShowCart(take)
        navigate("/dashboard")
    }


    return (
        <>
                <div onClick={()=>goToDashboardCart(itIsCart?true:false)} role="button" className="hover:scale-105 duration-200">
                    <div className="indicator flex items-center gap-2">
                        {itIsCart?"View cart":"View Wishlist"}
                        {itIsCart?
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            :
                            <svg className="h-5 w-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="butt" strokeLinejoin="bevel" />
                            </svg>
                        }

                        <span className="badge badge-sm indicator-item top-[-5px]">{itIsCart?cartList.length:wishList.length}</span>
                    </div>
                </div>
        </>
    );
};

NavIndicator.propTypes = {
    itIsCart: PropTypes.bool.isRequired
};

export default NavIndicator;