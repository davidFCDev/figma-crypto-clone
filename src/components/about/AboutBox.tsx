import { styles } from "../../style";

const AboutBox = () => {
  return (
    <div className={`${styles.paddingX} flex font-chakra my-10`}>
      <div className="w-full bg-grayscale-300 box-shadow py-12 px-20 flex justify-center gap-12 rounded">
        <div className="flex flex-col gap-6 items-start max-w-sm">
          <img src="/eye-icon.png" alt="eye" className="" />
          <div className="flex flex-col gap-4">
            <h3 className="text-lg">LockPay Vision</h3>
            <p className={`${styles.parraph} text-sm text-grayscale-200`}>
              At LockPay, our vision is to create a future where asset security
              and cryptocurrency payments are seamlessly integrated, empowering
              businesses and individuals to confidently manage their digital
              assets while enjoying frictionless transactions.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start max-w-sm">
          <img src="/idea-icon.png" alt="idea" className="" />
          <div className="flex flex-col gap-4">
            <h3 className="text-lg">LockPay Mission</h3>
            <p className={`${styles.parraph} text-sm text-grayscale-200`}>
              Our mission is to revolutionize asset security and cryptocurrency
              payments by providing businesses with a comprehensive solution
              that combines the flexibility of decentralized lockers and the
              convenience of direct payment options.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start max-w-sm">
          <img src="/shield-icon.png" alt="shield" className="" />
          <div className="flex flex-col gap-4">
            <h3 className="text-lg">LockPay Security</h3>
            <p className={`${styles.parraph} text-sm text-grayscale-200`}>
              With our platform, businesses can ensure the safety of their
              digital assets through decentralized lockers backed by robust
              blockchain technology. This eliminates the reliance on centralized
              servers and minimizes the risk of hacking or unauthorized access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
