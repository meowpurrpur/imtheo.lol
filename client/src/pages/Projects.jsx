import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import useTitle from "../hooks/Title";
import { FaCircleNotch, FaDiscord, FaGlobe } from "react-icons/fa6";

function Projects() {
  const [projectState, setProjectState] = useState([]);

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
                description={project.description}
                primaryLanguage={project.language}
                languageColor={project.languageColor}
                stars={project.stars}
                forks={project.forks}
              />
            ))
          )}
        </div>

        <section className="closed-source-projects">
          <h2>Closed-source projects</h2>

          <div className="project-container">
            <article className="project-card private-project-card">
              <h3 className="project-title">theo's offsets</h3>
              <p className="project-description">
                A website providing accurate and always updated offsets for
                Roblox externals.
              </p>

              <div className="project-bottom-container project-links">
                <a
                  className="project-link"
                  href="https://offsets.imtheo.lol"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGlobe size={13} />
                  Website
                </a>

                <a
                  className="project-link"
                  href="https://discord.gg/rbxoffsets"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaDiscord size={14} />
                  Discord
                </a>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}

export default Projects;
