import { styles } from "../../style";

const Solution = () => {
  return (
    <div
      className={`${styles.paddingX} flex flex-col py-20 gap-12 items-center justify-center text-center w-full`}
    >
      <div className="flex flex-col gap-5 items-center max-w-5xl px-4">
        <h2 className={`${styles.gradientText}`}>Our Solution</h2>
        <h1 className="text-5xl leading-tight font-semibold">
          LockPay offers a seamless, secure, and user-friendly ecosystem that
          empowers users and fosters innovation.
        </h1>
      </div>

      <img src="/video.png" alt="video" className="w-full" />

      <button className="bg-blue-gradient px-7 py-3 uppercase font-semibold tracking-widest">
        Get Started
      </button>
    </div>
  );
};

export default Solution;
