/** @type {import('tailwindcss').Config} */
const exportable = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#050713",
        ink: "#090d1d",
        indigo: {
          950: "#0d1026",
        },
        starlight: "#f3efe4",
        amberlight: "#e7c98d",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        shell: "86rem",
      },
    },
  },
  plugins: [],
};

export default exportable;
