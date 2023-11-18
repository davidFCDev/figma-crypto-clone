import { styles } from "../../style";
import Button from "../Button";

const Platform = () => {
  return (
    <main className="flex flex-col-reverse items-start justify-between small:flex-row-reverse pt-12 small:pt-36 small:pb-28 small:px-28 relative">
      <div className="flex flex-col gap-5 items-start small:pr-14 px-7 small:px-0 small:max-w-2xl">
        <h2 className={`${styles.gradientText}`}>About plataform</h2>
        <h1 className={`${styles.title}`}>
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
        <div className="pt-4">
          <Button text="Read more" />
        </div>
      </div>

      <img
        src="/empty-img.webp"
        alt="empty-img"
        className="hidden small:block"
      />
      <img
        src="/light-about-left.webp"
        alt="empty-img"
        className="absolute top-0 left-0 hidden small:block"
      />

      {/* Responsive Image */}
      <img
        src="/empty-responsive.png"
        alt="empty-img"
        className="block small:hidden w-full"
      />
    </main>
  );
};

export default Platform;
