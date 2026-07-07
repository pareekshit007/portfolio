import { useState } from "react";
import { profile } from "../data/content.js";
import myPhoto from "../photo/my-photo.jpeg";

export default function Avatar({ size = 160 }) {
  const [errored, setErrored] = useState(false);

  return (
    <div className="code-block shadow-editor overflow-hidden inline-block">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border window-dots">
        <span className="bg-rose/70" />
        <span className="bg-amber/70" />
        <span className="bg-teal/70" />
        <span className="ml-2 text-muted text-xs">profile.jpg</span>
      </div>

      <div
        className="relative flex items-center justify-center bg-surface2"
        style={{ width: size, height: size }}
      >
        {!errored ? (
          <img
            src={myPhoto}
            alt={profile.name}
            onError={() => setErrored(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="font-display font-semibold text-3xl text-teal">
            {profile.initials}
          </span>
        )}

        <span className="absolute bottom-2 right-2 flex items-center gap-1.5 pill !bg-ink/80 !py-1">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal" />
          </span>
          <span className="text-[10px]">available</span>
        </span>
      </div>
    </div>
  );
}