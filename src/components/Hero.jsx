import { HERO_CONTENT } from "../constants";
import portfolio_image from "../assets/porfolio image 1.png";
import { motion } from "framer-motion";
import cv from "../assets/Maksym_Torbenko_CV.pdf";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function Hero() {
  return (
    <div>
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={portfolio_image}
              alt="Maksym Torbenko profile picture"
              className="rounded drop-shadow-[0_0_50px_rgba(191,94,0,0.3)] "
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              width={350}
              height={350}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-8xl"
            >
              Maksym Torbenko
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="dark:text-stone-200 bg-clip-text text-3xl tracking-tight"
            >
              Web Developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="dark:text-stone-300 my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter font-light "
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgb(58, 58, 58)",
                color: "rgb(255, 255, 255)", 
              }}
              whileTap={{
                scale: 0.9,
              }}
              variants={childVariants}
              href={cv}
              target="_blank"
              download
              className="bg-blue-100 dark:bg-white rounded-xl p-4 text-sm text-stone-800 mb-10"
              rel="noopener noreferrer"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
