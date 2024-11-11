// import React from 'react';
import PropTypes from 'prop-types';
import notAvailable from '../../assets/notAvailable.png'
import { Link } from 'react-router-dom';


const AllGadgetsSection = ({datas}) => {
    // console.log(datas)
    return (
        <>
            {datas.length===0?<div className=""><img src={notAvailable} alt="" className='w-full object-cover'/></div>:
            <div className="columns-[290px] space-y-4 gap-4">
            {
              datas.map((eachGadget)=>(
                <div key={eachGadget.product_id} className="break-inside-avoid bg-white border rounded-lg p-3 flex flex-col gap-4">
                    <img src={eachGadget.product_image} alt="" className="rounded-lg bg-custom-ash" />
      
                    <div className="flex flex-col gap-2">
    
                        <h6>{eachGadget.product_title}</h6>
    
                        <span className="">
                            Price: $<span className="text-custom-orange"> {eachGadget.price}</span>
                        </span>
    
                        <Link to={`/gadget/${eachGadget.product_id}`} type="button" className="cardButton">
                            View Details
                        </Link>
    
                    </div>
    
                </div>
              ))
            }
          </div> }
        </>
    );
};

AllGadgetsSection.propTypes = {
    datas: PropTypes.array.isRequired
};

export default AllGadgetsSection;