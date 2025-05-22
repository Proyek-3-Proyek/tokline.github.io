document.addEventListener("DOMContentLoaded", () => {
  // Toggle menu on small screens
  const menuButton = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu");

  menuButton.addEventListener("click", () => {
    menu.classList.toggle("show");
    menuButton.classList.toggle("open");
  });

  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll(".menu-links a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute("href").replace("#", "");
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Card hover effect with animation
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.05)";
      card.style.transition = "transform 0.3s ease-in-out";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
    });
  });

  // Modal for "Learn More" button
  const learnMoreButton = document.querySelector(".content-2 a");
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h2>Welcome to Shoju</h2>
            <p>Shoju offers trendy and stylish clothing options for your fashion needs. Explore our latest collection now!</p>
        </div>
    `;
  document.body.appendChild(modal);

  learnMoreButton.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "block";
  });

  const closeModal = modal.querySelector(".close-btn");
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Back to top button
  const backToTopButton = document.createElement("button");
  backToTopButton.classList.add("back-to-top");
  backToTopButton.textContent = "↑";
  document.body.appendChild(backToTopButton);

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  // Tangani token dari URL jika ada
  handleTokenFromUrl();

  // Perbarui tombol login/logout berdasarkan status login
  updateLoginButton();
});

// Fungsi untuk memeriksa status login
function checkLoginStatus() {
  const token = localStorage.getItem("token");
  return token !== null; // Jika token ada, anggap user sudah login
}

// Fungsi untuk memproses token dari URL
function handleTokenFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");

  if (token) {
    console.log("Token ditemukan di URL:", token);

    try {
      // Simpan token ke localStorage
      localStorage.setItem("token", token);
      console.log(
        "Token berhasil disimpan ke localStorage:",
        localStorage.getItem("token")
      );
    } catch (error) {
      console.error("Gagal menyimpan token:", error);
    } finally {
      // Bersihkan query string dari URL
      const baseUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, baseUrl);
      console.log("Query string dihapus, URL sekarang:", baseUrl);
    }
  } else {
    console.log("Token tidak ditemukan di URL.");
  }
}

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

// Fungsi untuk memperbarui tombol login/logout
function updateLoginButton() {
  const profileContainer = document.querySelector(".profil");

  if (checkLoginStatus()) {
    const token = localStorage.getItem("token");
    const userRole = parseJwt(token).role;

    // Jika user adalah admin, arahkan ke dashboard admin
    if (userRole === "admin") {
      window.location.href = "/dashboard";
      return;
    }

    // Jika user adalah pelanggan, tampilkan tombol Logout
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

      Swal.fire({
        icon: "success",
        title: "Logout Berhasil",
        text: "Anda telah logout.",
        confirmButtonText: "OK",
      }).then(() => {
        updateLoginButton(); // Perbarui tampilan tombol
        window.location.href = "/login"; // Arahkan ke halaman login
      });
    });
  } else {
    // Jika user belum login, tampilkan tombol Login
    profileContainer.innerHTML = `
      <a
        href="/login"
        class="pr-7 pl-7 pb-2 pt-2 bg-sky-500 hover:bg-sky-700 rounded-3xl text-white"
      >
        Login
      </a>
    `;
  }
}
// Navigasi ke halaman belanja
document.addEventListener("DOMContentLoaded", () => {
  const belanjaLink = document.querySelector(
    "a[href='./src/page/katalog/index.html']"
  );

  if (belanjaLink) {
    belanjaLink.addEventListener("click", function (event) {
      event.preventDefault(); // Mencegah perilaku default link
      window.location.href = "/belanja"; // Redirect ke endpoint /katalog
    });
  } else {
    console.log("Elemen Belanja tidak ditemukan di halaman.");
  }
});

// Navigasi ke halaman belanja
document.addEventListener("DOMContentLoaded", () => {
  const belanjaLink = document.querySelector(
    "a[href='./src/page/history/index.html']"
  );

  if (belanjaLink) {
    belanjaLink.addEventListener("click", function (event) {
      event.preventDefault(); // Mencegah perilaku default link
      window.location.href = "/history"; // Arahkan ke halaman belanja
    });
  } else {
    console.log("Elemen history tidak ditemukan di halaman.");
  }
});

// ------
