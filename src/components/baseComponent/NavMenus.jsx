// import React from 'react';
// import PropTypes from 'prop-types';

import { NavLink } from "react-router-dom";

const NavMenus = () => {
  return (
    <>
      <li className="w-fit">
        <NavLink to={"/"} className="hover:bg-transparent">Home</NavLink>
      </li>
      <li className="w-fit">
        <NavLink to={"/dashboard"} className="hover:bg-transparent">Dashboard</NavLink>
      </li>
      <li className="w-fit">
      <NavLink to={"/history"} className="hover:bg-transparent">History</NavLink>
      </li>
    </>
  );
};

// NavMenus.propTypes = {

// };

export default NavMenus;
