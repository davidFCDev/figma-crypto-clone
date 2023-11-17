import { styles } from "../../style";
import { FUNTIONALITY } from "../../constants";
import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

const Functionality = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setActiveQuestion(index === activeQuestion ? null : index);
  };

  return (
    <div className="w-full justify-start small:items-center flex flex-col-reverse small:flex-row small:pl-28 pb-16 pt-0 small:py-16 relative -top-10 small:top-0">
      <div className="flex flex-col gap-5 items-start pt-10 px-6 small:pr-4 small:w-[42%]">
        <h2 className={`${styles.gradientText}`}>Functionality</h2>
        <h1 className="text-4xl small:text-5xl leading-tight font-semibold small:max-w-lg">
          LockPay Direct Payments
        </h1>

        <div className="flex flex-col gap-6 w-full mt-5">
          {FUNTIONALITY.map((question, index) => (
            <div key={index} className="flex flex-col gap-6">
              {activeQuestion === index ? (
                <>
                  <div
                    className="flex items-center justify-between hover:cursor-pointer"
                    onClick={() => handleClick(index)}
                  >
                    <h3 className="text-lg small:text-xl">{question.title}</h3>
                    <div
                      onClick={() => handleClick(index)}
                      className="hover:cursor-pointer"
                    >
                      <MdKeyboardArrowUp />
                    </div>
                  </div>
                  <hr className="border-gray-500 w-full" />
                  <p
                    className={`${styles.parraph} pr-6 text-base small:text-lg`}
                  >
                    {question.description}
                  </p>
                </>
              ) : (
                <div className="flex flex-col gap-6">
                  <div
                    className="flex items-center justify-between hover:cursor-pointer"
                    onClick={() => handleClick(index)}
                  >
                    <h3 className="text-lg small:text-xl">{question.title}</h3>
                    <div
                      onClick={() => handleClick(index)}
                      className="hover:cursor-pointer"
                    >
                      <MdKeyboardArrowDown />
                    </div>
                  </div>
                  <hr className="border-gray-500 w-full" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <img
          src="/locker.png"
          alt="desktop"
          className="relative z-20 small:pt-20"
        />

      <div className="small:absolute small:right-0 small:top-0 w-full">
        <img src="/light.png" alt="light" className="relative w-full" />
      </div>
    </div>
  );
};

export default Functionality;
