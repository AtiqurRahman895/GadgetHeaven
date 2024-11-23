// import PropTypes from 'prop-types';

import { useContext, useEffect, useRef, useState } from "react";
import { TransferLists } from "../../Contexts/TransferLists";
import CartListCard from "./CartListCard";
import sortIcon from "../../assets/sortIcon.svg"
import usePurchase from "../../Hooks/usePurchase";


const CartList = () => {
  const {cartList,setCartList,totalCost} = useContext(TransferLists);
  const [sortByPrice, setSortByPrice]= useState(false)

  const makeSort=()=>{
    setSortByPrice(!sortByPrice)
  }
  
  const orginalCartList= useRef([...cartList])

  useEffect(()=>{
  
    if(sortByPrice){
        const sortedCartList=[...cartList].sort((a,b)=>b.price-a.price)
        setCartList(sortedCartList)

    }else {
        setCartList(orginalCartList.current)
    }

  },[sortByPrice,setCartList])
  
  const confirmPurchase= usePurchase()

    return (
        <>
            <section className="py-10">
                <div className="container space-y-5">
                    <div className="flex flex-col md:flex-row justify-between place-items-center gap-6">
                        <h4>Cart: <span className="text-custom-purple">$ {totalCost}</span></h4>
                        <div className="flex gap-3 items-center">
                            <div onClick={makeSort} className={`p px-4 py-2 w-fit text-sm text-nowrap font-bold rounded-full duration-500 text-custom-purple border border-custom-purple ${sortByPrice?"bg-custom-half-purple":"bg-transparent"} flex items-center gap-1 cursor-pointer`}>
                                Sort by Price 
                                <img src={sortIcon} alt="" className="w-[1rem]" />
                            </div>
                            <div onClick={confirmPurchase} className="primaryButton activePrimaryButton">
                                Purchase
                            </div>
                        </div>
                    </div>

                    {cartList.length==0?
                    <div className="place-items-center text-center space-y-4 py-10">
                        <h2 className="text-custom-purple">No gadgets have been added yet. Start by adding some to your cart!</h2>
                    </div>:
                    cartList.map((eachCartListItem,index)=>(
                        <CartListCard key={index} specificGadget={eachCartListItem}/>
                    ))
                    }

                </div>
            </section>

        </>

    );
};

// CartList.propTypes = {
    
// };

export default CartList;