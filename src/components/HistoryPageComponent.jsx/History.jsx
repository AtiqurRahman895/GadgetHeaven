// import PropTypes from 'prop-types';

import { Helmet } from "react-helmet-async";
import HistoryHero from "./HistoryHero";
import HistoryListSection from "./HistoryListSection";
// import { useContext } from "react";
// import { TransferLists } from "../../Contexts/TransferLists";

const History = () => {
//   const [ , , , , , , , ,orderList,setOrderList] = useContext(TransferLists);

    return (
        <>
        <Helmet>
          <title>History | Gadget Heaven</title>
        </Helmet>
        <HistoryHero/>
        <HistoryListSection/>
        
      </>
    );
};

// History.propTypes = {
    
// };

export default History;