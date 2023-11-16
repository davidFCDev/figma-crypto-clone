/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "100rem",
      },
      screens: {
        "2xsmall": "320px",
        xsmall: "512px",
        small: "1024px",
        medium: "1280px",
        large: "1440px",
        xlarge: "1680px",
        "2xlarge": "1920px",
      },
      colors: {
        inputButton: "rgba(255, 255, 255, 0.349)",
        input: "rgba(255, 255, 255, 0.13)",
        main: {
          linear: {
            blue: "#0CBAF1",
            purple: "#E95CE9",
          },
          purple: "#CA6AEB",
          blue: "#19B5F1",
        },
        alerts: {
          success: "#00C566",
          warning: "#FF4747",
          error: "#FACC15",
        },
        grayscale: {
          100: "#D1D1D1",
          200: "#B0B0B2",
          300: "#252532",
          400: "#18181B",
          500: "#03060e",
        },
      },
      fontFamily: {
        chakra: ["Chakra Petch", "sans-serif"],
      },
    },
  },

  plugins: [],
};
