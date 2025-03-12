import React from "react";
import { LANGUAGES } from "../constants";
import { easeInOut, motion } from "framer-motion";

export const Languages = () => {
  return (
    <div className="pb-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="my-15 text-center text-4xl font-light"
      >
        Languages
      </motion.h2>
      <div className="flex justify-center">
        <ul className="grid md:grid-cols-2 lg:grid-flow-col ">
          {LANGUAGES.map((language, index) => (
            <motion.li
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="m-5 text-xl font-light flex justify-between md:flex-col lg:flex-col items-center gap-12"
              key={index}
            >
              {language.name}
              <motion.span
                className="rounded-full dark:text-gray-900 dark:bg-stone-200 bg-blue-100 text-sm font-bold text-center p-4 text-stone-950 drop-shadow-[0_0_40px_rgba(213,247,255,0.4)] dark:drop-shadow-[0_0_40px_rgba(13,13,13,0.4)] hover:scale-140 active:scale-140 transition"
              >
                {language.level}
              </motion.span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};
