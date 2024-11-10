// import PropTypes from 'prop-types';

import { useState } from "react";
import useAllGadgets from "../../Hooks/useAllGadgets";
import useFilteredGadgets from "../../hooks/useFilteredGadgets";
import AllGadgetsSection from "./AllGadgetsSection";
import FilterMenus from "./FilterMenus";

const GadgetsSection = () => {
  const [activeFilterBtn, setActiveFilterBtn] = useState(0);
  const [category, setCategory] = useState("All Products");
  const [allGadgets] = useAllGadgets();
  const [filteredGadgets] = useFilteredGadgets({ allGadgets, category });

  return (
    <section id="gadgetSection" className="py-10">
      <div className="container space-y-4">
        <h3 className="text-center">Explore Cutting-Edge Gadgets</h3>

        <div className="flex justify-between md:hidden">
          <h4 className="text-custom-purple">{category}</h4>
          <div className="dropdown dropdown-left">
            <div tabIndex="0" role="button" className="primaryButton">
              Filter
            </div>
            <div
              tabIndex="0"
              className="dropdown-content menu grid gap-4 p-3 bg-white rounded-lg w-fit z-[1] shadow mt-4"
            >
              <FilterMenus
                setCategory={setCategory}
                activeFilterBtn={activeFilterBtn}
                setActiveFilterBtn={setActiveFilterBtn}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <div className="hidden md:grid gap-4 p-3 bg-white rounded-lg w-fit h-fit">
            <FilterMenus
              setCategory={setCategory}
              activeFilterBtn={activeFilterBtn}
              setActiveFilterBtn={setActiveFilterBtn}
            />
          </div>

          <AllGadgetsSection
            datas={category === "All Products" ? allGadgets : filteredGadgets}
          />
        </div>
      </div>
    </section>
  );
};

// GadgetsSection.propTypes = {

// };

export default GadgetsSection;
