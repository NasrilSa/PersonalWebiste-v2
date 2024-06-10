/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-typewriter")({
      wordsets: {
        text: {
          words: [
            "I want to collaborate to learn and create new things ",
            "lets build something amazing together!",
            "Exploring a world of endless possibilities.",
          ],
          delay: 3,
          writeSpeed: 0.3,
        },
      },
    }),
  ],
};
