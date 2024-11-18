document.querySelectorAll(".animasi-button").forEach((animasiButton) => {
  animasiButton.addEventListener("click", (e) => {
    animasiButton.classList.add("processing");
    e.preventDefault();
  });
});

document.querySelector(".restart").addEventListener("click", (e) => {
  document.querySelectorAll(".animasi-button").forEach((animasiButton) => {
    animasiButton.classList.remove("processing");
  });
  e.preventDefault();
});
