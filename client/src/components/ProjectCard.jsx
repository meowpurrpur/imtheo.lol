import { FaArrowUpRightFromSquare, FaCodeFork, FaStar } from "react-icons/fa6";

export default function ProjectCard({
  href,
  title,
  description,
  primaryLanguage,
  languageColor,
  stars,
  forks,
}) {
  return (
    <a className="project-card" href={href} target="_blank" rel="noreferrer">
      <span className="project-icon">
        <FaArrowUpRightFromSquare size={15} />
      </span>

      <h3 className="project-title">{title}</h3>
      <p className="project-description">
        {description || "An open-source project by Theo."}
      </p>

      <div className="project-bottom-container">
        <span className="project-lang">
          {" "}
          <div
            style={{ backgroundColor: languageColor }}
            className="project-lang-dot"
          ></div>
          {primaryLanguage || "Various"}
        </span>

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
