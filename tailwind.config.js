/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        "primary-red": "hsl(1, 90%, 64%)",
        "primary-blue": "hsl(219, 85%, 26%)",
        "primary-white": "hsl(0, 0%, 100%)",
        "primary-l-g-blue": "hsl(210, 60%, 98%)",
        "primary-l-g-blue-1": "hsl(211, 68%, 94%)",
        "primary-l-g-blue-2": "hsl(205, 33%, 90%)",
        "primary-g-blue":"hsl(219, 14%, 63%)",
        "primary-d-g-blue-3": "hsl(219, 12%, 42%)",
        "primary-v-d-blue": "hsl(224, 21%, 14%)",
      },
    },
  },
  plugins: [],
};
