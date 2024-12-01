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
document.addEventListener("DOMContentLoaded", () => {
  // Login menggunakan email dan password
  document.getElementById("loginButton").addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validasi input
    if (!email || !password) {
      showModal("Harap isi semua data!");
      return;
    }

    try {
      // Kirim data login ke backend
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

        // Redirect berdasarkan role
        const userRole = parseJwt(data.token).role; // Parse role dari token
        if (userRole === "admin") {
          window.location.href =
            "/tokline.github.io/src/page/Admin/dashboard/index.html";
        } else if (userRole === "pelanggan") {
          window.location.href = "/tokline.github.io/index.html";
        }
      } else {
        showModal(data.message || "Login gagal!");
      }
    } catch (error) {
      console.error("Error:", error);
      showModal("Terjadi kesalahan saat mencoba login.");
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    // Login menggunakan Google
    document.getElementById("googleLoginButton").addEventListener("click", () => {
      // Redirect ke endpoint Google login di backend
      window.location.href =
        "https://backend-eight-phi-75.vercel.app/api/auth/google";
    });
  
    // Tangani callback Google login
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
  
    if (token) {
      // Simpan token ke localStorage
      localStorage.setItem("token", token);
      alert("Login berhasil dengan Google!");
  
      // Hapus token dari URL untuk keamanan
      window.history.replaceState({}, document.title, window.location.pathname);
  
      // Parse role user dari token
      const userRole = parseJwt(token).role;
  
      // Redirect berdasarkan role
      if (userRole === "admin") {
        window.location.href =
          "/tokline.github.io/src/page/Admin/dashboard/index.html";
      } else if (userRole === "pelanggan") {
        window.location.href = "/tokline.github.io/index.html";
      }
    } else {
      console.log("Token tidak ditemukan di URL.");
    }
  });
  
  // Fungsi untuk mem-parse JWT
  function parseJwt(token) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => `%${c.charCodeAt(0).toString(16).padStart(2, "0")}`)
        .join("")
    );
  
    return JSON.parse(jsonPayload);
  }
  

// Fungsi untuk menampilkan modal error
function showModal(message) {
  const modal = document.getElementById("modalAlert");
  modal.querySelector("p").innerText = message;
  modal.classList.remove("hidden");

  document.getElementById("closeModal").addEventListener("click", () => {
    modal.classList.add("hidden");
  });
}

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
