// import PropTypes from 'prop-types';
import { useContext } from "react";
import HistoryListCard from "./HistoryListCard";
import { TransferLists } from "../../Contexts/TransferLists";

const HistoryListSection = () => {
  const {orderList} = useContext(TransferLists);

    return (
        <section className="py-10">
            <div className="container space-y-5">
                <h4>Order: <span className="text-custom-purple">{orderList.length}</span></h4>
                {orderList.length==0?
                <div className="place-items-center text-center space-y-4 py-10">
                    <h2 className="text-custom-purple">No Order have been Placed yet. Start by ordering some gadgets first!</h2>
                </div>:
                orderList.map((eachOrderList,index)=>(
                    <HistoryListCard key={index} specificOrder={eachOrderList}/>
                ))
                }
            </div>
        </section>
    );
};

HistoryListSection.propTypes = {

};

export default HistoryListSection;