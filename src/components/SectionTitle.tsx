import { MdKeyboardArrowRight } from "react-icons/md";
import { styles } from "../style";

interface SectionTitleProps {
  section: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ section }) => {
  return (
    <div className="flex flex-col gap-20 small:px-28 text-center">
      <div className="relative flex flex-col items-center gap-10">
        <img
          src="/elipse2.png"
          alt="elipse"
          className="absolute -top-[30%] small:-top-[90%] z-10"
        />
        <h1 className="text-4xl small:text-6xl font-semibold z-20 tracking-wide">{section}</h1>
        <p className={`${styles.parraph} flex gap-1 items-center z-20`}>
          <span className="font-semibold text-white">Home</span>{" "}
          <MdKeyboardArrowRight />
          <span>{section}</span>
        </p>
      </div>

      <img src="/line.png" alt="line" className="w-full px-6 small:px-0" />
    </div>
  );
};

export default SectionTitle;
