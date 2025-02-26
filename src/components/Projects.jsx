import { PROJECTS } from "../constants";
import { FaGithub } from "react-icons/fa";
const Projects = () => {
  return (
    <div className="max-w-5xl m-auto">
      <h2 className="my-20 text-center text-4xl font-light">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-12 flex flex-col w-full justify-start gap-8 lg:flex-row flex-nowrap"
          >
            <div className="w-full lg:w-1/4">
              <a href={project.link}>
                <img
                  src={project.image}
                  width={250}
                  height={250}
                  alt={project.title}
                  className="rounded"
                />
              </a>
            </div>
            <div className="flex flex-wrap justify-between gap-6 lg:flex-col w-full">
              <div>
                <a href={project.link}>
                  <h3 className="mb-2 font-semibold text-2xl">
                    {project.title}
                  </h3>
                </a>
                <p className="mb-4 text-stone-400">{project.description}</p>
                {project.technologies.map((technologies, index) => (
                  <span
                    className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                    key={index}
                  >
                    {technologies}
                  </span>
                ))}
              </div>
              <div className="text-3xl md:self-end lg:self-end">
                <a
                  href="https://github.com/Makc240305"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
