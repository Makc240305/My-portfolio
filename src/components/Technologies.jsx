import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaJs, FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="p-4">
          <FaHtml5 className="text-7xl text-orange-600" />
        </div>
        <div className="p-4">
          <FaJs className="text-7xl text-yellow-300" />
        </div>
        <div className="p-4">
          <FaCss3 className="text-7xl text-blue-400" />
        </div>
        <div className="p-4">
          <RiTailwindCssFill className="text-7xl text-cyan-500" />
        </div>
        <div className="p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
