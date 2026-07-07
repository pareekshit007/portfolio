import { useState } from "react";
import { profile } from "../data/content.js";
import Reveal from "./Reveal.jsx";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  return (
    <section id="contact" className="py-20 px-5 sm:px-8 border-t border-border">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <Reveal>
          <p className="file-eyebrow mb-3">~/contact</p>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl mb-4">Let's build something</h2>
          <p className="text-muted max-w-sm mb-8 leading-relaxed">
            Have a role, project, or idea in mind? Send a message and I'll get back to you directly —
            or reach me through any of the channels below.
          </p>
          <div className="flex flex-col gap-3 font-mono text-sm">
            <a href={`mailto:${profile.email}`} className="underline-link w-fit">
              {profile.email}
            </a>
            <a href={`tel:${profile.phone}`} className="underline-link w-fit">
              {profile.phone}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="underline-link w-fit">
              github.com/pareekshit007
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="underline-link w-fit">
              linkedin.com/in/pareekshit18
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={handleSubmit} className="code-block p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-3 mb-1 border-b border-border window-dots">
              <span className="bg-rose/70" />
              <span className="bg-amber/70" />
              <span className="bg-teal/70" />
              <span className="ml-2 text-muted text-xs font-mono">send-message.js</span>
            </div>

            <Field label="name" name="name" value={form.name} onChange={handleChange} required />
            <Field label="email" name="email" type="email" value={form.email} onChange={handleChange} required />
            <div>
              <label className="text-xs font-mono text-teal block mb-1" htmlFor="message">
                message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={form.message}
                onChange={handleChange}
                className="w-full bg-surface2 border border-border rounded-lg px-3 py-2 text-sm text-fg font-mono focus:border-teal outline-none resize-none"
                placeholder="What are you looking to build or discuss?"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-glow mt-2 px-5 py-2.5 rounded-lg bg-amber text-ink font-medium text-sm disabled:opacity-60 font-mono"
            >
              {status === "sending" ? "sending()…" : "$ send-message"}
            </button>

            {status === "sent" && (
              <p className="text-teal text-sm font-mono">✓ Message sent — thanks, I'll reply soon.</p>
            )}
            {status === "error" && (
              <p className="text-rose text-sm font-mono">
                ✕ {errorMsg || "Couldn't send. Try again or email directly."}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", value, onChange, required }) {
  return (
    <div>
      <label className="text-xs font-mono text-teal block mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full bg-surface2 border border-border rounded-lg px-3 py-2 text-sm text-fg font-mono focus:border-teal outline-none"
        placeholder={type === "email" ? "you@example.com" : "Jane Doe"}
      />
    </div>
  );
}