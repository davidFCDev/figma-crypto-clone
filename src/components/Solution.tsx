import { useState, FC } from "react";
import { styles } from "../style";
import { SOLUTION } from "../constants";

interface SolutionProps {}

interface SolutionItem {
  icon: string;
  title: string;
  description: string;
}

const Solution: FC<SolutionProps> = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className={`${styles.paddingX} w-full my-48 flex flex-col gap-16`}>
      <header className="flex justify-between">
        <div className="flex flex-col gap-5 items-start">
          <h2
            className={`${styles.gradientText}`}
          >
            Solution
          </h2>
          <h1 className="text-5xl leading-tight font-semibold">Our Solution</h1>
        </div>

        <p className="text-grayscale-100 font-light text-base leading-7 tracking-wide max-w-2xl px-5 mr-16 mt-6">
          LockPay presents a comprehensive solution that addresses the
          challenges associated with asset security and cryptocurrency payments,
          revolutionizing the way businesses, projects, brands, and individuals
          interact with their digital assets and conduct transactions. By
          combining the power of a flexible decentralized locker with a direct
          payment option, LockPay offers a seamless, secure, and user-friendly
          ecosystem that empowers users and fosters innovation.
        </p>
      </header>

      <main className="grid grid-cols-3">
        {SOLUTION.map((solution: SolutionItem, index: number) => (
          <div
            key={index}
            className={` p-[1px] max-w-sm flex relative ${
              hoveredIndex === index ? "bg-blue-gradient" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{ top: index * 10 + "px" }}
          >
            <div className="flex flex-col p-10 gap-10 items-start bg-grayscale-300 rounded shadow">
              <img src={solution.icon} alt="Turnover" className="" />
              <div className="flex flex-col gap-4">
                <h3 className="text-lg tracking-wider">{solution.title}</h3>
                <p className="text-grayscale-200 font-light text-sm leading-7 tracking-wide">
                  {solution.description}
                </p>
              </div>
            </div>

            {hoveredIndex === index && (
              <button className="bg-blue-gradient p-[1px] absolute right-[32%] bottom-[20%] opacity-90">
                <div className="uppercase bg-grayscale-300 px-5 py-4 ">
                  Learn more
                </div>
              </button>
            )}
          </div>
        ))}
      </main>
    </div>
  );
};

export default Solution;
