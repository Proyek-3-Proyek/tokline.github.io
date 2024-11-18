<nav class="navbar">
    <div id="main">
        <?php if (isset($showButton) && $showButton) : ?>
            <button class="open-btn" onclick="openNav()">☰ </button>
        <?php endif; ?>
    </div>

    <div class="logo">
        <i class="fa-solid fa-font-owesome"></i>
        <a href="#">SHOJU</a>
    </div>

    <!-- SEARCH BAR -->

    <!-- SEARCH BAR SELESAI -->

    <div class="menu">
        <?php if (logged_in()) : ?>
            <?php if (in_groups('admin')) : ?>
                <!-- Menu untuk Admin -->
                <div class="menu-links">
                    <a href="<?= base_url('Inventory') ?>">Inventory <i class="fa-solid fa-warehouse"></i></a>
                    <a href="<?= base_url('Masuk') ?>">Stock In <i class="fa-solid fa-boxes-stacked"></i></a>
                    <a href="<?= base_url('Keluar') ?>">Order Katalog <i class="fa-solid fa-truck-moving"></i></a>
                </div>
            <?php elseif (in_groups('user')) : ?>
                <!-- Menu untuk User -->
                <div class="menu-links">
                    <a href="<?= base_url('dashboard') ?>">Home <i class="i-home fi fi-rr-home"></i></a>
                    <a href="<?= base_url('katalog') ?>">Belanja <i class=" i-belanja fi fi-rr-shopping-bag "></i></a>
                    <a href="<?= base_url('transaksi') ?>">Transaksi <i class="i-keranjang fi fi-rr-shopping-cart"></i></a>
                    <a href="<?= base_url('about') ?>">About <i class="i-about fi fi-rr-interrogation"></i></a>
                </div>
            <?php endif; ?>

            <div class="profil">
                <div class="profil-u">
                    <a href="<?= base_url('profile')?>"><?= user()->username; ?></a>
                </div>
            </div>
            <div class="menu">
                <a href="<?= base_url('/logout') ?>"><button class="log-in">Logout</button></a>
            </div>
        <?php else : ?>
            <!-- Menu untuk Pengunjung (tidak ada yang login) -->
            <div class="menu-links">
                <a href="<?= base_url('dashboard') ?>">Home <i class="i-home fi fi-rr-home"></i></a>
                <a href="<?= base_url('katalog') ?>">Belanja <i class=" i-belanja fi fi-rr-shopping-bag "></i></a>
                <a href="<?= base_url('transaksi') ?>">Transaksi <i class="i-keranjang fi fi-rr-shopping-cart"></i></a>
                <a href="<?= base_url('about') ?>">About <i class="i-about fi fi-rr-interrogation"></i></a>
            </div>

            <div class="menu">
                <a href="<?= route_to('login') ?>"><button class="log-in">Login</button></a>
                <!-- Tambahkan tautan atau tombol registrasi jika diperlukan -->
            </div>
        <?php endif; ?>
    </div>

    </div>
    <div class="menu-btn">
        <i class="fa-solid fa-bars"></i>
    </div>
</nav>