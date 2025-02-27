import { CONTACT } from "../constants";
import { easeOut, motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-10">
      <motion.h2
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="my-10 text-center text-4xl font-light5"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-wide text-sm">
        <p className="my-4 font-bold">{CONTACT.address}</p>
        <p className="my-4 font-light">{CONTACT.phoneNo}</p>
        <a
          href={CONTACT.email}
          target="_blank"
          className="border-b"
          rel="noopener noreferrer"
        >
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
