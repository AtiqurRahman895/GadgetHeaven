import PropTypes from 'prop-types';

import CartList from "./CartList";
import Wishlist from "./Wishlist";

const DashboardListsSection = ({showCart}) => {
  return (
    <>
      {
        showCart?<CartList />:<Wishlist />
      }

    </>
  );
};

DashboardListsSection.propTypes = {
showCart: PropTypes.bool.isRequired
};

export default DashboardListsSection;
