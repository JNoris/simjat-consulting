module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0A2342",
        "light-gray": "#F0F4F8",
        teal: "#2C7873",
        coral: "#FF6B6B",
        accent: "#FFA400",
        // Business line colors
        "accounting-blue": "#1E40AF",
        "construction-green": "#059669",
        "security-red": "#DC2626",
        // Light variants for backgrounds
        "accounting-light": "#DBEAFE",
        "construction-light": "#D1FAE5",
        "security-light": "#FEE2E2",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
