import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { styles } from "../../style";
import { FAQ } from "../../constants";
import { useState } from "react";

const ArrayFaq = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setActiveQuestion(index === activeQuestion ? null : index);
  };

  return (
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
              <p className={`${styles.parraph} pr-6 text-base small:text-lg`}>
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
  );
};

export default ArrayFaq;
