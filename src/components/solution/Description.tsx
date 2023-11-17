import { styles } from "../../style";
import { SECURITY } from "../../constants";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useState } from "react";
import { motion } from "framer-motion";

const Description = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SECURITY.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? SECURITY.length - 1 : prevIndex - 1
    );
  };

  const current = SECURITY[currentIndex];

  return (
    <div
      className={`${styles.paddingX} w-full py-10 small:py-20 flex flex-col gap-10`}
    >
      <header className="flex flex-col small:flex-row items-start">
        <div className="flex flex-col gap-5 items-start small:max-w-2xl">
          <h2 className={`${styles.gradientText}`}>Solution</h2>
          <h1 className="text-4xl small:text-5xl leading-tight font-semibold">
            LockPay's locker provides a high level of security for digital
            assets.
          </h1>
        </div>
        <div className="flex flex-col gap-4 pt-6 small:pt-14 small:max-w-xl">
          <p
            className={`${styles.parraph} text-grayscale-200 text-sm small:text-base`}
          >
            LockPay presents a comprehensive solution that addresses the
            challenges associated with asset security and cryptocurrency
            payments, revolutionizing the way businesses, projects, brands, and
            individuals interact with their digital assets and conduct
            transactions.{" "}
          </p>
          <p
            className={`${styles.parraph} text-grayscale-200 text-sm small:text-base`}
          >
            By combining the power of a flexible decentralized locker with a
            direct payment option, LockPay offers a seamless, secure, and
            user-friendly ecosystem that empowers users and fosters innovation.
          </p>
        </div>
      </header>

      <main className="flex flex-col my-10 small:my-20 gap-10">
        <motion.div
          key={current.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="flex flex-col small:flex-row justify-between pt-10 px-4 small:px-10 gap-5 small:gap-10 bg-grayscale-300 w-full"
        >
          <div className="flex flex-col justify-between items-start gap-6">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4 items-start max-w-xs">
                <h2 className="text-3xl small:text-4xl font-semibold leading-tight">
                  {current.title}
                </h2>
              </div>
              <div className="flex gap-4">
                <button
                  className="bg-blue-gradient-reverse p-[1.4px]"
                  onClick={handlePrevious}
                >
                  <div className="flex h-10 small:h-12 w-full items-center justify-center bg-grayscale-300 px-3 small:px-4 hover:bg-grayscale-400">
                    <GoArrowLeft />
                  </div>
                </button>
                <button
                  className="bg-blue-gradient p-[1.4px]"
                  onClick={handleNext}
                >
                  <div className="flex h-10 small:h-12 w-full items-center justify-center bg-grayscale-300 px-3 small:px-4 hover:bg-grayscale-400">
                    <GoArrowRight />
                  </div>
                </button>
              </div>
            </div>

            <img
              src={current.image}
              alt={current.title}
              className="small:pb-10"
            />
          </div>

          <div className="border-l border-gray-700 mt-5 mb-12 hidden small:block"></div>

          <div className=" flex flex-col gap-6 pb-16">
            <div className="flex flex-col small:flex-row gap-5 items-start">
              <img src="/cloud-icon.png" alt="cloud icon" />
              <div className="flex flex-col gap-3">
                <h3 className="text-lg small:text-xl">{current.subtitle1}</h3>
                <p
                  className={`${styles.parraph} text-grayscale-200 flex items-start text-sm small:text-base`}
                >
                  <img
                    src="/point.png"
                    alt="point icon"
                    className="mr-2 mt-3"
                  />
                  {current.description1[0]}
                </p>
                <p
                  className={`${styles.parraph} text-grayscale-200 flex items-start text-sm small:text-base`}
                >
                  <img
                    src="/point.png"
                    alt="point icon"
                    className="mr-2 mt-3"
                  />
                  {current.description1[1]}
                </p>
              </div>
            </div>
            <div className="flex flex-col small:flex-row gap-5 items-start">
              <img src="/cloud-icon.png" alt="cloud icon" />
              <div className="flex flex-col gap-3">
                <h3 className="text-lg small:text-xl">{current.subtitle2}</h3>
                <p
                  className={`${styles.parraph} text-grayscale-200 flex items-start text-sm small:text-base`}
                >
                  <img
                    src="/point.png"
                    alt="point icon"
                    className="mr-2 mt-3"
                  />
                  {current.description2[0]}
                </p>
                <p
                  className={`${styles.parraph} text-grayscale-200 flex items-start text-sm small:text-base`}
                >
                  <img
                    src="/point.png"
                    alt="point icon"
                    className="mr-2 mt-3"
                  />
                  {current.description2[1]}
                </p>
              </div>
            </div>
            <div className="flex flex-col small:flex-row gap-5 items-start">
              <img src="/cloud-icon.png" alt="cloud icon" />
              <div className="flex flex-col gap-3">
                <h3 className="text-lg small:text-xl">{current.subtitle3}</h3>
                <p
                  className={`${styles.parraph} text-grayscale-200 flex items-start text-sm small:text-base`}
                >
                  <img
                    src="/point.png"
                    alt="point icon"
                    className="mr-2 mt-3"
                  />
                  {current.description3[0]}
                </p>
                <p
                  className={`${styles.parraph} text-grayscale-200 flex items-start text-sm small:text-base`}
                >
                  <img
                    src="/point.png"
                    alt="point icon"
                    className="mr-2 mt-3"
                  />
                  {current.description3[1]}
                </p>
              </div>
            </div>
            <div className="flex flex-col small:flex-row gap-5 items-start">
              <img src="/cloud-icon.png" alt="cloud icon" />
              <div className="flex flex-col gap-3">
                <h3 className="text-lg small:text-xl">{current.subtitle4}</h3>
                <p
                  className={`${styles.parraph} text-grayscale-200 flex items-start text-sm small:text-base`}
                >
                  <img
                    src="/point.png"
                    alt="point icon"
                    className="mr-2 mt-3"
                  />
                  {current.description4[0]}
                </p>
                <p
                  className={`${styles.parraph} text-grayscale-200 flex items-start text-sm small:text-base`}
                >
                  <img
                    src="/point.png"
                    alt="point icon"
                    className="mr-2 mt-3"
                  />
                  {current.description4[1]}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center">
          {SECURITY.map((_, index) => (
            <div
              key={index}
              className={`h-[3px] mx-1 rounded  ${
                index === currentIndex ? "w-5 bg-gray-300" : "w-2 bg-gray-500"
              }`}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Description;
