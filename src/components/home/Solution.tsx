import { useState, FC } from "react";
import { styles } from "../../style";
import { SOLUTION } from "../../constants";

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
    <div
      className={`${styles.paddingX} w-full py-6 small:py-16 flex flex-col gap-16`}
    >
      <header className="flex flex-col small:flex-row small:justify-between">
        <div className="flex flex-col gap-3 items-start">
          <h2 className={`${styles.gradientText}`}>Solution</h2>
          <h1 className={`${styles.title}`}>Our Solution</h1>
        </div>

        <div className="flex flex-col gap-4 small:gap-0 text-grayscale-100 font-light text-base leading-7 tracking-wide small:max-w-2xl small:px-5 small:mr-20 mt-6">
          <p>
            LockPay presents a comprehensive solution that addresses the
            challenges associated with asset security and cryptocurrency
            payments, revolutionizing the way businesses, projects, brands, and
            individuals interact with their digital assets and conduct
            transactions.
          </p>
          <p>
            By combining the power of a flexible decentralized locker with a
            direct payment option, LockPay offers a seamless, secure, and
            user-friendly ecosystem that empowers users and fosters innovation.
          </p>
        </div>
      </header>

      <main className="grid grid-cols-1 small:grid-cols-3">
        {SOLUTION.map((solution: SolutionItem, index: number) => (
          <div
            key={index}
            className={`p-[1px] small:max-w-sm flex relative box-shadow ${
              hoveredIndex === index ? "bg-blue-gradient" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{ top: index * 20 + "px" }}
          >
            <div className="flex flex-col py-8 px-8 gap-10 justify-end items-center bg-grayscale-300 rounded shadow">
              <div className="flex flex-col gap-6">
                <div className="w-full justify-start">
                  <img src={solution.icon} alt="Turnover" className="" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-base small:text-lg tracking-wider">
                    {solution.title}
                  </h3>
                  <p className="text-grayscale-200 text-xs small:text-sm leading-7 small:leading-7">
                    {solution.description}
                  </p>
                </div>
              </div>

              {hoveredIndex === index && (
                <button className="bg-blue-gradient p-[1px] absolute opacity-70 hover:shadow-grayscale-200 hover:shadow">
                  <div className="uppercase bg-grayscale-300 px-5 py-4 text-xs small:text-sm">
                    Learn more
                  </div>
                </button>
              )}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Solution;
