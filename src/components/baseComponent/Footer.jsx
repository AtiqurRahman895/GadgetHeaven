// import PropTypes from 'prop-types';

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="container space-y-6 py-12">
                <div className="place-items-center space-y-1">
                    <h3>Gadget Heaven</h3>
                    <p>Leading the way in cutting-edge technology and innovation.</p>
                </div>
                <div className="divider"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-y-6">
                    <div className="place-items-center break-inside-avoid space-y-2">
                        <h6>Services</h6>
                        <div className="flex flex-col items-center gap-2">
                            <a href="">Product Support</a>
                            <a href="">Order Tracking</a>
                            <a href="">Shipping & Delivery</a>
                            <a href="">Returns</a>
                        </div>
                    </div>
                    <div className="place-items-center break-inside-avoid space-y-2">
                        <h6>Company</h6>
                        <div className="flex flex-col items-center gap-2">
                            <a href="">About Us</a>
                            <a href="">Careers</a>
                            <a href="">Contact</a>
                        </div>
                    </div>
                    <div className="place-items-center break-inside-avoid space-y-2">
                        <h6>Legal</h6>
                        <div className="flex flex-col items-center gap-2">
                            <a href="">Terms of Service</a>
                            <a href="">Privacy Policy</a>
                            <a href="">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Footer.propTypes = {
    
// };

export default Footer;