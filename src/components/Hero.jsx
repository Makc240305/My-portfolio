import { HERO_CONTENT } from "../constants";
import portfolio_image from "../assets/porfolio image 1.png";
import { motion } from "framer-motion";
import cv from "../assets/CV_Maksym Torbenko_Front-End_Developer.pdf"

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
              className="border border-stone-900 rounded-3xl"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              width={400}
              height={400}
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
              className="bg-gradient-to-r from-stone-200 to-stone-800 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Front End Developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter font-light"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              whileHover={{
                scale: 1.1,
                backgroundColor: "#3A3A3A",
                color: "#FFFFFF",
              }}
              whileTap={{
                scale: 0.9,
                backgroundColor: "#3A3A3A",
                color: "#FFFFFF",
              }}
              variants={childVariants}
              href={cv}
              target="_blank"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
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
