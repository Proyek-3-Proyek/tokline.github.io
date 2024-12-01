// const modal = document.getElementById("modalAlert");
// const closeModal = document.getElementById("closeModal");

// document.getElementById("loginButton").addEventListener("click", function () {
//   const email = document.getElementById("email").value;
//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;

//   if (!email || !username || !password) {
//     modal.classList.remove("hidden"); // Show the modal
//     return;
//   }

//   // Simulasi login (dapat diganti dengan API backend)
//   console.log({ email, username, password });
//   alert("Login berhasil! Anda akan diarahkan ke dashboard.");
//   window.location.href = "./dashboard.html";
// });

// closeModal.addEventListener("click", function () {
//   modal.classList.add("hidden"); // Hide the modal
// });// File: login.js

// Handle Google login redirect
// Event listener untuk tombol Login
document.getElementById("loginButton").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validasi input
  if (!email || !password) {
    showModal("Harap isi semua data!");
    return;
  }

  try {
    // Kirim permintaan login ke backend
    const response = await fetch(
      "https://backend-eight-phi-75.vercel.app/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      // Simpan token ke localStorage
      localStorage.setItem("token", data.token);
      alert("Login berhasil!");
      // Redirect ke halaman utama
      window.location.href = "./index.html";
    } else {
      // Tampilkan pesan error dari backend
      alert(data.message || "Login gagal!");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Terjadi kesalahan saat mencoba login.");
  }
});

// Fungsi untuk menampilkan modal error
function showModal(message) {
  const modal = document.getElementById("modalAlert");
  modal.querySelector("p").innerText = message;
  modal.classList.remove("hidden");

  document.getElementById("closeModal").addEventListener("click", () => {
    modal.classList.add("hidden");
  });
}

// Event listener untuk tombol Google Login
document.getElementById("googleLogin").addEventListener("click", function () {
  // Redirect ke endpoint Google Login di backend
  window.location.href =
    "https://backend-eight-phi-75.vercel.app/api/auth/google";
});

// Event listener untuk tombol WhatsApp Login
document.getElementById("whatsappLogin").addEventListener("click", function () {
  window.location.href = "./../../../src/page/whatsauth/index.html";
});

// Redirect ke signup.html dengan efek loading
const loadingOverlay = document.getElementById("loadingOverlay");
document
  .getElementById("signupRedirect")
  .addEventListener("click", function (e) {
    e.preventDefault(); // Mencegah perilaku default
    loadingOverlay.classList.remove("hidden"); // Tampilkan overlay loading
    setTimeout(() => {
      window.location.href = "./signup.html"; // Redirect setelah 2 detik
    }, 2000);
  });
