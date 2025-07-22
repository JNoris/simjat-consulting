module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Core Brand Colors
        "brand-gold": "#D4A574",
        "brand-blue": "#1E3A5F",

        // Service-Specific Colors
        accounting: {
          primary: "#2C7873",
          secondary: "#0A2342",
          light: "#4A9D97",
          dark: "#061829",
        },
        construction: {
          primary: "#16A34A",
          secondary: "#064E3B",
          light: "#22C55E",
          dark: "#052E16",
        },
        it: {
          primary: "#6366F1",
          secondary: "#312E81",
          light: "#818CF8",
          dark: "#1E1B4B",
        },

        // Neutral Colors (keeping some existing ones)
        navy: "#0A2342",
        "light-gray": "#F0F4F8",
        teal: "#2C7873",
        coral: "#FF6B6B",
        accent: "#FFA400",

        // New neutrals
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: ["Inter", "Open Sans", "sans-serif"],
        serif: ["Merriweather", "serif"],
        display: ["Poppins", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
