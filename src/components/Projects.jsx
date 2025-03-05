import { PROJECTS } from "../constants";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="max-w-5xl m-auto">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="my-20 text-center text-4xl font-light"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-12 flex flex-col justify-start gap-8 lg:flex-row flex-nowrap"
          >
            <motion.div
              style={{ willChange: "transform, opacity" }}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ amount: 0.2 }}
              className="self-center lg:w-3/8"
              whileHover={{ scale: 1.1 }}
            >
              <a
                href={project.link}
                aria-label={`Visit ${project.title} project`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded"
                />
              </a>
            </motion.div>
            <motion.div
              style={{ willChange: "transform, opacity" }}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ amount: 0.2 }}
              className="flex flex-wrap justify-between gap-6 w-full relative lg:flex-col"
            >
              <div className="text-3xl absolute right-0 top-0 hover:text-gray-700 active:text-gray-800">
                <a
                  href={project.githubLink}
                  aria-label={`View ${project.title} on GitHub`}
                  title="View on GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
              <div>
                <a
                  href={project.link}
                  aria-label={`Open ${project.title} project`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3
                    className="mb-2 font-semibold text-2xl hover:text-gray-400 active:text-gray-500"
                    id={`project-title-${index}`}
                  >
                    {project.title}
                  </h3>
                </a>
                <p
                  className="mb-4 text-stone-700 dark:text-stone-400"
                  id={`project-desc-${index}`}
                >
                  {project.description}
                </p>
                {project.technologies.map((technology, i) => (
                  <span
                    className="mr-2 rounded bg-blue-100 dark:bg-stone-900 p-2 text-sm font-medium dark:text-stone-300"
                    key={i}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
