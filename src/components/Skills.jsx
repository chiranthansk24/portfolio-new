const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "JavaScript (ES6+)",
        "HTML5/CSS3",
        "Tailwind CSS",
        "Vite",
        "Framer Motion",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "REST APIs",
        "Firebase",
      ],
    },
    {
      category: "Tools",
      items: ["Git/GitHub", "VS Code", "Docker", "Figma", "Postman", "Vercel"],
    },
  ];

  return (
    <section
      id="skills"
      className="section"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="container">
        <h2
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            borderBottom: "1px solid var(--border-color)",
            paddingBottom: "2rem",
            marginBottom: "4rem",
          }}
        >
          Capabilities
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
          }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "var(--accent-color)",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                ></span>
                {skill.category}
              </h3>

              <div
                style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}
              >
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: "1.1rem",
                      padding: "0.75rem 1.5rem",
                      border: "1px solid var(--border-color)",
                      borderRadius: "var(--radius-pill)",
                      transition: "all 0.3s ease",
                      cursor: "default",
                    }}
                    className="skill-tag"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .skill-tag:hover {
          background-color: var(--accent-color);
          color: var(--bg-primary);
          border-color: var(--accent-color);
        }
      `}</style>
    </section>
  );
};

export default Skills;
