// Open Modal Function
function openOrderModal(name, description, image, price, stock) {
  document.getElementById("modalProductName").textContent = name;
  document.getElementById("modalProductDescription").textContent = description;
  document.getElementById("modalProductImage").src = image;
  document.getElementById("modalProductPrice").textContent =
    price.toLocaleString();
  document.getElementById("modalProductStock").textContent = stock;

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

  if (quantity > stock) {
    alert("Jumlah produk yang dipesan melebihi stok yang tersedia!");
  } else if (quantity < 1) {
    alert("Jumlah produk harus minimal 1!");
  } else {
    alert(`Pesanan berhasil! Anda memesan ${quantity} produk.`);
    closeOrderModal();
  }
}

