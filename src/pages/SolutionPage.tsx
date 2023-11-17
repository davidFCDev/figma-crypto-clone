import Description from "../components/solution/Description";
import Detail from "../components/solution/Detail";
import Solution from "../components/solution/Video";

const SolutionPage = () => {
  return (
    <div className="screen-path overflow-x-hidden">
      <Detail />
      <Solution />
      <Description />
    </div>
  );
};

export default SolutionPage;
