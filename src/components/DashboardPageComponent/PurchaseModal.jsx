import PropTypes from 'prop-types';
import modalImage from "../../assets/Group.png"
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { TransferLists } from '../../Contexts/TransferLists';

const PurchaseModal = () => {
    const {setCartList,setTotalCost,openModal,setOpenModal,totalCost} = useContext(TransferLists);
    const navigate = useNavigate();  
    const closeMidal=()=>{
        setOpenModal(false)
        setCartList([])
        setTotalCost(0)
        setTimeout(()=>{
            navigate("/")
        },200)
    }
  return (
        <dialog id="my_modal_1" open={openModal} className="modal fixed h-[100vh] bg-[rgba(0,0,0,0.5)]">
        <div className="modal-box text-center space-y-3 w-full max-w-[300px]">
            <img src={modalImage} alt="" className="m-auto"/>
            <h5 className="">Payment Successfully</h5>
            <p>Thanks for purchasing.</p>
            <span>Total: $ {totalCost}</span>
            <div className="modal-action">
                <div onClick={closeMidal} className="primaryButton activePrimaryButton text-center" style={{width: "100%"}}>
                    Close
                </div>
            </div>
        </div>
        </dialog>
    );
};

PurchaseModal.propTypes = {
    setCartList: PropTypes.func.isRequired,
    setTotalCost: PropTypes.func.isRequired,
    openModal: PropTypes.bool.isRequired,
    setOpenModal: PropTypes.func.isRequired,
    totalCost: PropTypes.number.isRequired,
};

export default PurchaseModal;