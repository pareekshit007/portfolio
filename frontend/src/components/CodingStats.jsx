import { useState } from "react";
import { profile } from "../data/content.js";
import Reveal from "./Reveal.jsx";

// Colors passed to these third-party card services match the site's own
// palette (amber / teal / ink) so the embeds don't look bolted-on.
const AMBER = "E8A33D";
const TEAL = "5FD4C4";
const FG = "E6E8EB";
const MUTED = "8B94A3";

const githubStatsUrl =
  `https://github-readme-stats.vercel.app/api?username=${profile.github.split("/").pop()}` +
  `&show_icons=true&theme=transparent&hide_border=true&bg_color=00000000` +
  `&title_color=${AMBER}&text_color=${FG}&icon_color=${TEAL}&cache_seconds=86400`;

const topLangsUrl =
  `https://github-readme-stats.vercel.app/api/top-langs/?username=${profile.github.split("/").pop()}` +
  `&layout=compact&theme=transparent&hide_border=true&bg_color=00000000` +
  `&title_color=${AMBER}&text_color=${FG}&cache_seconds=86400`;

const leetcodeUrl =
  `https://leetcard.jacoblin.cool/${profile.leetcodeUsername}?theme=dark&font=JetBrains%20Mono&ext=heatmap`;

function StatCard({ filename, src, alt, delay }) {
  const [errored, setErrored] = useState(false);
  const [attempt, setAttempt] = useState(0);

  const retry = () => {
    setErrored(false);
    setAttempt((n) => n + 1);
  };

  // Appending a changing param forces the browser to actually refetch
  // instead of reusing a cached broken image.
  const finalSrc = attempt === 0 ? src : `${src}&retry=${attempt}`;

  return (
    <Reveal delay={delay}>
      <div className="code-block overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border window-dots">
          <span className="bg-rose/70" />
          <span className="bg-amber/70" />
          <span className="bg-teal/70" />
          <span className="ml-2 text-muted text-xs">{filename}</span>
        </div>
        <div className="p-4 flex flex-col items-center justify-center gap-3 min-h-[140px]">
          {!errored ? (
            <img
              key={attempt}
              src={finalSrc}
              alt={alt}
              onError={() => setErrored(true)}
              className="max-w-full h-auto"
              loading="lazy"
            />
          ) : (
            <>
              <p className="text-muted text-sm text-center">
                Couldn't load live stats right now — this public service occasionally
                hits its rate limit. Try again, or view directly on{" "}
                <a href={profile.github} target="_blank" rel="noreferrer" className="underline-link">
                  GitHub
                </a>
                .
              </p>
              <button
                onClick={retry}
                className="pill hover:border-teal hover:text-teal transition-colors"
              >
                ↻ retry
              </button>
            </>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default function CodingStats() {
  return (
    <section id="stats" className="py-20 px-5 sm:px-8 border-t border-border bg-surface/30">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="file-eyebrow mb-3">~/stats</p>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl mb-2">
            Live from GitHub &amp; LeetCode
          </h2>
          <p className="text-muted max-w-xl mb-10">
            Real, auto-updating numbers — no placeholders here.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5 mb-5">
          <StatCard
            filename="github-stats.svg"
            src={githubStatsUrl}
            alt="GitHub stats"
            delay={0}
          />
          <StatCard
            filename="top-languages.svg"
            src={topLangsUrl}
            alt="Most used languages"
            delay={100}
          />
        </div>

        <StatCard
          filename="leetcode-stats.svg"
          src={leetcodeUrl}
          alt="LeetCode stats"
          delay={200}
        />
      </div>
    </section>
  );
}