import { CONTACT } from "../constants";
import { easeOut, motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-10">
      <motion.h2
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="my-10 text-center text-4xl font-light5 hover:text-gray-3000"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-wide text-sm">
        <p className="my-4 font-bold hover:text-gray-300 ">{CONTACT.address}</p>
        <a
          href={"tel:" + CONTACT.phoneNo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="my-4 font-light hover:text-gray-300">
            {CONTACT.phoneNo}
          </p>
        </a>
        <a
          href={"mailto:" + CONTACT.email}
          target="_blank"
          className="border-b hover:text-gray-300 active:text-gray-400"
          rel="noopener noreferrer"
        >
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
