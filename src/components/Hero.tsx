import "../styles/hero.css";
import Resume from "./Resume";

const Hero = () => {
  return (
    <main className="flex flex-col">
      <div className="w-full justify-between items-start flex font-chakra pl-24 pt-40 screen-path">
        <div className="flex flex-col gap-6 items-start pt-10 px-4">
          <h1 className="text-6xl font-semibold">
            Create clever incentives and utility for all your decentralized
            products
          </h1>
          <p className="text-grayscale-200 font-light text-base leading-7 tracking-wide">
            By harnessing the power of blockchain technology, LockPay empowers
            businesses, projects, and brands to create customizable lockers
            tailored to their unique requirements.
          </p>
          <button className="bg-blue-gradient px-7 py-3 uppercase font-semibold tracking-widest">
            Discover more
          </button>
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
