import { styles } from "../../style";
import Button from "../Button";

const Lockpay = () => {
  return (
    <main className="w-full justify-start items-start flex flex-row-reverse font-chakra py-16 relative">
      <div className="flex flex-col gap-4 items-start max-w-lg relative right-[13%]">
        <h2 className={`${styles.gradientText}`}>Lockpay</h2>
        <h1 className="text-5xl leading-tight font-semibold">
          Customizable lockers for any project’s use cases
        </h1>
        <p className={`${styles.parraph}`}>
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
        <Button text="Read more" />
      </div>

      <div className="absolute flex left-0 -top-10">
        <img src="/mobile.png" alt="desktop" className="z-0 w-full" />
        <img
          src="/chart-left.png"
          alt="desktop"
          className="absolute z-10 -bottom-[15%] right-[6%]"
        />
      </div>
    </main>
  );
};

export default Lockpay;
