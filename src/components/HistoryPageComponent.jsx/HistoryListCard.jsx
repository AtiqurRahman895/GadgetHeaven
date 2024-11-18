import PropTypes from 'prop-types';

const HistoryListCard = ({specificOrder}) => {
    return (
        <div className="space-y-6">
            <div className="p-4 rounded-lg bg-custom-purple space-y-3 mx-auto max-w-[600px] duration-500 hover:shadow-lg">
                <div className="grid">
                <h5 className="text-white">Date: {specificOrder.date}</h5>
                <h5 className="text-white">Time: {specificOrder.time}</h5>
                </div>

                <p className="text-white">Total Amount: <b>$ {specificOrder.cost}</b></p>
                <p className="text-white">Ordered Items:</p>
                <ol className=" list-inside list-decimal text-white text-sm font-semibold space-y-2">
                    {specificOrder.items.map((singelItem,index)=>(
                        <li key={index} className='ms-3'>{singelItem.product_title}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

HistoryListCard.propTypes = {
    specificOrder: PropTypes.object.isRequired
};

export default HistoryListCard;