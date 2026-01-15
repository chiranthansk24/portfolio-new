import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const navLinks = [
    { name: "Work", href: "#projects" },
    { name: "About", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        backgroundColor: scrolled ? "var(--bg-primary)" : "transparent",
        transition: "background-color 0.3s ease, padding 0.3s ease",
        borderBottom: scrolled ? "1px solid var(--border-color)" : "none",
        padding: scrolled ? "0" : "1.5rem 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "var(--nav-height)",
        }}
      >
        <a
          href="#"
          style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            zIndex: 1001,
          }}
        >
          Chiranthan.dev
        </a>

        {/* Desktop Menu */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "3rem" }}
          className="desktop-menu"
        >
          <div style={{ display: "flex", gap: "2rem" }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: "var(--text-primary)",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
                className="nav-link"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div
            style={{
              width: "1px",
              height: "24px",
              backgroundColor: "var(--border-color)",
            }}
          ></div>
          <button
            onClick={toggleTheme}
            style={{
              background: "none",
              border: "1px solid var(--border-color)",
              cursor: "pointer",
              color: "var(--text-primary)",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
            }}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text-primary)",
            zIndex: 1001,
          }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "var(--bg-primary)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          transform: isOpen ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 1000,
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            style={{
              fontSize: "2rem",
              fontWeight: 800,
              textTransform: "uppercase",
              color: "var(--text-primary)",
            }}
          >
            {link.name}
          </a>
        ))}
        <button
          onClick={() => {
            toggleTheme();
            setIsOpen(false);
          }}
          style={{
            background: "transparent",
            border: "1px solid var(--border-color)",
            padding: "1rem 2rem",
            borderRadius: "9999px",
            color: "var(--text-primary)",
            fontSize: "1rem",
            fontWeight: 600,
            textTransform: "uppercase",
            marginTop: "2rem",
            cursor: "pointer",
          }}
        >
          Switch Theme
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        .nav-link:hover {
          opacity: 0.6;
        }
        .theme-toggle:hover {
          background-color: var(--text-primary);
          color: var(--bg-primary);
          border-color: var(--text-primary);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
