/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./pages/**/*.html", "./src/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0066cc",
          light: "#268cf2",
          vivid: "#0971f2"
        },
        accent: {
          DEFAULT: "#e8641c",
          light: "#268cf2"
        },
        ink: {
          dark: "#12181f",
          body: "#5c6470"
        }
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
