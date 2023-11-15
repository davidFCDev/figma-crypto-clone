import { styles } from "../style";

const Lockpay = () => {
  return (
    <main className="w-full justify-end items-start flex flex-row-reverse font-chakra mb-14">
      <div className="flex flex-col gap-4 items-start pt-28 px-4 max-w-xl relative right-[8%]">
        <h2 className={`${styles.gradientText}`}>Lockpay</h2>
        <h1 className="text-5xl leading-tight font-semibold">
          Customizable lockers for any project’s use cases
        </h1>
        <p className="text-grayscale-100 font-light text-base leading-7 tracking-wide">
          By harnessing the power of blockchain technology, LockPay empowers
          businesses, projects, and brands to create customizable lockers
          tailored to their unique requirements. These lockers allow for the
          locking and unlocking of digital assets for predetermined durations or
          specific intervals, enhancing security and providing businesses with
          greater control over their assets.
        </p>
        <ul className="flex flex-col gap-4 font-light mt-2">
          <li className="flex items-center gap-2">
            <img src="/checkbox.png" alt="check" />
            <span>Cutting-Edge Technology</span>
          </li>
          <li className="flex items-center gap-2">
            <img src="/checkbox.png" alt="check" />
            <span>Direct Payment Integration</span>
          </li>
          <li className="flex items-center gap-2">
            <img src="/checkbox.png" alt="check" />
            <span>Referral Program</span>
          </li>
        </ul>
        <button className="bg-blue-gradient px-10 py-4 mt-4 uppercase font-semibold tracking-widest text-sm">
          Read more
        </button>
      </div>

      <div className="relative flex">
        <img src="/mobile.png" alt="desktop" className="z-0 w-full"/>
        <img src="/chart-left.png" alt="desktop"  className="absolute z-10 -bottom-[15%] right-[6%]"/>
      </div>
    </main>
  );
};

export default Lockpay;
