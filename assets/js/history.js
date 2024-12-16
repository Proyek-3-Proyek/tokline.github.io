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

// ---------------------------------------------------------------------------

async function fetchTransactionByToken() {
  const token = localStorage.getItem("token"); // Mendapatkan token dari localStorage
  if (!token) {
    alert("Anda belum login. Silakan login terlebih dahulu.");
    return;
  }

  try {
    // Dekode token untuk mendapatkan userId
    const decodedToken = parseJwt(token);
    const userId = decodedToken.userId; // Sesuaikan dengan struktur token Anda

    if (!userId) {
      alert("Gagal mendapatkan userId dari token.");
      return;
    }

    const apiEndpoint = `https://backend-eight-phi-75.vercel.app/api/payment/transactions/${userId}`;

    const response = await fetch(apiEndpoint, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // Menyertakan token sebagai header
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    const orderHistory = document.getElementById("orderHistory");
    orderHistory.innerHTML = ""; // Bersihkan konten sebelumnya

    data.forEach((transaction) => {
      const row = `
        <tr>
          <td class="text-center px-6 py-4 text-gray-700">${
            transaction.transaksi_id
          }</td>
          <td class="text-center px-6 py-4 text-gray-700">${
            transaction.nama_produk
          }</td>
          <td class="text-center px-6 py-4 text-gray-700">${
            transaction.jumlah
          }</td>
          <td class="text-center px-6 py-4 text-gray-700">${
            transaction.gross_amount
          }</td>
          <td class="text-center px-6 py-4 text-gray-700">
            <span class="text-xs font-semibold px-2 py-1 rounded-full ${
              transaction.status === "paid"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }">
              ${transaction.status}
            </span>
          </td>
          <td class="text-center px-6 py-4 text-gray-700">
            <a href="${
              transaction.snap_url
            }" target="_blank" class="text-blue-500 underline">
              Lihat Detail
            </a>
          </td>
          <td class="text-center px-6 py-4 text-gray-700">${new Date(
            transaction.created_at
          ).toLocaleString()}</td>
        </tr>
      `;
      orderHistory.innerHTML += row;
    });
  } catch (error) {
    console.error("Error fetching transaction by token:", error);
    alert("Gagal memuat data transaksi. Silakan coba lagi.");
  }
}

// Panggil fungsi saat halaman selesai dimuat
window.onload = fetchTransactionByToken;

// Panggil fungsi saat halaman selesai dimuat
window.onload = fetchTransactionByToken;

function parseJwt(token) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
