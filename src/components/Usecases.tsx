import { styles } from "../style";
import { USE_CASE } from "../constants";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useState } from "react";

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
    <div className={`${styles.paddingX} w-full my-48 flex flex-col gap-16`}>
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
        <div
          key={currentUse.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <div>
            <span>Use Case</span>
            <h2>{currentUse.title}</h2>
            <div>
              <button onClick={handlePrevious}>
                <GoArrowLeft />
              </button>
              <button onClick={handleNext}>
                <GoArrowRight />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Usecases;
