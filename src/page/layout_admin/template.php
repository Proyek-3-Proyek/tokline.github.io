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
    <!-- searchbar -->
    <!-- <div class="wrap">
        <div class="search">
            <input type="text" class="searchTerm" placeholder="Search....">
            <button type="submit" class="searchButton">
                <i class="fa fa-search"></i>
            </button>
        </div>
    </div> -->
    <div class="menu">
        <div class="menu-links">
            <a href="Inventory">Inventoy <i class="fa-solid fa-warehouse"></i></a>
            <a href="Masuk">Stock In <i class="fa-solid fa-boxes-stacked"></i></a>
            <a href="Keluar">Order Katalog <i class="fa-solid fa-truck-moving"></i></a>
        </div>
        <div class="profil">
            <div class="profil-u">
                <a href="#"><?= user()->username; ?></a>

            </div>
        </div>
        <div class="menu">
            <a href="logout"><button class="log-in">Logout</button></a>
        </div>


    </div>
    <div class="menu-btn">
        <i class="fa-solid fa-bars"></i>
    </div>
</nav>