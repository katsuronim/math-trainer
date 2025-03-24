/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Sesuaikan dengan struktur proyek
    theme: {
      extend: {
        fontFamily: {
          tektur: ["Tektur", "sans-serif"], // Tambahkan font custom dari Google Fonts
        },
      },
    },
    plugins: [],
  };
  