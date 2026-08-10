import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import useTitle from "../hooks/Title";
import { FaCircleNotch } from "react-icons/fa6";

type RepoOutput = {
  id: number;
  name: string;
  description: string | null;
  stars: number;
  forks: number;
  url: string;
  language: string | null;
  languageColor: string;
  updatedAt: string;
  source: "github" | "forgejo";
};

export default function Projects() {
  const [projectState, setProjectState] = useState<RepoOutput[]>([]);

  useEffect(() => {
    let isMounted = true;

    async function loadProjects() {
      try {
        const response = await fetch("/projects/repos");
        if (!response.ok) {
          alert("Failed to load projects from API");
          return;
        }

        const data = await response.json();
        if (isMounted) {
          setProjectState(data);
        }
      } catch (err) {
        console.error(err);
      }
    }

    loadProjects();
    return () => {
      isMounted = false;
    };
  }, []);

  useTitle("imtheo.lol - projects");
  return (
    <>
      <div className="centered">
        <h2>Open source projects</h2>
        <p style={{ fontSize: "0.95rem" }}>
          Most of my projects are also mirrored to my GitHub, but I use my
          self-hosted Forgejo instance mainly.
        </p>

        <div className="project-container">
          {projectState.length === 0 ? (
            <div className="project-placeholder">
              <FaCircleNotch className="spinner" size={20} />
            </div>
          ) : (
            projectState.map((project) => (
              <ProjectCard
                key={project.id}
                href={project.url}
                title={project.name}
                description={project.description ?? "No description"}
                primaryLanguage={project.language ?? "Unknown"}
                languageColor={project.languageColor}
                stars={project.stars}
                forks={project.forks}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
