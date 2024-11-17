// import PropTypes from 'prop-types';

import { Link, useLocation } from "react-router-dom";
import NavMenus from "./NavMenus";
import { useContext, useEffect, useRef, useState } from "react";
import { TransferLists } from "../../Contexts/TransferLists";
import NavIndicator from "./NavIndicator";
import PurchaseModal from "../DashboardPageComponent/PurchaseModal";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
    const location= useLocation() 
    // console.log(location.pathname)
    useEffect(() => {
      console.log("Current path:", location.pathname);
      window.scrollTo(0, 0); // Scroll to the top of the page
    }, [location.pathname]); // Trigger when the route changes

    const [scrollY, setScrollY]=useState(0)
    const headerRef = useRef(null)
    const {cartList,setCartList, wishList,totalCost,setTotalCost,openModal, setOpenModal}=useContext(TransferLists)  
    const{user,logoutUser}=useContext(AuthContext)

    useEffect(()=>{
      const changeHeaderColor=()=>{
        setScrollY(window.scrollY)
        if (window.scrollY >= 16) {
          document
            headerRef.current.classList.add(`headerSectionAnimation`);
        } else {
          document
            headerRef.current.classList.remove(`headerSectionAnimation`);
        }
      }

      window.addEventListener(`scroll`, changeHeaderColor)
  },[]) 
//   console.log(scrollY)

  return (
    <>
      <PurchaseModal setCartList={setCartList} setTotalCost={setTotalCost} openModal={openModal} setOpenModal={setOpenModal} totalCost={totalCost} />

      <header ref={headerRef} className={`${location.pathname=="/"?"py-3 fixed":"sticky"} top-0 z-50 w-full`} style={{color:location.pathname!=="/" || scrollY>=16?null:"white"}}>
        <div className="navbar container">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex="0"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 space-y-2 shadow text-custom-black"
              >
                  <NavMenus/>

              </ul>
            </div>
            <Link 
              to={"/"}
              className={`btn btn-ghost hover:bg-transparent ${location.pathname!=="/" || scrollY>=16?"text-black":"text-white"} ${location.pathname!=="/" || scrollY>=16?"hover:text-black":"hover:text-white"} text-lg`}>
              Gadget Heaven
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <NavMenus/>
            </ul>
          </div>
          <div className="navbar-end">

            {user?
              <div className="dropdown dropdown-end text-custom-black">
                <div tabIndex={0} role="button" className="indicator btn btn-ghost btn-circle avatar px-4">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?`${user.photoURL}`:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
                  </div>
                  <span className="badge badge-sm indicator-item top-2 right-2">{cartList.length+wishList.length}</span>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2">
                  {/* <li><p>{user?.displayName}</p></li> */}
                  <li><a className=""> Profile</a></li>
                  <li><NavIndicator cartList={cartList} totalCost={totalCost} itIsCart={true} /></li>
                  <li><NavIndicator wishList={wishList} itIsCart={false} /></li>
                  <li><p onClick={logoutUser}>Log Out</p></li>
                </ul>
              </div>
              :
              <Link to={"/login"} className={`${location.pathname !=="/" || scrollY>=16?"primaryButton activePrimaryButton":"heroButton1"}`}>Login</Link>
            }




          </div>
        </div>
      </header>
    </>

  );
};

// Footer.propTypes = {
    
// };

export default Header;
