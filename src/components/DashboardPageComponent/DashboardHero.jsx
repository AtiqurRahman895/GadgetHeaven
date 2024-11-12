import PropTypes from 'prop-types';

const DashboardHero = ({showCart,setShowCart}) => {
  return (
    <section className="bg-custom-purple">
      <div
        className="container py-10 "
      >
        <div className="sm:mx-[5%] space-y-8 place-items-center">
          <div className="grid gap-5 justify-items-center text-center">
            <h3 className="text-white">Product Details</h3>
            <p className="text-white sm:mx-[15%]">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
          <div className="w-fit grid grid-cols-2 items-center justify-center gap-3">
            <div onClick={()=>setShowCart(true)} className={`heroButton2 ${showCart&&"activeHeroButton2"}`}>
                Cart
            </div>
            <div onClick={()=>setShowCart(false)} className={`heroButton2 ${!showCart&&"activeHeroButton2"}`}>
                Wishlist
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

DashboardHero.propTypes = {
    showCart: PropTypes.bool.isRequired,
    setShowCart: PropTypes.func.isRequired,
};

export default DashboardHero;
