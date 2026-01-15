import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: "01",
      title: "E-Commerce Platform",
      category: "Full Stack Development",
      description:
        "A comprehensive online store featuring user authentication, payment processing via Stripe, and an admin dashboard for inventory management.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      image: "/project-placeholder.png",
    },
    {
      id: "02",
      title: "Task Management App",
      category: "Web Application",
      description:
        "Real-time collaborative workspace allowing teams to organize tasks, track progress, and communicate seamlessly.",
      tags: ["Vue.js", "Firebase", "Tailwind CSS"],
      link: "#",
      image: "/project-placeholder.png",
    },
    {
      id: "03",
      title: "Weather Dashboard",
      category: "Frontend Engineering",
      description:
        "Interactive data visualization dashboard consuming weather APIs to display forecast models and historical data.",
      tags: ["React", "D3.js", "OpenWeather"],
      link: "#",
      image: "/project-placeholder.png",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            borderBottom: "1px solid var(--border-color)",
            paddingBottom: "2rem",
            marginBottom: "4rem",
          }}
        >
          Selected Work
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "6rem" }}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-item fade-in"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "3rem",
                alignItems: "center",
              }}
            >
              <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                <a
                  href={project.link}
                  className="project-image-container"
                  style={{
                    display: "block",
                    width: "100%",
                    aspectRatio: "16/9",
                    overflow: "hidden",
                    borderRadius: "var(--radius-md)",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transition: "transform 0.5s ease",
                    }}
                    className="project-img"
                  ></div>
                </a>
              </div>

              <div style={{ order: index % 2 === 0 ? 2 : 1 }}>
                <span
                  style={{
                    fontSize: "4rem",
                    fontWeight: 800,
                    color: "var(--border-color)",
                    opacity: 0.5,
                    display: "block",
                    lineHeight: 1,
                    marginBottom: "1rem",
                  }}
                >
                  {project.id}
                </span>

                <h3
                  style={{
                    fontSize: "2.5rem",
                    marginBottom: "1rem",
                    textTransform: "uppercase",
                  }}
                >
                  {project.title}
                </h3>

                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.9rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "1.5rem",
                    borderBottom: "1px solid var(--accent-color)",
                    paddingBottom: "0.2rem",
                  }}
                >
                  {project.category}
                </span>

                <p style={{ marginBottom: "2rem" }}>{project.description}</p>

                <div
                  style={{
                    marginBottom: "2rem",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--text-secondary)",
                        fontFamily: "monospace",
                      }}
                    >
                      /{tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="btn btn-outline"
                  style={{ width: "fit-content" }}
                >
                  View Project <ArrowUpRight size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .project-image-container:hover .project-img {
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .project-item > div { order: unset !important; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
