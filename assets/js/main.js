(function ($) {
  "use strict";

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();
})(jQuery);

const toggleModal = () => document.body.classList.toggle("open");

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}

$(".toggle").click(function () {
  $(this).toggleClass("on");
  $(".filter").slideToggle();
});

function filterItems(category) {
  console.log("Selected Category: " + category);
}

function filterItemsBySize(size) {
  console.log("Selected Size: " + size);
}

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
});

