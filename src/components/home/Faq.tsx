import { styles } from "../../style";
import ArrayFaq from "./ArrayFaq";

const Faq = () => {
  

  return (
    <div
      id="faq"
      className={`${styles.paddingX} flex flex-col small:flex-row w-full items-start justify-between py-16 relative z-10`}
    >
      <div className="flex flex-col gap-5 items-start">
        <img
          src="/light-faq.webp"
          alt="light"
          className="absolute -z-10 left-0 top-32 hidden small:block"
        />
        <img
          src="/light-faq-responsive.webp"
          alt="light"
          className="absolute -z-10 w-full left-0 top-40 block small:hidden"
        />
        <h2 className={`${styles.gradientText}`}>About lockpay</h2>
        <h1 className={`${styles.title}`}>Frequently Asked Questions</h1>
        <span className="text-base small:text-lg text-grayscale-200">
          Still need help? Chat to us.
        </span>
      </div>

      <ArrayFaq />
    </div>
  );
};

export default Faq;
