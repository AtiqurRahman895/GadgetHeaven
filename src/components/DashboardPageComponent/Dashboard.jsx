// import PropTypes from 'prop-types';

import { Helmet } from "react-helmet-async";
import DashboardHero from "./DashboardHero";
import DashboardListsSection from "./DashboardListsSection";
import { useContext } from "react";
import { TransferLists } from "../../Contexts/TransferLists";

const Dashboard = () => {
  const {showCart,setShowCart} = useContext(TransferLists);
  return (
    <>
      <Helmet>
        <title>Dashboard | Gadget Heaven</title>
      </Helmet>
      <DashboardHero showCart={showCart} setShowCart={setShowCart} />
      <DashboardListsSection showCart={showCart}/>
      
    </>
  );
};

// Dashboard.propTypes = {

// };

export default Dashboard;
