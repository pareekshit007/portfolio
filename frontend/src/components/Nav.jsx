import { useState } from "react";
import { nav, profile } from "../data/content.js";
import { useActiveSection } from "../hooks.js";

export default function Nav() {
  const ids = nav.map((n) => n.id);
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-ink/90 backdrop-blur">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-14">
          <button
            onClick={() => scrollTo("hero")}
            className="font-mono text-sm text-fg hover:text-teal transition-colors"
          >
            pareekshit<span className="text-amber">.dev</span>
          </button>

          {/* Desktop tabs */}
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`tab pb-1 ${active === item.id ? "active" : "text-muted"}`}
              >
                {item.label}
              </button>
            ))}
            <a
              href={profile.resumeUrl}
              download
              className="pill hover:border-amber hover:text-amber transition-colors"
            >
              resume.pdf ↓
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden font-mono text-xs pill"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            {open ? "close" : "menu"}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-ink px-5 py-3 flex flex-col gap-3">
          {nav.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`tab text-left ${active === item.id ? "active" : "text-muted"}`}
            >
              {item.label}
            </button>
          ))}
          <a href={profile.resumeUrl} download className="pill w-fit">
            resume.pdf ↓
          </a>
        </div>
      )}
    </header>
  );
}