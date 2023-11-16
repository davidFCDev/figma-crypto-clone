import { styles } from "../../style";
import Button from "../Button";
import Resume from "./Resume";

const Hero = () => {
  return (
    <main className="flex flex-col min-h-screen w-full ">
      <div className="w-full justify-between items-start flex flex-col small:flex-row font-chakra px-3 small:pl-28 pt-28 small:pt-40 pb-16 screen-path">
        <div className="flex flex-col gap-6 items-start pt-10 small:pr-4">
          <h1 className="text-5xl small:text-6xl font-semibold tracking-tight">
            Create clever incentives and utility for all your decentralized
            products
          </h1>
          <p className={`${styles.parraph}`}>
            By harnessing the power of blockchain technology, LockPay empowers
            businesses, projects, and brands to create customizable lockers
            tailored to their unique requirements.
          </p>
          <Button text="Discover more" />
        </div>

        <img src="/desktop.png" alt="desktop" className="w-[62%]" />
      </div>

      <div className="relative bottom-36">
        <Resume />
      </div>
    </main>
  );
};

export default Hero;
