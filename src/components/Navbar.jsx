import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo MT.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center ">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={50} alt="Logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-3xl ">
        <a
          href="https://github.com/Makc240305"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 active:text-gray-800"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/maksym-torbenko"
          aria-label="Linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 active:text-gray-800"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
