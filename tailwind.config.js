/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "san-serif"]
      },
      backgroundImage: {
        'card-1': "url('../src/Assets/Images/Card1.png')",
        'card-2': "url('../src/Assets/Images/Card2.png')",
        'card-3': "url('../src/Assets/Images/Card3.png')",
        'card-4': "url('../src/Assets/Images/Card4.png')",
      },
    },
    plugins: [],
  }
}

