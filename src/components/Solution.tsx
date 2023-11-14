import { styles } from "../style";

const Solution = () => {
  return (
    <div className={`${styles.paddingX} w-full`}>
      <div>
        <div className="flex flex-col gap-5 items-start">
          <h2
            className={`${styles.gradientText} tracking-wider uppercase font-bold`}
          >
            Solution
          </h2>
          <h1 className="text-5xl leading-tight font-semibold">Our Solution</h1>
        </div>

        <p className="text-grayscale-200 font-light text-base leading-7 tracking-wide">
          LockPay presents a comprehensive solution that addresses the
          challenges associated with asset security and cryptocurrency payments,
          revolutionizing the way businesses, projects, brands, and individuals
          interact with their digital assets and conduct transactions. By
          combining the power of a flexible decentralized locker with a direct
          payment option, LockPay offers a seamless, secure, and user-friendly
          ecosystem that empowers users and fosters innovation.
        </p>
      </div>
    </div>
  );
};

export default Solution;
