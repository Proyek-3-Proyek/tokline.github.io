/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/page/**/*.{html,js}", // Mencakup semua file HTML dan PHP di dalam folder `src`
    "./src/page/katalog/index.html",
    "./assets/js/**/*.{js}",
    "./index.html", // File HTML utama di root// Sesuaikan dengan struktur proyek Anda
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
