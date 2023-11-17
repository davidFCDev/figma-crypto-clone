import { styles } from "../../style";

const Resume = () => {
  return (
    <div className={`${styles.paddingX} flex`}>
      <div className="w-full bg-grayscale-300 box-shadow px-6 py-10 small:p-14 flex flex-col small:flex-row gap-10 small:gap-0 justify-between rounded">
        <div className="flex flex-col gap-10 items-start max-w-xs">
          <img src="/turnover-icon.png" alt="Turnover" className="" />
          <div className="flex flex-col gap-4">
            <h3 className="text-base small:text-lg">
              Flexible Locking Mechanisms
            </h3>
            <p
              className={`${styles.parraph} text-sm small:text-base text-grayscale-200`}
            >
              This unique feature allows for the application of discounts on
              transactions, incentivizing token holders and fostering engagement
              within the ecosystem.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-start max-w-xs">
          <img src="/dolar-icon.png" alt="Dólar" className="" />
          <div className="flex flex-col gap-4">
            <h3 className="text-base small:text-lg">
              Direct Payment Integration
            </h3>
            <p
              className={`${styles.parraph} text-sm small:text-base text-grayscale-200`}
            >
              Customers can seamlessly make payments using their preferred
              digital currencies, eliminating the friction associated with
              traditional payment methods.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-start max-w-xs">
          <img src="/bonus-icon.png" alt="Bonus" className="" />
          <div className="flex flex-col gap-4">
            <h3 className="text-base small:text-lg">Referral Program</h3>
            <p
              className={`${styles.parraph} text-sm small:text-base text-grayscale-200`}
            >
              With LockPay, businesses can embrace the future of decentralized
              solutions, empowering themselves with enhanced security,
              flexibility, and efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
