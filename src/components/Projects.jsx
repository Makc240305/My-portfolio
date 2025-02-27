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
            className="mb-12 flex flex-col jusify-start gap-8 lg:flex-row flex-nowrap"
          >
            <div className="self-center lg:w-3/8">
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
            </div>
            <div className="flex flex-wrap justify-between gap-6 w-full relative lg:flex-col">
            <div className="text-3xl absolute right-0 top-0">
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
                    className="mb-2 font-semibold text-2xl"
                    id={`project-title-${index}`}
                  >
                    {project.title}
                  </h3>
                </a>
                <p className="mb-4 text-stone-400" id={`project-desc-${index}`}>
                  {project.description}
                </p>
                {project.technologies.map((technology, i) => (
                  <span
                    className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                    key={i}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
