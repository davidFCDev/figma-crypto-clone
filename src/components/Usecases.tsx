import { styles } from "../style";
import { USE_CASE } from "../constants";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useState } from "react";
import { motion } from "framer-motion";

const Usecases = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % USE_CASE.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? USE_CASE.length - 1 : prevIndex - 1
    );
  };

  const currentUse = USE_CASE[currentIndex];

  return (
    <div
      className={`${styles.paddingX} w-full my-48 flex flex-col gap-14 font-chakra`}
    >
      <header className="flex justify-between">
        <div className="flex flex-col gap-5 items-start max-w-lg">
          <h2 className={`${styles.gradientText}`}>Use Cases</h2>
          <h1 className="text-5xl leading-tight font-semibold">
            Unlocking the Potential of LockPay
          </h1>
        </div>

        <div className="flex flex-col items-start gap-10 mt-6 max-w-2xl">
          <p className="text-grayscale-100 font-light text-base leading-7 tracking-wide pr-20 mt-6">
            These use cases highlight the versatility and potential applications
            of LockPay's Locker, Direct Pay, and Referral functionalities,
            showcasing how businesses from various industries can leverage these
            features to enhance their operations, engage customers, and drive
            growth.
          </p>

          <button className="bg-blue-gradient p-[1.4px] ">
            <div className="flex h-12 w-full items-center justify-center bg-grayscale-400 back px-8">
              <span className="text-base text-white tracking-widest uppercase">
                See all
              </span>
            </div>
          </button>
        </div>
      </header>

      <main className="bg-grayscale-300 w-full">
        <motion.div
          key={currentUse.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="flex justify-between pt-14 px-10 gap-10"
        >
          <div className="flex flex-col justify-between items-start">
            <div className="flex flex-col gap-4 items-start">
              <span className="bg-zinc-500 py-[3px] px-2 rounded-full text-sm">
                Use Case
              </span>
              <h2 className="text-3xl font-semibold">{currentUse.title}</h2>
            </div>
            <div className="flex gap-4">
              <button
                className="bg-blue-gradient-reverse p-[1.4px]"
                onClick={handlePrevious}
              >
                <div className="flex h-12 w-full items-center justify-center bg-grayscale-300 back px-4 hover:bg-grayscale-400">
                  <GoArrowLeft />
                </div>
              </button>
              <button
                className="bg-blue-gradient p-[1.4px]"
                onClick={handleNext}
              >
                <div className="flex h-12 w-full items-center justify-center bg-grayscale-300 back px-4 hover:bg-grayscale-400">
                  <GoArrowRight />
                </div>
              </button>
            </div>

            <img src={currentUse.image} alt={currentUse.title} className="max-w-lg"/>
          </div>

          <div className="border-l border-gray-700 mt-5 mb-12"></div>

          <div className=" flex flex-col gap-6 pb-16">
            <div className="flex gap-5 items-start">
              <img src="/cloud-icon.png" alt="cloud icon" />
              <div className="flex flex-col gap-4">
                <h3 className="text-xl">{currentUse.subtitle1}</h3>
                <p className={`${styles.parraph} text-grayscale-200`}>{currentUse.description1}</p>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <img src="/cloud-icon.png" alt="cloud icon" />
              <div className="flex flex-col gap-4">
                <h3 className="text-xl">{currentUse.subtitle2}</h3>
                <p className={`${styles.parraph} text-grayscale-200`}>{currentUse.description2}</p>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <img src="/cloud-icon.png" alt="cloud icon" />
              <div className="flex flex-col gap-4">
                <h3 className="text-xl">{currentUse.subtitle3}</h3>
                <p className={`${styles.parraph} text-grayscale-200`}>{currentUse.description3}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Usecases;
