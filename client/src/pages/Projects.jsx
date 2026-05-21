import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import useTitle from "../hooks/Title";

function Projects() {
  const [projectState, setProjectState] = useState([]);

  useEffect(() => {
    let isMounted = true;

    async function loadProjects() {
      try {
        const response = await fetch("/github/repos");

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
      <Navbar></Navbar>

      <div className="centered">
        <h1>Open source projects</h1>

        <div className="project-container">
          {projectState.length === 0 ? (
            <div>Loading...</div>
          ) : (
            projectState.map((project) => (
              <ProjectCard
                key={project.id}
                href={project.url}
                title={project.name}
                description={project.description}
                primaryLanguage={project.language}
                stars={project.stars}
                forks={project.forks}
              />
            ))
          )}
        </div>

        <p>More coming soon...</p>
      </div>
    </>
  );
}

export default Projects;
