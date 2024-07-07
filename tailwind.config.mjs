/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      aria: {
        current: "current=page",
      },
      fontFamily: {
        sans: ["Ranade", "sans-serif"],
      },
    },
  },
  plugins: [],
};
