module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E11D48",
        bg: "#000",
        surface: "#0b0b0b",
        muted: "#6b7280"
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};
