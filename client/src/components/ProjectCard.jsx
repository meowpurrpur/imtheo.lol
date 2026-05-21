import { FaArrowUpRightFromSquare, FaCodeFork, FaStar } from "react-icons/fa6";

export default function ProjectCard({
  href,
  title,
  description,
  primaryLanguage,
  stars,
  forks,
}) {
  return (
    <a className="project-card" href={href} target="_blank">
      <span className="project-icon">
        <FaArrowUpRightFromSquare size={15} />
      </span>

      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>

      <div className="project-bottom-container">
        <span className="project-lang">{primaryLanguage}</span>

        <div className="project-stars">
          <FaStar className="project-faicon" size={12} />
          <span>{stars}</span>
        </div>

        <div className="project-forks">
          <FaCodeFork className="project-faicon" size={12} />
          <span>{forks}</span>
        </div>
      </div>
    </a>
  );
}
