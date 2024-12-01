// Open Modal Function
function openOrderModal(button) {
  // Navigasi DOM untuk mendapatkan elemen parent dari tombol
  const card = button.closest(".card");

  // Ambil data dari elemen dalam card
  const name = card.querySelector("#nama_produk").textContent.trim();
  const description = card.querySelector("#deskrip_produk").textContent.trim();
  const image = card.querySelector(".img-box img").src;
  const priceText = card.querySelector("#harga_produk").textContent.trim();
  const price = parseInt(priceText.replace(/\D/g, "")); // Hapus teks non-numerik
  const stock = 10; // Misal stok tetap atau bisa tambahkan elemen stok di card

  // Panggil modal dengan data produk
  document.getElementById("modalProductName").textContent = name;
  document.getElementById("modalProductDescription").textContent = description;
  document.getElementById("modalProductImage").src = image;
  document.getElementById("modalProductPrice").textContent =
    price.toLocaleString();
  document.getElementById("modalProductStock").textContent = stock;

  // Tampilkan modal
  document.getElementById("orderModal").classList.add("show");
  document.querySelector(".background-modal").classList.add("show");
}

// Close Modal Function
function closeOrderModal() {
  document.getElementById("orderModal").classList.remove("show");
  document.querySelector(".background-modal").classList.remove("show");
}

// Prevent Background Modal from Closing Modal
document
  .querySelector(".background-modal")
  .addEventListener("click", (event) => {
    const modal = document.getElementById("orderModal");
    if (!modal.contains(event.target)) {
      closeOrderModal();
    }
  });

// Prevent Propagation of Click Inside Modal
document.querySelector(".modal").addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent click inside modal from closing it
});

function orderProduct() {
  const quantity = parseInt(
    document.getElementById("modalProductQuantity").value
  );
  const stock = parseInt(
    document.getElementById("modalProductStock").textContent
  );
  const size =
    document.getElementById("modalProductSize").value || "Default Size";

  if (quantity > stock) {
    alert("Jumlah produk yang dipesan melebihi stok yang tersedia!");
    return;
  }
  if (quantity < 1) {
    alert("Jumlah produk harus minimal 1!");
    return;
  }

  // Ambil detail produk
  const productName = document.getElementById("modalProductName").textContent;
  const rawPrice = document.getElementById("modalProductPrice").textContent;
  const productPrice = rawPrice.replace(/[^\d]/g, ""); // Ambil angka dari harga
  const productImage = document.getElementById("modalProductImage").src;

  // Validasi data
  if (!productName || !productPrice || !quantity || !size || !productImage) {
    alert("Data pemesanan tidak lengkap!");
    return;
  }

  // Redirect ke halaman beli.html dengan query parameter
  const url = new URL(
    "./../../src/page/Beli/index.html",
    window.location.origin
  );
  url.searchParams.set("name", productName);
  url.searchParams.set("price", productPrice);
  url.searchParams.set("quantity", quantity);
  url.searchParams.set("size", size);
  url.searchParams.set("image", productImage);

  window.location.href = url.toString();
}

// Ambil elemen untuk menampung kartu produk
const containerCard = document.querySelector(".container-card");

// Fungsi untuk mendapatkan semua produk
// Fungsi untuk mendapatkan token dari localStorage
function getToken() {
  return localStorage.getItem("token");
}

// Fungsi untuk mengambil semua produk
async function fetchAllProduk() {
  const token = getToken(); // Ambil token dari localStorage

  if (!token) {
    console.error("Token tidak tersedia. Harap login terlebih dahulu.");
    alert("Anda harus login terlebih dahulu.");
    return;
  }

  try {
    const response = await fetch(
      "https://backend-eight-phi-75.vercel.app/api/kategori/all",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      if (response.status === 401) {
        alert("Sesi login telah habis. Silakan login kembali.");
        // Redirect ke halaman login
        window.location.href = "./login.html";
      }
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    // Render produk ke halaman
    renderProduk(data);
  } catch (error) {
    console.error("Error fetching produk:", error);
  }
}

// Fungsi untuk merender produk
function renderProduk(data) {
  const containerCard = document.querySelector(".container-card");
  containerCard.innerHTML = ""; // Bersihkan kontainer sebelum menampilkan data baru

  data.forEach((produk) => {
    const card = `
          <div class="card" style="--clr: #009688">
              <div class="img-box">
                  <img src="${produk.gambar}" alt="${produk.nama}" width="100" height="100" />
              </div>
              <div class="content">
                  <h2>${produk.nama}</h2>
                  <p>${produk.deskripsi}</p>
                  <div class="harstok">
                      <p>Harga: Rp. ${produk.harga}</p>
                  </div>
                  <button class="button-buy" onclick="orderProduct('${produk.id}')">Beli</button>
              </div>
          </div>
      `;
    containerCard.innerHTML += card;
  });
}

// Panggil fungsi fetch saat halaman dimuat
fetchAllProduk();

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
        href="./src/page/auth/login.html"
        class="pr-7 pl-7 pb-2 pt-2 bg-sky-500 hover:bg-sky-700 rounded-3xl text-white"
      >
        Login
      </a>
    `;
  }
}

// Panggil fungsi saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", updateLoginButton);

document.addEventListener("DOMContentLoaded", () => {
  // Pastikan elemen ditemukan sebelum menambahkan event listener
  const belanjaLink = document.querySelector(
    "a[href='./src/page/katalog/index.html']"
  );

  if (belanjaLink) {
    belanjaLink.addEventListener("click", function (event) {
      event.preventDefault(); // Mencegah perilaku default link
      window.location.href = "./src/page/katalog/index.html"; // Arahkan ke halaman belanja
    });
  } else {
    console.log("Elemen Belanja tidak ditemukan di halaman.");
  }
});
