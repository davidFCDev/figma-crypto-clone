import { styles } from "../../style";
import Button from "../Button";
import Resume from "./Resume";

const Hero = () => {
  return (
    <main className="flex flex-col min-h-screen w-full small:mb-32 pt-28 small:pt-32">
      <div className="w-full justify-between gap-12 small:gap-0 flex flex-col small:flex-row small:pl-28 screen-path">
        <div className="flex flex-col gap-6 items-start pt-10 small:pr-4 px-6 small:px-0">
          <h1 className="text-5xl small:text-6xl font-semibold tracking-tighter small:tracking-normal ">
            Create clever incentives and utility for all your decentralized
            products
          </h1>
          <p className={`${styles.parraph} pr-2 small:pr-0 text-sm small:text-lg`}>
            By harnessing the power of blockchain technology, LockPay empowers
            businesses, projects, and brands to create customizable lockers
            tailored to their unique requirements.
          </p>
          <Button text="Launch Dapp" />
        </div>

        <img src="/desktop.webp" alt="desktop" className="hidden small:block max-w-[62%]" />
        <img src="/desktop-responsive.png" alt="desktop" className="block small:hidden w-full" />

      </div>

        <Resume />
    </main>
  );
};

export default Hero;
