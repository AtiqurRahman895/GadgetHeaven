// import PropTypes from 'prop-types';

import { Link, useLocation, } from "react-router-dom";
import NavMenus from "./NavMenus";
import { useContext, useEffect, useRef, useState } from "react";
import { TransferLists } from "../../Contexts/TransferLists";
import NavIndicator from "./NavIndicator";

const Header = () => {
    const location= useLocation() 
    // console.log(location.pathname)

    const [scrollY, setScrollY]=useState(0)
    const headerRef = useRef(null)
    const [cartList, ,wishList, ,totalCost, , , , ]=useContext(TransferLists)  

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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-custom-black"
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
          <NavIndicator cartList={cartList} totalCost={totalCost} itIsCart={true} />
          <NavIndicator wishList={wishList} itIsCart={false} />
        </div>
      </div>
    </header>
  );
};

// Footer.propTypes = {
    
// };

export default Header;
