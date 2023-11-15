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
    <div className="w-full justify-start items-start flex font-chakra pl-28 py-16 relative">
      <div className="flex flex-col gap-5 items-start pt-10 pr-4 w-[42%]">
        <h2 className={`${styles.gradientText}`}>Functionality</h2>
        <h1 className="text-5xl leading-tight font-semibold max-w-lg">
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
                    <h3 className="text-xl">{question.title}</h3>
                    <div
                      onClick={() => handleClick(index)}
                      className="hover:cursor-pointer"
                    >
                      <MdKeyboardArrowUp />
                    </div>
                  </div>
                  <hr className="border-gray-500 w-full" />
                  <p className={`${styles.parraph} pr-6`}>
                    {question.description}
                  </p>
                </>
              ) : (
                <div className="flex flex-col gap-6">
                  <div
                    className="flex items-center justify-between hover:cursor-pointer"
                    onClick={() => handleClick(index)}
                  >
                    <h3 className="text-xl">{question.title}</h3>
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

      <div className="absolute right-0 top-0">
        <img
          src="/locker.png"
          alt="desktop"
          className="absolute z-20 bottom-52 right-20"
        />
        <img src="/light.png" alt="light" className="relative w-full" />
      </div>
    </div>
  );
};

export default Functionality;
