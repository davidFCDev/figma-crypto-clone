import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { styles } from "../../style";
import { FAQ } from "../../constants";
import { useState } from "react";

const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setActiveQuestion(index === activeQuestion ? null : index);
  };

  return (
    <div
      id="faq"
      className={`${styles.paddingX} flex flex-col small:flex-row w-full items-start justify-between py-16 relative z-10`}
    >
      <img
        src="/light2.png"
        alt="light"
        className="absolute left-0 top-60 small:top-20 opacity-90 -z-10"
      />

      <div className="flex flex-col gap-5 items-start">
        <h2 className={`${styles.gradientText}`}>About lockpay</h2>
        <h1 className="text-3xl small:text-5xl leading-tight font-semibold">
          Frequently Asked Questions
        </h1>
        <span className="text-sm small:text-base text-grayscale-200">Still need help? Chat to us.</span>
      </div>

      <div className="flex flex-col gap-6 small:w-[65%] mt-12">
        {FAQ.map((question, index) => (
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
                <p className={`${styles.parraph} pr-6 text-sm small:text-lg`}>
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
  );
};

export default Faq;
