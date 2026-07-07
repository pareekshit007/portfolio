/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F1419",
        surface: "#161B22",
        surface2: "#1C232C",
        border: "#232B36",
        fg: "#E6E8EB",
        muted: "#8B94A3",
        amber: "#E8A33D",
        teal: "#5FD4C4",
        rose: "#E8607D",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        editor: "0 20px 60px -20px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};