import { styles } from "../../style";
import Button from "../Button";

const Solution = () => {
  return (
    <div
      className={`${styles.paddingX} flex flex-col py-20 gap-12 items-center justify-center text-center w-full`}
    >
      <div className="flex flex-col gap-5 items-center small:max-w-5xl small:px-4">
        <h2 className={`${styles.gradientText}`}>Our Solution</h2>
        <h1 className="text-4xl small:text-5xl leading-tight font-semibold px-2 small:px-0">
          LockPay offers a seamless, secure, and user-friendly ecosystem that
          empowers users and fosters innovation.
        </h1>
      </div>

      <img src="/video.png" alt="video" className="w-full rounded hidden small:block" />
      <img src="/video-responsive.png" alt="video" className="w-full rounded block small:hidden" />


      <Button text="Get started" />
    </div>
  );
};

export default Solution;
