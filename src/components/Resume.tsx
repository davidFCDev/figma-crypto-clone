import { styles } from "../style";

const Resume = () => {
  return (
    <div className={`${styles.paddingX} flex font-chakra`}>
      <div className="w-full bg-grayscale-300 shadow shadow-gray-600 p-14 flex justify-between rounded">
        <div className="flex flex-col gap-10 items-start max-w-xs">
          <img src="/turnover-icon.png" alt="Turnover" className="" />
          <div className="flex flex-col gap-4">
            <h3 className="text-lg">Flexible Locking Mechanisms</h3>
            <p className="text-grayscale-200 font-light text-sm leading-7 tracking-wide">
              This unique feature allows for the application of discounts on
              transactions, incentivizing token holders and fostering engagement
              within the ecosystem.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-start max-w-xs">
          <img src="/dolar-icon.png" alt="Dólar" className="" />
          <div className="flex flex-col gap-4">
            <h3 className="text-lg">Direct Payment Integration</h3>
            <p className="text-grayscale-200 font-light text-sm leading-7 tracking-wide">
              Customers can seamlessly make payments using their preferred
              digital currencies, eliminating the friction associated with
              traditional payment methods.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-start max-w-xs">
          <img src="/bonus-icon.png" alt="Bonus" className="" />
          <div className="flex flex-col gap-4">
            <h3 className="text-lg">Referral Program</h3>
            <p className="text-grayscale-200 font-light text-sm leading-7 tracking-wide">
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
