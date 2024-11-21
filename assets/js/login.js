document.getElementById("loginButton").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const rememberMe = document.getElementById("rememberMe").checked;

  if (!email || !username || !password) {
    alert("Harap isi semua data!");
    return;
  }

  // Simulasi login (dapat diganti dengan API backend)
  console.log({
    email,
    username,
    password,
    rememberMe,
  });
  alert("Login berhasil! Anda akan diarahkan ke dashboard.");
  window.location.href = "./dashboard.html";
});

document.getElementById("whatsappLogin").addEventListener("click", function () {
  const whatsappUrl = `https://wa.me?text=Login%20via%20WhatsAuth`;
  window.open(whatsappUrl, "_blank");
});
