<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= base_url('/scss/auth.css'); ?>">
    <title>Shoju</title>
</head>

<body>
    <?= $this->renderSection('auth'); ?>

    <!-- submit button -->
    <script src="<?= base_url('/js/submit.js') ?>"></script>
    <script>
        document.querySelectorAll(".animasi-button").forEach((animasiButton) => {
            animasiButton.addEventListener("click", (e) => {
                console.log("Button clicked!");
                animasiButton.classList.add("processing");
                e.preventDefault();
            });
        });

        document.querySelector(".restart").addEventListener("click", (e) => {
            console.log("Restart clicked!");
            document.querySelectorAll(".animasi-button").forEach((animasiButton) => {
                animasiButton.classList.remove("processing");
            });
            e.preventDefault();
        });
    </script>
</body>

</html>