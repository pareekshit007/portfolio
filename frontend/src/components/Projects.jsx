import { projects } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-5 sm:px-8 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="file-eyebrow mb-3">~/projects</p>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl mb-2">Selected work</h2>
          <p className="text-muted max-w-xl mb-10">
            Full-stack builds — each one shipped end to end, from schema to UI.
          </p>
        </Reveal>

        <div className="flex flex-col gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 100}>
              <article className="card p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                  <h3 className="font-display font-medium text-lg sm:text-xl">
                    project/<span className="text-amber">{p.id}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted">{p.period}</span>
                </div>

                <ul className="space-y-2 mb-5">
                  {p.points.map((pt) => (
                    <li key={pt} className="text-muted text-sm leading-relaxed flex gap-2">
                      <span className="text-teal shrink-0">›</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="pill">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 font-mono text-xs">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="underline-link">
                        source →
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" className="underline-link">
                        live →
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}