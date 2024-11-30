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

// Order Product Function
function orderProduct() {
  const quantity = parseInt(
    document.getElementById("modalProductQuantity").value
  );
  const stock = parseInt(
    document.getElementById("modalProductStock").textContent
  );
  const size = document.getElementById("modalProductSize").value;

  if (quantity > stock) {
    alert("Jumlah produk yang dipesan melebihi stok yang tersedia!");
  } else if (quantity < 1) {
    alert("Jumlah produk harus minimal 1!");
  } else {
    // Ambil detail produk
    const productName = document.getElementById("modalProductName").textContent;
    const productPrice =
      document.getElementById("modalProductPrice").textContent;

    // Redirect ke halaman beli.html dengan query parameter
    const url = new URL(
      "./../../src/page/Beli/index.html",
      window.location.origin
    );
    url.searchParams.set("name", productName);
    url.searchParams.set("price", productPrice);
    url.searchParams.set("quantity", quantity);
    url.searchParams.set("size", size);

    window.location.href = url.toString();
  }
}
