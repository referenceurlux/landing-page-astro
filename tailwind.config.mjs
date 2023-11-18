/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "2rem",
      },
    },
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat Variable']
      },
      zIndex: {
        '1' : '1',
        '2' : '2',
        '3' : '3'
      }
    },
    screens: {
      xs: "480px",
      sm: "600px",
      md: "782px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
