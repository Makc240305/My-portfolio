import React from "react";
import { LANGUAGES } from "../constants";
import { motion } from "framer-motion";

export const Languages = () => {
  return (
    <div className="pb-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="my-15 text-center text-4xl font-light"
      >
        Languages
      </motion.h2>
      <div className="flex justify-center">
        <ul>
          {LANGUAGES.map((language, index) => (
            <li className="m-5 text-xl font-light flex justify-between items-center gap-12" key={index}>{language.name}<span className="rounded-full bg-gradient-to-b  text-sm font-bold text-center w-12 h-12 text-stone-950 drop-shadow-[0_0_20px_rgba(249,115,22,0.7)] hover:scale-140 active:scale-140 transition">{language.level}</span></li>
            //   <div key={index} className="mb-8 flex flex-wrap lg:justify-center ">
            //     <motion.div
            //       whileInView={{ opacity: 1, x: 0 }}
            //       initial={{ opacity: 0, x: -100 }}
            //       transition={{ duration: 1, ease: "easeOut" }}
            //       className="w-full lg:w-1/4"
            //     >
            //       <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
            //     </motion.div>
            //     <motion.div
            //       whileInView={{ opacity: 1, x: 0 }}
            //       initial={{ opacity: 0, x: 100 }}
            //       transition={{ duration: 1, ease: "easeOut" }}
            //       className="w-full max-w-xl lg:w-3/4"
            //     >
            //       <h3 className="mb-2 font-semibold">
            //         {experience.role} -{" "}
            //         <span className="text-sm text-stone-500">
            //           {experience.company}
            //         </span>
            //       </h3>
            //       <p className="mb-4 text-stone-400">{experience.description}</p>
            //       {experience.technologies.map((technologies, index) => (
            //         <motion.span
            //           key={index}
            //           className="mr-2 mt-4 rounded bg-blue-100 dark:bg-stone-900 px-2 py-1 text-sm font-medium text-stone-950 dark:text-stone-300"
            //         >
            //           {technologies}
            //         </motion.span>
            //       ))}
            //     </motion.div>
            //   </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
