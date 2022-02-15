module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        desktop: 'url("/resources/images/pattern-background-desktop.svg")',
        mobile: 'url("/resources/images/pattern-background-mobile.svg")',
      },
      colors: {
        primary: {
          "pale-blue": "#e0e8ff",
          "bright-blue": "#3829e0",
        },
        neutral: {
          "very-pale-blue": "#f5f7ff",
          "desaturated-blue": "#7280a7",
          "dark-blue": "#1f2f56",
        },
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1440px",
    },
  },
  plugins: [],
};
