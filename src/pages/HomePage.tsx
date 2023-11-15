import Faq from "../components/home/Faq";
import Functionality from "../components/home/Functionality";
import Hero from "../components/home/Hero";
import Lockpay from "../components/home/Lockpay";
import Solution from "../components/home/Solution";
import Testimonial from "../components/home/Testimonial";
import Usecases from "../components/home/Usecases";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Lockpay />
      <Functionality />
      <Solution />
      <Usecases />
      <Faq />
      <Testimonial />
    </div>
  );
};

export default HomePage;
