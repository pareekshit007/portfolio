import { profile } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-muted">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React &amp; Node.js.</p>
        <p>// end of file</p>
      </div>
    </footer>
  );
}
