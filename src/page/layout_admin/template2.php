<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Stock of Goods</title>
    <link rel="website icon" type="png" href="logo.png">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      integrity="sha512-c42qTSw/wPZ3/5LBzD+Bw5f7bSF2oxou6wEb+I/lqeaKV5FDIfMvvRp772y4jcJLKuGUOpbJMdg/BTl50fJYAw=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link href="https://fonts.googleapis.com/css2?family=Nova+Round&family=Poppins:wght@300;500&family=Ubuntu&display=swap" rel="stylesheet" />
    <script src="https://kit.fontawesome.com/1ef1772957.js" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css" rel="stylesheet" />
    <link href="<?=base_url('css/styles.css') ?>" rel="stylesheet" />
</head>

<body class="sb-nav-fixed">

<div>
<?php if (in_groups('admin')) : ?>
    <nav class="sb-topnav navbar navbar-expand navbar-dark" style="background: linear-gradient(#e91e63, #2196f3)">
        <!-- Sidebar Toggle-->
        <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" style="padding-left: 10px;" href="#!"><i class="fas fa-bars"></i></button>
        <!-- Navbar Brand-->
        <a class="navbar-brand ps-3" href="index.php"><h2 style="font-family:Nova Round;">SHOJU</h2></a>
        

    </nav>
    <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
            <!-- sidebar -->
            <nav class="sb-sidenav accordion" style="background-color:#e91e63" id="sidenavAccordion">
                <div class="sb-sidenav-menu">
                    <div class="nav" style="color: #fff;">
                        <div class="sb-sidenav-menu-heading">Core</div>
                        <a class="nav-link" href="<?= base_url('inventory') ?>" style="color: #fff;">
                            <div class="sb-nav-link-icon" style="color: #fff;"><i class="fa-solid fa-warehouse"></i></i></div>
                            Stock Inventory
                        </a>
                        <a class="nav-link" href="<?= base_url('masuk') ?>" style="color: #fff;">
                            <div class="sb-nav-link-icon"  style="color: #fff;"><i class="fa-solid fa-boxes-stacked"></i></div>
                            Stock In
                        </a>
                        <a class="nav-link" href="<?= base_url('keluar') ?>"style="color: #fff;">
                            <div class="sb-nav-link-icon"  style="color: #fff;"><i class="fa-solid fa-truck-moving"></i></i></div>
                            Order Katalog
                        </a>
                        <a class="nav-link" href="<?= base_url('/logout') ?>" style="color: #fff;">
                            Logout
                        </a>
                    </div>
                </div>
            </nav>
        </div>
        <div id="layoutSidenav_content">
        <?= $this->renderSection('content') ?>
        </div>
        <footer class="py-4 bg-light mt-auto">
            <div class="container-fluid px-4">
                <div class="d-flex align-items-center justify-content-between small">
                    <div class="text-muted">Copyright &copy; Your Website 2022</div>
                    <div>
                        <a href="#">Privacy Policy</a>
                        &middot;
                        <a href="#">Terms &amp; Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
<?php endif; ?>
</div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
    <script src="<?=base_url('js/scripts.js')?>"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js" crossorigin="anonymous"></script>
    <script src="<?=base_url('assets/demo/chart-area-demo.js') ?>"></script>
    <script src="<?=base_url('assets/demo/chart-bar-demo.js') ?>"></script>
    <script src="https://cdn.jsdelivr.net/npm/simple-datatables@latest" crossorigin="anonymous"></script>
    <script src="<?=base_url('js/datatables-simple-demo.js') ?>"></script>
</body>



</html>