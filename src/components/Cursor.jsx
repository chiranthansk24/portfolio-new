import { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.closest("a") ||
        e.target.closest("button")
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "32px",
          height: "32px",
          border: "1px solid var(--accent-color)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transform: `translate3d(${position.x - 16}px, ${
            position.y - 16
          }px, 0) scale(${hovered ? 1.5 : 1})`,
          transition: "transform 0.15s ease-out, opacity 0.2s",
          backgroundColor: hovered
            ? "rgba(var(--accent-color-rgb), 0.1)"
            : "transparent",
          mixBlendMode: "difference", // Cool effect on contrasting backgrounds
        }}
      />
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "8px",
          height: "8px",
          backgroundColor: "var(--accent-color)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 10000,
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
        }}
      />
      <style>{`
        @media (max-width: 768px) {
          /* Hide custom cursor on mobile */
          div[style*="zIndex: 9999"], div[style*="zIndex: 10000"] {
            display: none !important;
          }
        }
        body {
            cursor: none; /* Hide default cursor */
        }
        a, button, input, textarea {
            cursor: none; /* Hide default cursor on interactive elements */
        }
      `}</style>
    </>
  );
};

export default Cursor;
