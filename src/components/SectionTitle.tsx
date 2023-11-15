import { MdKeyboardArrowRight } from "react-icons/md";
import { styles } from "../style";

interface SectionTitleProps {
  section: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ section }) => {
  return (
    <div className="flex flex-col gap-20 px-28">
      <div className="relative flex flex-col items-center gap-10">
        <img
          src="/public/elipse2.png"
          alt="elipse"
          className="absolute -top-[90%] z-10"
        />
        <h1 className="text-6xl font-semibold z-20 tracking-wide">{section}</h1>
        <p className={`${styles.parraph} flex gap-1 items-center z-20`}>
          <span className="font-semibold text-white">Home</span>{" "}
          <MdKeyboardArrowRight />
          <span>{section}</span>
        </p>
      </div>

      <img src="/public/line.png" alt="line" className="w-full" />
    </div>
  );
};

export default SectionTitle;
