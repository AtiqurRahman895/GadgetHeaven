import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const useFilteredGadgets = ({ allGadgets, category }) => {
  const [filteredGadgets, setFilteredGadgets] = useState([]);
  useEffect(() => {
    setFilteredGadgets(allGadgets.filter((data) => data.category === category));
  }, [allGadgets, category,]);

  return [filteredGadgets];
};

useFilteredGadgets.propTypes = {
  allGadgets: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
};

export default useFilteredGadgets;
