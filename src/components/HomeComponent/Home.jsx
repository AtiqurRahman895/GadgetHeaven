// import PropTypes from 'prop-types';

import { Helmet } from "react-helmet-async";
import GadgetsSection from "./GadgetsSection";
import HomeHero from "./HomeHero";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home | Gadget Heaven</title>
            </Helmet>
            <HomeHero/>
            <GadgetsSection/>
        </>
    );
};

// Home.propTypes = {
    
// };

export default Home;