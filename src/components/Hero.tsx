import "../styles/hero.css";

const Hero = () => {
  return (
    <main className="w-full justify-between items-start flex font-chakra font-semibold pl-24 pt-40 screen-path">
      <div className="flex flex-col gap-6 items-start py-10 px-4">
        <h1 className="text-6xl">
          Create clever incentives and utility for all your decentralized
          products
        </h1>
        <p className="text-gray-400 font-light text-lg">
          By harnessing the power of blockchain technology, LockPay empowers
          businesses, projects, and brands to create customizable lockers
          tailored to their unique requirements.
        </p>
        <button className="bg-blue-gradient px-7 py-3 uppercase font-semibold tracking-widest">
          Discover more
        </button>
      </div>

      <img src="/public/desktop.png" alt="desktop" className="w-[62%]" />
    </main>
  );
};

export default Hero;
