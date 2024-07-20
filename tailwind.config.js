/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        colors: {
          blue: "#00406B",
          beschikbaar: "#F2F6FD",
          "light-blue": "#66789C",
          "fade-blue": "#E0E6F6",
          "fade-blue2": "#B4C0E0",
          green: "#3E8600",
          orange: "#F58A3C",
          gray: "#6B6B6B",
          "light-gray": "#F8FAFF",
          "light-gray2": "#EFF3FC",
          gray2: "#4F5E64",
        },
      fontFamily: {
        "Plus-Jakarta": ["Plus Jakarta Sans", "sans-serif"],
      },
      padding:{
        "2sm":"6px",
        "sm":"10px"
      },
      fontSize: {
        xxs: "11.8px",
        xs: "12px",
        xsm: "13.8px",
        sm: "14px",
        xlg: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
      },
      boxShadow: {
        NavShadow: " 0px 0px 19px 0px #E2E2EA99",
      },
      container: {
        center: true,
        screens: {
          sm: "540px",
          md: "720px",
          lg: "960px",
          xl: "1140px",
          xxl: "1350px",
        },
        padding: {
          DEFAULT: "12px",
        },
      },
    },
  },
  plugins: [],
};
