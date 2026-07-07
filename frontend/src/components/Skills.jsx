import { skills, softSkills } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-5 sm:px-8 border-t border-border bg-surface/30">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="file-eyebrow mb-3">~/skills</p>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl mb-2">
            What's in the repo
          </h2>
          <p className="text-muted max-w-xl mb-10">
            My toolkit, organized the way I'd organize a project directory.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {skills.map((group, i) => (
            <Reveal key={group.folder} delay={i * 80}>
              <div className="card p-6 h-full">
                <p className="font-mono text-sm text-teal mb-4">📁 {group.folder}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={320}>
          <div className="mt-5 card p-6">
            <p className="font-mono text-sm text-teal mb-4">📁 collaboration/</p>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}