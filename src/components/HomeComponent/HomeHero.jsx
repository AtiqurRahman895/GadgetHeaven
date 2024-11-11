// import PropTypes from 'prop-types';
import { useRef } from "react";
import bannerImg from "../../assets/banner.jpg";
import useBannerHeightWidth from "../../Hooks/useBannerHeightWidth";

const Hero = () => {
  const BannerRef = useRef(null);
  const [bannerSectionWidth, ] = useBannerHeightWidth({
    BannerRef,
  });

  return (
    <section className="sm:mt-4">
      <div
        className="container bg-custom-purple pt-24 sm:rounded-lg"
        style={{
          paddingBottom: `${bannerSectionWidth / 2 / 1.5}px`,
          marginBottom: `${bannerSectionWidth / 2 / 1.7}px`,
        }}
      >
        <div className="sm:mx-[5%] space-y-8 relative">
          <div className="grid gap-5 justify-items-center text-center">
            <h2 className="text-white">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h2>
            <p className="text-white sm:mx-[15%]">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <a href="#gadgetSection" className="heroButton1">
              Shop Now
            </a>
          </div>
          <div
            ref={BannerRef}
            className="border-2 border-custom-ash p-2 sm:p-3 lg:p-4 bg-[#ffffff5b] rounded-lg w-full absolute"
          >
            <img
              src={bannerImg}
              alt=""
              className="rounded-lg w-full"
              style={{ height: `${bannerSectionWidth / 2}px` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Hero.propTypes = {

// };

export default Hero;
