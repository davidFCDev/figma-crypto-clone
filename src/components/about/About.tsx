import { styles } from "../../style";
import SectionTitle from "../SectionTitle";

const About = () => {
  return (
    <div className="w-full pt-56 mb-20">
      <SectionTitle section="About us" />

      <main className="flex flex-col-reverse items-start justify-between small:flex-row py-12 small:pt-36 pb-20 small:px-28 relative">
        <div className="flex flex-col gap-4 items-start small:pr-14 px-7 small:px-0 small:max-w-2xl">
          <h2 className={`${styles.gradientText}`}>About us</h2>
          <h1 className={`${styles.title} small:leading-tight`}>
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

        <img src="/empty-img.webp" alt="empty-img" className="hidden small:block" />
        <img src="/public/light-about-right.webp" alt="empty-img" className="absolute top-0 right-0 hidden small:block" />

        {/* Responsive Image */}
        <img src="/empty-responsive.png" alt="empty-img" className="block small:hidden w-full" />

      </main>
    </div>
  );
};

export default About;
