import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useAllGadgets from "../../src/Hooks/useAllGadgets";

const useSpecificGadget = ({ GadgetsId }) => {
  const [specificGadget, setSpecificGadget] = useState(null);
  const [allGadgets] = useAllGadgets();
  useEffect(() => {


    setSpecificGadget(
      allGadgets.find((data) => data.product_id === GadgetsId)
    );
  }, [allGadgets, GadgetsId]);

  return specificGadget;
};

useSpecificGadget.propTypes = {
  GadgetsId: PropTypes.string.isRequired,
};

export default useSpecificGadget;
