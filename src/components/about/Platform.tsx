import { styles } from "../../style";
import Button from "../Button";

const Platform = () => {
  return (
    <main className="flex flex-col-reverse small:flex-row-reverse my-10 small:my-44 relative">
      <div className="flex flex-col gap-5 items-start small:max-w-2xl small:pr-20 small:mr-20 px-7 small:px-0">
        <h2 className={`${styles.gradientText}`}>About plataform</h2>
        <h1 className="text-4xl small:text-5xl leading-tight font-semibold tracking-normal">
          Our platform harnesses the power of blockchain technology
        </h1>
        <p
          className={`${styles.parraph} text-grayscale-100 font-normal tracking-normal`}
        >
          We are committed to delivering a user-friendly and reliable platform
          that meets the evolving needs of businesses in the fast-paced digital
          landscape.
        </p>
        <p className={`${styles.parraph} text-grayscale-200 small:pr-4`}>
          LockPay offers a groundbreaking solution that addresses the challenges
          faced by businesses in managing digital assets and accepting
          cryptocurrency payments. By integrating cutting-edge technologies, we
          provide a hybrid model that combines the security of decentralized
          lockers with the efficiency of direct payments.
        </p>
        <Button text="Read more" />
      </div>

      <img src="/empty-responsive.png" alt="empty-img" className="block small:hidden" />
      <img
        src="/empty-img-left.png"
        alt="empty-img"
        className="absolute left-0 -top-[20%] hidden small:block"
      />
    </main>
  );
};

export default Platform;
