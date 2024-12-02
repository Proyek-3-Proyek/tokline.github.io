document.addEventListener("DOMContentLoaded", () => {
  console.log("Script login.js dimuat.");

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
        const userRole = parseJwt(data.token).role;
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

  // Login menggunakan Google
  document.getElementById("googleLoginButton").addEventListener("click", () => {
    window.location.href =
      "https://backend-eight-phi-75.vercel.app/api/auth/google";
  });

// Tangani callback Google login
console.log("Current URL:", window.location.href); // Log full URL
console.log("Query String:", window.location.search); // Log only query string

const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get("token");
console.log("Extracted Token:", token); // Log extracted token

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");

  if (token) {
      console.log("Token ditemukan:", token);
      localStorage.setItem("token", token);
  } else {
      console.error("Token tidak ditemukan di URL.");
  }
});


if (token) {
  try {
    // Simpan token ke localStorage
    localStorage.setItem("token", token);
    console.log("Token berhasil disimpan ke localStorage:", localStorage.getItem("token"));

    // Parse JWT untuk mendapatkan informasi user
    const payload = parseJwt(token);
    console.log("Payload JWT:", payload);

    // Validasi token
    if (!payload || !payload.id || !payload.role) {
      throw new Error("Token tidak valid");
    }

    // Redirect berdasarkan role user
    if (payload.role === "admin") {
      window.location.href =
        "https://proyek-3-proyek.github.io/tokline.github.io/src/page/Admin/dashboard/index.html";
    } else if (payload.role === "pelanggan") {
      window.location.href =
        "https://proyek-3-proyek.github.io/tokline.github.io";
    } else {
      throw new Error("Role tidak dikenali");
    }
  } catch (error) {
    console.error("Error:", error.message);
    alert("Terjadi kesalahan. Silakan coba lagi.");
  } finally {
    // Bersihkan URL query string
    const baseUrl = window.location.origin + window.location.pathname;
    console.log("Menghapus query string, redirect ke:", baseUrl);
    window.history.replaceState({}, document.title, baseUrl);
  }
} else {
  console.log("Token tidak ditemukan di URL.");
}
});

let token = localStorage.getItem("token");

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
