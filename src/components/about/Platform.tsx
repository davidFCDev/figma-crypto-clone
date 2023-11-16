import { styles } from "../../style";
import Button from "../Button";

const Platform = () => {
  return (
    <main className="flex flex-row-reverse my-44 relative font-chakra">
      <div className="flex flex-col gap-3 items-start max-w-2xl pr-20 mr-20">
        <h2 className={`${styles.gradientText}`}>About plataform</h2>
        <h1 className="text-5xl leading-tight font-semibold tracking-normal">
          Our platform harnesses the power of blockchain technology
        </h1>
        <p
          className={`${styles.parraph} text-grayscale-100 font-normal tracking-normal`}
        >
          We are committed to delivering a user-friendly and reliable platform
          that meets the evolving needs of businesses in the fast-paced digital
          landscape.
        </p>
        <p className={`${styles.parraph} text-grayscale-200 pr-4`}>
          LockPay offers a groundbreaking solution that addresses the challenges
          faced by businesses in managing digital assets and accepting
          cryptocurrency payments. By integrating cutting-edge technologies, we
          provide a hybrid model that combines the security of decentralized
          lockers with the efficiency of direct payments.
        </p>
        <Button text="Read more" />
      </div>

      <img
        src="/empty-img-left.png"
        alt="empty-img"
        className="absolute left-0 -top-[20%]"
      />
    </main>
  );
};

export default Platform;
