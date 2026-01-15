import { useState } from "react";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="section" style={{ paddingBottom: "0" }}>
      <div className="container">
        <div style={{ maxWidth: "800px", margin: "0 0 4rem 0" }}>
          <h2
            className="fade-in"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              marginBottom: "2rem",
              lineHeight: 1,
            }}
          >
            Let's start a conversation.
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="fade-in"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
            animationDelay: "0.2s",
            maxWidth: "1000px",
          }}
        >
          <div className="input-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="What's your name?"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="What's your email address?"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="input-group">
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
              className="form-input"
              style={{ resize: "vertical", minHeight: "100px" }}
            ></textarea>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              paddingTop: "2rem",
              paddingBottom: "8rem",
            }}
          >
            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === "submitting"}
              style={{
                fontSize: "1.2rem",
                padding: "1.5rem 3rem",
                minWidth: "200px",
              }}
            >
              {status === "submitting" ? (
                "Proccessing..."
              ) : status === "success" ? (
                <>
                  Message Sent <CheckCircle size={24} />
                </>
              ) : status === "error" ? (
                <>
                  Error <AlertCircle size={24} />
                </>
              ) : (
                <>
                  Send Message <ArrowRight size={24} />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
