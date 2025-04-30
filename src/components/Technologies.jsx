import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaJs, FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiRedux } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-light"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}  
          className="p-4 text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.8)] hover:scale-140 active:scale-140 transition"
        >
          <RiReactjsLine className="text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4 text-orange-600 drop-shadow-[0_0_30px_rgba(249,115,22,0.8)] hover:scale-140 active:scale-140 transition"
        >
          <FaHtml5 className="text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4 text-yellow-300 drop-shadow-[0_0_30px_rgba(250,204,21,0.7)] hover:scale-140 active:scale-140 transition"
        >
          <FaJs className="text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4 text-blue-400 drop-shadow-[0_0_30px_rgba(96,165,250,0.8)] hover:scale-140 active:scale-140 transition"
        >
          <FaCss3 className="text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          className="p-4 text-cyan-500 drop-shadow-[0_0_30px_rgba(6,182,212,1)] hover:scale-140 active:scale-140 transition"
        >
          <RiTailwindCssFill className="text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4 text-green-500 drop-shadow-[0_0px_30px_rgba(34,197,94,1)] hover:scale-140 active:scale-140 transition"
        >
          <FaNodeJs className="text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4.5)}
          className="p-4 text-blue-600 drop-shadow-[0_0_30px_rgba(37,99,235,0.9)] hover:scale-140 active:scale-140 transition"
        >
          <SiTypescript className="text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.5)}
          className="p-4 text-purple-500 drop-shadow-[0_0_30px_rgba(168,85,247,0.9)] hover:scale-140 active:scale-140 transition"
        >
          <SiRedux className="text-7xl" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
