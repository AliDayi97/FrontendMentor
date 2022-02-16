module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "order-summary-bg-desktop":
          'url("/src/assets/order-summary-component/images/pattern-background-desktop.svg")',
        "order-summary-bg-mobile":
          'url("/src/assets/order-summary-component/images/pattern-background-mobile.svg")',
      },
      colors: {
        primary: {
          "pale-blue": "#e0e8ff",
          "bright-blue": "#3829e0",
          "moderate-blue": "hsl(238, 40%, 52%)",
          "soft-red": "hsl(358, 79%, 66%)",
          "light-greyish-blue": "hsl(239, 57%, 85%)",
          "pale-red": "hsl(357, 100%, 86%)",
        },
        neutral: {
          "very-pale-blue": "#f5f7ff",
          "desaturated-blue": "#7280a7",
          "dark-blue": "#1f2f56",
          "dark-blue-2": "hsl(212, 24%, 26%)",
          "grayish-blue": "hsl(211, 10%, 45%)",
          "light-grey": "hsl(223, 19%, 93%)",
          "very-light-grey": " hsl(228, 33%, 97%)",
        },
      },
    },
    screens: {
      sm: "600px",
      md: "800px",
      lg: "1440px",
    },
  },
  plugins: [],
};
