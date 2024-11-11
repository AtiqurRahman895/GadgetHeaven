// import PropTypes from 'prop-types';

import { useParams } from "react-router-dom";
import GadgetHero from "./GadgetHero";
import useSpecificGadget from "../../hooks/usespecificGadget";
import { TransferGadget } from "../../Contexts/TransferGadget";
import { Helmet } from "react-helmet-async";

const Gadget = () => {
  const { product_id } = useParams();
  const specificGadget = useSpecificGadget({ GadgetsId: product_id });

  return (
    <>
      <Helmet>
        <title>
          {specificGadget?.product_title || "Loading..."} | Gadget Heaven
        </title>
      </Helmet>
      <TransferGadget.Provider value={specificGadget}>
        <GadgetHero />
      </TransferGadget.Provider>
    </>
  );
};

// Gadget.propTypes = {

// };

export default Gadget;
