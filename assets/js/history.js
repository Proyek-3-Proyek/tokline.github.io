const refreshButton = document.getElementById("refreshButton");

refreshButton.addEventListener("click", () => {
  // Tampilkan loading saat proses berjalan
  refreshButton.innerHTML =
    '<i class="fas fa-spinner fa-spin mr-2"></i> Refreshing...';

  // Simulasi refresh data
  setTimeout(() => {
    // Contoh data baru
    const newData = [
      {
        date: "03 Des 2024, 08:00",
        orderId: "TX-New-Order123...",
        channel: "QRIS",
        amount: "Rp15.000",
        status: "Berhasil",
        statusClass: "bg-green-100 text-green-600",
      },
    ];

    const orderList = document.getElementById("orderList");
    orderList.innerHTML = ""; // Hapus konten lama
    newData.forEach((data) => {
      orderList.innerHTML += `
          <div class="px-6 py-4 hover:bg-gray-50">
            <p class="text-sm text-gray-600"><i class="fas fa-calendar-alt text-blue-500 mr-2"></i> ${data.date}</p>
            <p class="text-sm font-medium text-gray-800 truncate">Order ID: ${data.orderId}</p>
            <p class="text-sm text-gray-600">Channel: <span class="text-gray-800 font-semibold">${data.channel}</span></p>
            <p class="text-sm text-gray-600">Nilai: <span class="text-gray-800 font-semibold">${data.amount}</span></p>
            <p class="text-sm text-gray-600">Status: 
              <span class="text-xs font-semibold ${data.statusClass} px-2 py-1 rounded-full">${data.status}</span>
            </p>
          </div>
        `;
    });

    // Kembalikan tombol refresh ke keadaan semula
    refreshButton.innerHTML = '<i class="fas fa-sync-alt mr-2"></i> Refresh';
  }, 1500); // Simulasi delay 1.5 detik
});

// ------------------------------------------------------------------------------

// logout botton
function checkLoginStatus() {
  // Cek status login dari localStorage
  const token = localStorage.getItem("token"); // Simpan token login di localStorage
  return token !== null; // Jika token ada, anggap user sudah login
}

function updateLoginButton() {
  const profileContainer = document.querySelector(".profil");

  if (checkLoginStatus()) {
    // Jika user sudah login, tampilkan tombol Logout
    profileContainer.innerHTML = `
        <button
          id="logoutButton"
          class="pr-7 pl-7 pb-2 pt-2 bg-red-500 hover:bg-red-700 rounded-3xl text-white"
        >
          Logout
        </button>
      `;

    // Tambahkan event listener untuk tombol Logout
    document.getElementById("logoutButton").addEventListener("click", () => {
      localStorage.removeItem("token"); // Hapus token dari localStorage
      alert("Anda telah logout.");
      updateLoginButton(); // Perbarui tampilan tombol
    });
  } else {
    // Jika user belum login, tampilkan tombol Login
    profileContainer.innerHTML = `
      <a
        href="${window.location.origin}/tokline.github.io/src/page/auth/login.html"
        class="pr-7 pl-7 pb-2 pt-2 bg-sky-500 hover:bg-sky-700 rounded-3xl text-white"
      >
        Login
      </a>
    `;
  }
}
