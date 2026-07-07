import { useReveal } from "../hooks.js";

export default function Reveal({ as: Tag = "div", className = "", delay = 0, children }) {
  const { ref, inView } = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}