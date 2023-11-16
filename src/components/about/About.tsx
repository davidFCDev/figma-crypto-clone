import { styles } from "../../style";
import SectionTitle from "../SectionTitle";

const About = () => {
  return (
    <div className="w-full pt-56 mb-20">
      <SectionTitle section="About us" />

      <main className="flex py-28 pl-28 relative">
        <div className="flex flex-col gap-4 items-start max-w-2xl pr-14">
          <h2 className={`${styles.gradientText}`}>About us</h2>
          <h1 className="text-5xl leading-tight font-semibold tracking-normal">
            We believe in unlocking new possibilities for Web3 Projects in the
            digital age
          </h1>
          <p className={`${styles.parraph} text-grayscale-200`}>
            We understand the challenges they face in managing and securing
            digital assets while providing seamless payment experiences for
            their customers. That's why we have developed a revolutionary
            platform that combines decentralized lockers with direct payment
            options to revolutionize asset security and cryptocurrency payments.
          </p>
          <p className={`${styles.parraph} text-grayscale-200`}>
            Our platform harnesses the power of blockchain technology to empower
            businesses and individuals with greater control over their digital
            assets. With LockPay, businesses can create customizable lockers
            that suit their specific requirements. These lockers allow for the
            locking and unlocking of digital assets for predetermined durations
            or specific intervals, ensuring enhanced security and flexibility.
          </p>
        </div>

        <img src="/empty-img-right.png" alt="empty-img" className="absolute right-0 top-0" />
      </main>
    </div>
  );
};

export default About;
