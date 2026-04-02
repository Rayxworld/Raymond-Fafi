import { motion } from "framer-motion";
import { useState } from "react";

export default function ProjectNodeMap({ projects }) {
  const [activeProject, setActiveProject] = useState(projects[0] || null);

  return (
    <div className="terminal-shell section-shell">
      <div className="terminal-heading">
        <div className="terminal-dots">
          <span />
          <span />
          <span />
        </div>
        <span>projects@raymond:~/work</span>
      </div>

      <div className="terminal-body">
        <div className="prompt-line">
          <span className="prompt-user">raymond@portfolio</span>
          <span className="prompt-separator">:</span>
          <span className="prompt-path">~/work</span>
          <span className="prompt-symbol">$</span>
          <span>ls projects/</span>
        </div>

        <div className="project-layout">
          <div className="project-list">
            {projects.map((project, index) => (
              <button
                key={project.name}
                className={`project-list-item ${
                  activeProject?.name === project.name ? "active" : ""
                }`}
                onClick={() => setActiveProject(project)}
              >
                <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
                <span>{project.name}</span>
              </button>
            ))}
          </div>

          {activeProject && (
            <motion.div
              className="project-viewer"
              key={activeProject.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="prompt-line">
                <span className="prompt-user">raymond@portfolio</span>
                <span className="prompt-separator">:</span>
                <span className="prompt-path">~/work/{activeProject.name.toLowerCase().replace(/ /g, "_")}</span>
                <span className="prompt-symbol">$</span>
                <span>cat README.md</span>
              </div>

              <div className="command-output">
                <h3>{activeProject.name}</h3>
                <p>{activeProject.description}</p>
              </div>

              <div className="prompt-line">
                <span className="prompt-user">raymond@portfolio</span>
                <span className="prompt-separator">:</span>
                <span className="prompt-path">~/work/{activeProject.name.toLowerCase().replace(/ /g, "_")}</span>
                <span className="prompt-symbol">$</span>
                <span>cat highlights.log</span>
              </div>

              <div className="plain-list">
                {activeProject.features.map((feature) => (
                  <div key={feature} className="plain-list-row">
                    <span className="list-arrow">-&gt;</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="prompt-line">
                <span className="prompt-user">raymond@portfolio</span>
                <span className="prompt-separator">:</span>
                <span className="prompt-path">~/work/{activeProject.name.toLowerCase().replace(/ /g, "_")}</span>
                <span className="prompt-symbol">$</span>
                <span>echo $STACK</span>
              </div>
              <div className="command-output">
                <p>{activeProject.stack}</p>
              </div>

              {activeProject.link && (
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  Open Repository
                </a>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
