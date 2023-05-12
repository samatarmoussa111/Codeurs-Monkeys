import FeaturedContainer from "./components/featured/FeaturedContainer";
import HeroTopContainer from "./components/hero-top/HeroTopContainer";

const LandingPageView = () => {
  return (
    <>
      {/** ici vont arrivés l'ensemble de composants qui constituent la landing page */}
      <HeroTopContainer />
      <FeaturedContainer />
    </>
  );
};

export default LandingPageView;
