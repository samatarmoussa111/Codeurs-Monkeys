import CurrentCourseCtaContainer from "./components/current-course-cta/CurrentCourseCtaContainer";
import FeaturedContainer from "./components/featured/FeaturedContainer";
import HeroTopContainer from "./components/hero-top/HeroTopContainer";
import HighlightListContainer from "./components/highlight-list/HighlightListContainer";
import SlackCtaContainer from "./components/slack-cta/SlackCtaContainer";
import CallToActionContainer from "@/ui/design-system/call-to-action/CallToActionContainer";

const LandingPageView = () => {
  return (
    <>
      {/** ici vont arrivés l'ensemble de composants qui constituent la landing page */}
      <HeroTopContainer />
      <FeaturedContainer />
      <SlackCtaContainer />
      <CurrentCourseCtaContainer />
      <HighlightListContainer />
      <CallToActionContainer />
    </>
  );
};

export default LandingPageView;
