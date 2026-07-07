import { about, stats, achievements } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import Avatar from "./Avatar.jsx";

export default function About() {
  return (
    <section id="about" className="py-20 px-5 sm:px-8 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-[auto_1fr] gap-8 items-start mb-10">
          <Reveal className="mx-auto sm:mx-0">
            <Avatar />
          </Reveal>
          <Reveal delay={80}>
            <p className="file-eyebrow mb-3">~/about</p>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl mb-6">About me</h2>
            <p className="text-muted max-w-2xl leading-relaxed">{about.summary}</p>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {stats.map((s) => (
              <div key={s.label} className="card px-4 py-5 text-center">
                <div className="font-display font-semibold text-2xl text-amber">{s.value}</div>
                <div className="text-muted text-xs mt-1 font-mono">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          <Reveal delay={120}>
            <div className="card p-6 h-full">
              <p className="file-eyebrow mb-3">education</p>
              <h3 className="font-medium mb-1">{about.education.school}</h3>
              <p className="text-muted text-sm mb-1">{about.education.degree}</p>
              <p className="text-muted text-sm font-mono">
                {about.education.period} · {about.education.detail}
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="card p-6 h-full">
              <p className="file-eyebrow mb-3">training</p>
              <h3 className="font-medium mb-1">{about.training.title}</h3>
              <p className="text-muted text-sm font-mono mb-3">
                {about.training.org} · {about.training.period}
              </p>
              <ul className="space-y-2">
                {about.training.points.map((p) => (
                  <li key={p} className="text-muted text-sm flex gap-2">
                    <span className="text-teal">›</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={260}>
          <div className="mt-6 card p-6">
            <p className="file-eyebrow mb-3">achievements</p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
              {achievements.map((a) => (
                <li key={a} className="text-muted text-sm flex gap-2">
                  <span className="text-amber">✓</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}