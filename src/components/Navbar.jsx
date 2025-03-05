import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo MT.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-2">
      <div className="flex flex-shrink-0 items-center ">
        <a href="/" aria-label="Home">
          <svg
            width={50}
            height={50}
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-2 text-stone-900 dark:text-white"
            alt="Logo"
          >
            <path
              d="M28 114V38L52 62.1589L76 38V114"
              stroke="currentColor"
              strokeWidth="13"
            />
            <path
              d="M78 45H108.503M108.503 45H134.5M108.503 45V130.5"
              stroke="currentColor"
              strokeWidth="13"
            />
          </svg>
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
