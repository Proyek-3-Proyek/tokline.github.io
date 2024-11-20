/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/page/**/*.{html,php,js}", // Mencakup semua file HTML dan PHP di dalam folder `src`
    "./src/page/katalog/index.html",
    "./index.html", // File HTML utama di root// Sesuaikan dengan struktur proyek Anda
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
