import PropTypes from "prop-types";
import { useContext } from "react";
import { TransferGadget } from "../../Contexts/TransferGadget";
import ReactStars from "react-stars";
import { TransferLists } from "../../Contexts/TransferLists";
import useAddToCart from "../../Hooks/useAddToCart";
import useAddToWishlist from "../../Hooks/useAddToWishlist";
// import useRemoveFromWishlist from "../Hooks/useRemoveFromWishlist";
// import useRemoveFromCart from "../Hooks/useRemoveFromCart";

const DetailsSection = ({ BannerRef }) => {
  const specificGadget = useContext(TransferGadget);
  const [ ,setCartList,wishList,setWishList,totalCost,setTotalCost, , , , ] = useContext(TransferLists);
  const addToCart = useAddToCart({specificGadget,setCartList,totalCost,setTotalCost,});
  const addToWishList = useAddToWishlist({ specificGadget, setWishList });

  // const removeFromCart=useRemoveFromCart({specificGadget,cartList,setCartList,totalCost,setTotalCost})
  // const removeFromWishlist=useRemoveFromWishlist({specificGadget,wishList,setWishList})

  // console.log(cartList)

  return (
    <>
      <div
        ref={BannerRef}
        className="p-4 lg:p-5 bg-white rounded-lg w-full absolute"
      >
        {!specificGadget ? (
          <div>Loading gadget details...</div>
        ) : (
          <div className="grid md:grid-cols-[1fr,2fr] gap-4">
            <img
              src={specificGadget.product_image}
              alt=""
              className="bg-custom-ash rounded-lg"
            />
            <div className="grid gap-3">
              <h5 className="">{specificGadget.product_title}</h5>
              <span className="text-black">
                Price: $
                <span className="text-custom-orange">
                  {specificGadget.price}
                </span>
              </span>
              <div
                className={`px-2.5 py-1 w-fit text-xs text-nowrap font-bold rounded-full duration-500 ${
                  specificGadget.availability
                    ? "bg-custom-half-green"
                    : "bg-custom-half-red"
                } ${
                  specificGadget.availability
                    ? "text-custom-green"
                    : "text-custom-red"
                } border ${
                  specificGadget.availability
                    ? "border-custom-green"
                    : "border-custom-red"
                } hover:shadow-sm `}
              >
                {specificGadget.availability ? "In Stock" : "Out Of Stock"}
              </div>
              <p className="">{specificGadget.description}</p>
              <div className="space-y-2">
                <p className="text-black ">Specification:</p>
                <ol className="list-decimal list-inside">
                  {specificGadget.Specification.map(
                    (singleSpecification, index) => (
                      <li className="text-sm ms-3" key={index}>
                        {singleSpecification}
                      </li>
                    )
                  )}
                </ol>
              </div>
              <div className="space-y-1">
                <p className="text-black">Rating</p>
                <div className="flex gap-2 items-center">
                  {
                    <ReactStars
                      count={5}
                      value={specificGadget.rating}
                      edit={false}
                      size={16}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      color1="#9538e24c"
                      color2="#9538E2"
                    />
                  }
                  <div className="badge badge-ghost badge-md">
                    {specificGadget.rating}
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <div
                  onClick={addToCart}
                  className="primaryButton activePrimaryButton flex flex-nowrap gap-1 items-center"
                >
                  Add To Card
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>

                <div
                  onClick={addToWishList}
                  className={`p-2 rounded-full duration-500 border border-custom-purple hover:shadow-sm hover:cursor-pointer ${
                    wishList.some(
                      (gadget) => gadget.product_id == specificGadget.product_id
                    )
                      ? "bg-custom-half-purple text-custom-purple btn-disabled"
                      : "bg-custom-purple text-white"
                  }`}
                >
                  <svg className="h-5 w-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="butt" strokeLinejoin="bevel" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

DetailsSection.propTypes = {
  BannerRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
};

export default DetailsSection;
