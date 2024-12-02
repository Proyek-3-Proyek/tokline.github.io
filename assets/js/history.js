const refreshButton = document.getElementById("refreshButton");

refreshButton.addEventListener("click", () => {
  // Tampilkan loading saat proses berjalan
  refreshButton.innerHTML =
    '<i class="fas fa-spinner fa-spin mr-2"></i> Refreshing...';

  // Simulasi request ke server
  setTimeout(() => {
    // Contoh data baru
    const newData = [
      {
        date: "03 Des 2024, 08:00",
        orderId: "TX-New-TX-12345...",
        status: "Berhasil",
        statusClass: "bg-green-100 text-green-600",
      },
    ];

    // Update UI
    const contentDiv = document.querySelector(".divide-y");
    contentDiv.innerHTML = ""; // Bersihkan konten lama
    newData.forEach((data) => {
      contentDiv.innerHTML += `
          <div class="flex items-center justify-between px-6 py-4 hover:bg-gray-50">
            <div class="flex items-center space-x-4">
              <i class="fas fa-calendar-alt text-blue-500"></i>
              <div>
                <p class="text-sm text-gray-600">${data.date}</p>
                <p class="text-sm font-medium text-gray-800 truncate" title="${data.orderId}">
                  ${data.orderId}
                </p>
              </div>
            </div>
            <div class="flex space-x-4 items-center">
              <span class="text-xs font-semibold ${data.statusClass} px-2 py-1 rounded-full">${data.status}</span>
              <button class="text-sm text-blue-500 hover:underline" onclick="showDetail('${data.orderId}')">Detail</button>
            </div>
          </div>
        `;
    });

    // Kembalikan tombol ke keadaan semula
    refreshButton.innerHTML = '<i class="fas fa-sync-alt mr-2"></i> Refresh';
  }, 1500); // Simulasi delay 1.5 detik
});

// -------------------------------------------------------------------------------------------------------

function showDetail(orderId) {
  // Data simulasi
  const details = {
    "TX-jHcP-TX-LOntUW...": {
      date: "02 Des 2024, 11:05",
      status: "Kedaluwarsa",
      channel: "QRIS",
      amount: "Rp5.000",
      email: "kasyzzamy@gmail.com",
    },
  };

  // Ambil data transaksi berdasarkan orderId
  const data = details[orderId];

  if (data) {
    // Perbarui konten modal
    const modalContent = document.getElementById("modalContent");
    modalContent.innerHTML = `
        <p><strong>Tanggal:</strong> ${data.date}</p>
        <p><strong>Status:</strong> ${data.status}</p>
        <p><strong>Channel:</strong> ${data.channel}</p>
        <p><strong>Nilai:</strong> ${data.amount}</p>
        <p><strong>E-Mail:</strong> ${data.email}</p>
      `;

    // Tampilkan modal
    const modal = document.getElementById("detailModal");
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  } else {
    alert("Detail transaksi tidak ditemukan.");
  }
}

function closeModal() {
  const modal = document.getElementById("detailModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

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
