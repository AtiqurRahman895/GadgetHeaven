// import PropTypes from 'prop-types';

import { useRef } from "react";
import useBannerHeightWidth from "../../Hooks/useBannerHeightWidth";
import DetailsSection from "./DetailsSection";

const GadgetHero = () => {
  const BannerRef = useRef(null);
  const [, bannerSectionHeight] = useBannerHeightWidth({
    BannerRef,
  });
  return (
    <section className="bg-custom-purple">
      <div
        className="container pt-10"
        style={{
          paddingBottom: `${bannerSectionHeight / 1.6}px`,
          marginBottom: `${bannerSectionHeight / 1.6}px`,
        }}
      >
        <div className="sm:mx-[5%] space-y-8 relative">
          <div className="grid gap-5 justify-items-center text-center">
            <h4 className="text-white">Product Details</h4>
            <p className="text-white sm:mx-[15%]">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>

          <DetailsSection BannerRef={BannerRef} />
        </div>
      </div>
    </section>
  );
};

// GadgetHero.propTypes = {

// };

export default GadgetHero;
