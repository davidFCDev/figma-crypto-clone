import { styles } from "../../style";
import Button from "../Button";

const Lockpay = () => {
  return (
    <main className="w-full justify-start items-start flex flex-col small:flex-row-reverse py-6 small:py-16 relative -top-24 small:-top-10">

      <div className="absolute hidden small:flex small:left-0 small:-top-10">
        <img src="/mobile.png" alt="desktop" className="z-0 w-full" />
        <img
          src="/chart-left.png"
          alt="desktop"
          className="absolute z-10 small:-bottom-[15%] small:right-[6%]"
        />
      </div>

      <div className="flex w-full small:hidden">
        <img src="/mobile-responsive.png" alt="desktop" className="w-full" />
      </div>

      
      <div className="flex flex-col px-6 small:px-0 gap-4 items-start max-w-lg relative small:right-[14%] -top-10 small:top-0">
        <h2 className={`${styles.gradientText}`}>Lockpay</h2>
        <h1 className="text-4xl small:text-5xl leading-tight font-semibold">
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
        <ul className="flex flex-col gap-4 font-light my-4">
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
        <Button text="Read more"/>
      </div>

    </main>
  );
};

export default Lockpay;
