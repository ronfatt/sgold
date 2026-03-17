import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#060606",
        secondary: "#0F1012",
        card: "#17181C",
        border: "#23242A",
        primary: "#F5F1E8",
        secondaryText: "#D9D1C3",
        muted: "#A29B90",
        gold: "#D6B98A",
        darkGold: "#B7935F",
        highlight: "#F1DFC0",
      },
      maxWidth: {
        content: "1280px",
      },
      borderRadius: {
        card: "24px",
      },
      boxShadow: {
        gold: "0 10px 40px rgba(214, 185, 138, 0.14)",
        glass: "0 18px 50px rgba(0, 0, 0, 0.28)",
      },
      backgroundImage: {
        aura:
          "radial-gradient(circle at top, rgba(214,185,138,0.14), transparent 36%), radial-gradient(circle at 20% 20%, rgba(241,223,192,0.08), transparent 18%)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
