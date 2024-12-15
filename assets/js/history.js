// Contoh endpoint API (ubah sesuai dengan endpoint Anda)
const apiEndpoint = "https://api.example.com/orders";

async function fetchOrderHistory() {
  try {
    const response = await fetch(apiEndpoint);
    const data = await response.json();

    const orderHistory = document.getElementById("orderHistory");
    orderHistory.innerHTML = ""; // Bersihkan konten sebelumnya

    data.forEach((order) => {
      const row = `
           <tr>
             <td class="text-center px-6 py-4 text-gray-700">${order.date}</td>
             <td class="text-center px-6 py-4 text-gray-700 truncate">${
               order.orderId
             }</td>
             <td class="text-center px-6 py-4 text-gray-700">${
               order.transactionType
             }</td>
             <td class="text-center px-6 py-4 text-gray-700">${
               order.channel
             }</td>
             <td class="text-center px-6 py-4 text-gray-700">
               <span class="text-xs font-semibold px-2 py-1 rounded-full ${
                 order.status === "Kedaluwarsa"
                   ? "bg-red-100 text-red-600"
                   : "bg-green-100 text-green-600"
               }">
                 ${order.status}
               </span>
             </td>
             <td class="text-center px-6 py-4 text-gray-700">${
               order.amount
             }</td>
             <td class="text-center px-6 py-4 text-gray-700 truncate">${
               order.customerEmail
             }</td>
           </tr>
         `;
      orderHistory.innerHTML += row;
    });
  } catch (error) {
    console.error("Error fetching order history:", error);
  }
}

// Muat data ketika halaman dimuat
window.onload = fetchOrderHistory;

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

// Panggil fungsi saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", updateLoginButton);
