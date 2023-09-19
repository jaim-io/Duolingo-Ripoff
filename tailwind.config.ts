import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blue: "#2f81f7",
        "light-gray": "#7D8590",
        "hover-gray": "#8b949e",
        gray: "#30363d",
        "semi-black": "#161b22",
        black: "#0d1117",
        "light-green": "#2EA043",
        "dark-green": "#238636",
        red: "#da3633",
      },
    },
  },
  plugins: [],
};
export default config;
