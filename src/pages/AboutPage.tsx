import About from "../components/about/About";
import AboutBox from "../components/about/AboutBox";
import Platform from "../components/about/Platform";
import ResponsiveTeam from "../components/about/ResponsiveTeam";
import Team from "../components/about/Team";

const AboutPage = () => {
  return (
    <div className="screen-path">
      <About />
      <AboutBox />
      <Platform />
      <div className="hidden small:block">
        <Team />
      </div>
      <div className="block small:hidden">
        <ResponsiveTeam />
      </div>
    </div>
  );
};

export default AboutPage;
