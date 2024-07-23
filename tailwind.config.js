/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Regal_Blue: "#00406B",
        Selago: "#F2F6FD",
        "Lynch": "#66789C",   
        "Link_Water": "#E0E6F6",
        Periwinkle_Gray: "#B4C0E0",
        green: "#3E8600",
        orange: "#F58A3C",
        Dove_Gray: "#6B6B6B",
        "Zircon": "#F8FAFF",
        "lite_Selago": "#EFF3FC",
        River_Bed: "#4F5E64",
      },
      fontFamily: {
        plus_jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },

      boxShadow: {
        nav_shadow: " 0px 0px 19px 0px #E2E2EA99",
        "btn_shadow": "0px 0px 12px 0px rgba(62,134,0,1)"
      },
      container: {
        center: true,
        screens: {
          sm: "540px",
          md: "720px",
          lg: "960px",
          xl: "1140px",
          xxl: "1374px",
        },
        padding: {
          DEFAULT: "24px",
        },
      },
    },
  },
  plugins: [],
};
