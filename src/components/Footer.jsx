import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-secondary)",
        padding: "4rem 0 2rem",
        marginTop: "auto",
        borderTop: "1px solid var(--border-color)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            textAlign: "center",
          }}
        >
          <div>
            <h3 style={{ marginBottom: "0.5rem" }}>Let's Connect</h3>
            <p style={{ maxWidth: "600px", margin: "0 auto" }}>
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back to
              you!
            </p>
          </div>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[
              { icon: <Github size={24} />, href: "#" },
              { icon: <Linkedin size={24} />, href: "#" },
              { icon: <Twitter size={24} />, href: "#" },
              { icon: <Mail size={24} />, href: "mailto:hello@example.com" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--text-secondary)",
                  transition:
                    "color var(--transition-speed), transform var(--transition-speed)",
                }}
                className="social-icon"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div
            style={{
              borderTop: "1px solid var(--border-color)",
              width: "100%",
              paddingTop: "2rem",
              textAlign: "center",
              color: "var(--text-accent)",
              fontSize: "0.875rem",
            }}
          >
            <p>
              © {new Date().getFullYear()} DevPortfolio. Built with React &
              Node.js.
            </p>
          </div>
        </div>
      </div>
      <style>{`
        .social-icon:hover {
          color: var(--primary-color) !important;
          transform: translateY(-3px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
