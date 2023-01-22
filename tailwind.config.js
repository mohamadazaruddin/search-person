/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      primary: "#fbf7f4",
      textPrimary: "#20194B",
      textSecondary: "#DFDEE4",
      "white-100": "#FFFFFF",
      "white-200": "#F6F6F6",
      lightShade: "#F1F4F7",
      "primary-200": "#eee6e2",
      "gray-500": "rgb(107 114 128)",
      "green-100": "#E8FCE8",
      "beige-200": "#F7BFAE",
      "beige-100": "#4B86F5",
      "blue-200": "#4B86F5",
      "yellow-100": "rgb(255 237 213)",
      "blue-100": "#E5F4FF",
    },
    boxShadow: {
      "3xl": "2px 4px 16px rgba(0, 0, 0, 0.08)",
    },
  },
  plugins: [],
};
