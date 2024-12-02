// Fungsi untuk mengambil query parameter dari URL
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    name: params.get("name"),
    price: params.get("price"),
    quantity: params.get("quantity"),
    image: params.get("image"), // Ambil URL gambar
  };
}

// Fungsi untuk menampilkan detail pemesanan
function displayOrderDetails() {
  const { name, price, quantity, size, image } = getQueryParams();

  if (name && price && quantity && size && image) {
    document.getElementById("productName").textContent = name;
    document.getElementById("productPrice").textContent = `Rp. ${parseInt(
      price
    ).toLocaleString()}`;
    document.getElementById("productQuantity").textContent = quantity;
    document.getElementById("productSize").textContent = size;
    document.getElementById("totalPrice").textContent = `Rp. ${(
      parseInt(price) * parseInt(quantity)
    ).toLocaleString()}`;
    document.getElementById("productImage").src = image; // Set gambar produk
  } else {
    alert("Detail pemesanan tidak lengkap!");
  }
}

// Fungsi untuk konfirmasi pesanan
function confirmOrder() {
  alert("Pesanan Anda telah dikonfirmasi! Terima kasih.");
}

// Panggil fungsi saat halaman selesai dimuat
window.onload = displayOrderDetails;
