import { ArrowDown, Play } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText =
    "I build digital products that merge technical excellence with editorial design. Currently focused on human-centered experiences.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "var(--nav-height)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div className="fade-in" style={{ animationDelay: "0.1s" }}>
          <h1
            style={{
              fontSize: "clamp(3rem, 12vw, 10rem)",
              lineHeight: 0.9,
              marginBottom: "2rem",
              marginLeft: "-0.3vw",
              textTransform: "uppercase",
            }}
          >
            <span style={{ display: "block" }}>Creative</span>
            <span style={{ display: "block", color: "var(--text-secondary)" }}>
              Engineer
            </span>
          </h1>
        </div>

        <div
          className="fade-in"
          style={{
            animationDelay: "0.3s",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            maxWidth: "600px",
            marginLeft: "auto",
            marginTop: "2rem",
          }}
        >
          <p
            style={{
              fontSize: "1.25rem",
              fontWeight: 500,
              minHeight: "3.75rem", // Reserve height to prevent layout shift
              fontFamily: "monospace", // Code feel
            }}
          >
            {text}
            <span className="cursor-blink">|</span>
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#projects" className="btn btn-primary">
              View Selected Work
            </a>
            <a
              href="/resume.pdf"
              className="btn btn-outline"
              style={{ borderRadius: "999px", padding: "1rem 1rem" }}
            >
              <Play size={20} fill="currentColor" />
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.5,
          animation: "bounce 2s infinite",
        }}
      >
        <ArrowDown size={32} />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
          40% { transform: translateY(-10px) translateX(-50%); }
          60% { transform: translateY(-5px) translateX(-50%); }
        }
        .cursor-blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
