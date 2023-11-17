// import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { styles } from "../../style";
import { TEAM } from "../../constants";
// import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  img: string;
}

const ResponsiveTeam = () => {
  return (
    <div
      className={`${styles.paddingX} w-full flex flex-col gap-14 my-40 items-center`}
    >
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col gap-2 items-center">
          <h2 className={`${styles.gradientText}`}>Out team</h2>
          <h1 className="text-4xl leading-tight font-semibold tracking-normal text-center">
            Our Professionals Team
          </h1>
        </div>
      </div>

      <div className="flex w-full">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{ clickable: false }}
          modules={[EffectFade, Navigation, Pagination]}
          className="w-full relative"
        >
          {TEAM.map((member: TeamMember, index: number) => (
            <SwiperSlide key={index}>
              <div className="bg-blue-gradient p-[1px]">
                <div
                  className="relative border-4 border-grayscale-300 w-full"
                  key={member.id}
                >
                  <img src={member.img} alt={member.name} className="w-full" />
                  <div className="image-overlay"></div>
                  <div className="absolute z-20 bottom-3 text-center w-full ">
                    <h4 className="text-lg">{member.name}</h4>
                    <p className="text-grayscale-200 text-sm">
                      {member.position}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* <div className="flex gap-3">
        <button className="bg-blue-gradient-reverse p-[1.4px]">
          <div className="flex h-12 w-full items-center justify-center bg-grayscale-300 back px-4 hover:bg-grayscale-400">
            <GoArrowLeft />
          </div>
        </button>
        <button className="bg-blue-gradient p-[1.4px]">
          <div className="flex h-12 w-full items-center justify-center bg-grayscale-300 back px-4 hover:bg-grayscale-400">
            <GoArrowRight />
          </div>
        </button>
      </div> */}
    </div>
  );
};

export default ResponsiveTeam;
