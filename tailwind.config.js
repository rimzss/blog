const { colors } = require("@mui/material");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        hoyr: "#3B3C4A",
        hoyr100: "#F4F4F5",
        hoyr400: "#97989F",
        secondary50: "#F6F6F7",
        secondary500: "#696A75",
        secondary800: "#181A2A",
      },
    },
  },
  plugins: [],
};
