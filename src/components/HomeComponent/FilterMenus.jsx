import PropTypes from 'prop-types';

// import { useRef} from "react";

const FilterMenus = ({setCategory,activeFilterBtn,setActiveFilterBtn}) => {
    const tabNames =["All Products","Laptop","Smartphone","Headphone", "Smart Watche","Charger","Power Bank"]
    const addActiveClass=(index)=>{

        setActiveFilterBtn(index)
        setCategory(tabNames[index])
    }
    // const tabs =useRef([])
  return (
    <>
    {
        tabNames.map((eachTabName,index)=>(
            // <div key={index} ref={(el)=>(tabs.current[index]=el)} onClick={()=>addActiveClass(index)} className={`tabButton ${index===activeFilterBtn&&"activeTabButton"}`} >{eachTabName}</div>
            <div key={index} onClick={()=>addActiveClass(index)} className={`tabButton ${index===activeFilterBtn&&"activeTabButton"}`} >{eachTabName}</div>
        ))
    }
    </>
  );
};

FilterMenus.propTypes = {
  setCategory: PropTypes.func.isRequired,
  activeFilterBtn: PropTypes.number.isRequired,
  setActiveFilterBtn: PropTypes.func.isRequired,
};

export default FilterMenus;
