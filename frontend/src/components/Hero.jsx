import { profile } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="file-eyebrow mb-4">~/home</p>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl leading-[1.1] mb-5">
            Building full-stack
            <br />
            products, <span className="text-amber">line by line.</span>
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-md mb-8">
            {profile.tagline} Currently based in {profile.location}.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-glow px-5 py-2.5 rounded-lg bg-amber text-ink font-medium text-sm"
            >
              View projects
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-5 py-2.5 rounded-lg border border-border text-fg font-medium text-sm hover:border-teal hover:text-teal transition"
            >
              Get in touch
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="code-block shadow-editor overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border window-dots">
              <span className="bg-rose/70" />
              <span className="bg-amber/70" />
              <span className="bg-teal/70" />
              <span className="ml-2 text-muted text-xs">developer.js</span>
            </div>

            <div className="px-5 py-5 overflow-x-auto text-[13px] sm:text-sm leading-[1.9]">
              <div>
                <span className="tok-kw">const</span> <span className="tok-key">developer</span>{" "}
                <span className="tok-punc">=</span> {"{"}
              </div>
              <div className="pl-5">
                name: <span className="tok-str">"{profile.name}"</span>,
              </div>
              <div className="pl-5">
                role: <span className="tok-str">"{profile.role}"</span>,
              </div>
              <div className="pl-5">
                stack: [<span className="tok-str">"React"</span>,{" "}
                <span className="tok-str">"Node.js"</span>,{" "}
                <span className="tok-str">"Express"</span>,{" "}
                <span className="tok-str">"MongoDB"</span>],
              </div>
              <div className="pl-5">
                focus: <span className="tok-str">"Full-stack + DSA"</span>,
              </div>
              <div className="pl-5">
                problemsSolved: <span className="tok-num">170</span>,
              </div>
              <div className="pl-5">
                status: <span className="tok-str cursor-blink">"{profile.status}"</span>
              </div>
              <div>{"};"}</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}