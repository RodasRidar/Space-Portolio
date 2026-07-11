import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas)",
        ink: "var(--ink)",
        primary: "var(--primary)",
        "deep-green": "var(--deep-green)",
        "soft-stone": "var(--soft-stone)",
        hairline: "var(--hairline)",
        "border-light": "var(--border-light)",
        muted: "var(--muted)",
        "body-muted": "var(--body-muted)",
        "action-blue": "var(--action-blue)",
        coral: "var(--coral)",
        "coral-soft": "var(--coral-soft)",
        "focus-blue": "var(--focus-blue)",
        "on-dark": "var(--on-dark)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Inter", "ui-sans-serif", "system-ui"],
        sans: ["var(--font-sans)", "Arial", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "22px",
        xl: "30px",
        pill: "32px",
      },
    },
  },
  plugins: [],
};
export default config;
