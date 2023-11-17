import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { styles } from "../../style";
import { TEAM } from "../../constants";
import { useState } from "react";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  img: string;
}

const ResponsiveTeam = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TEAM.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + TEAM.length) % TEAM.length);
  };

  return (
    <div
      className={`${styles.paddingX} w-full flex flex-col gap-14 mb-40 items-center`}
    >
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col gap-2 items-center">
          <h2 className={`${styles.gradientText}`}>Out team</h2>
          <h1 className="text-4xl leading-tight font-semibold tracking-normal text-center">
            Our Professionals Team
          </h1>
        </div>
      </div>

      <div className="flex w-full overflow-x-scroll">
        {TEAM.map((member: TeamMember, index: number) => (
          <div
            key={member.id}
            className={` p-[1px] w-full ${
              index === currentIndex ? "bg-blue-gradient" : "bg-transparent"
            }`}
          >
            <div
              className="relative border-4 border-grayscale-300"
              key={member.id}
            >
              <img src={member.img} alt={member.name} className="w-[500px]" />
              <div className="image-overlay"></div>
              <div className="absolute z-20 bottom-3 text-center w-full">
                <h4 className="text-lg">{member.name}</h4>
                <p className="text-grayscale-200 text-sm">{member.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <button
          className="bg-blue-gradient-reverse p-[1.4px]"
          onClick={handlePrev}
        >
          <div className="flex h-12 w-full items-center justify-center bg-grayscale-300 back px-4 hover:bg-grayscale-400">
            <GoArrowLeft />
          </div>
        </button>
        <button className="bg-blue-gradient p-[1.4px]" onClick={handleNext}>
          <div className="flex h-12 w-full items-center justify-center bg-grayscale-300 back px-4 hover:bg-grayscale-400">
            <GoArrowRight />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ResponsiveTeam;
