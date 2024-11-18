<?= $this->extend('layout_admin/template2'); ?>
<?= $this->section('content'); ?>
<main>
    <div class="container-fluid px-4">
        <h1 class="mt-4">Order Katalog</h1>

        <div class="card mb-4">
            <div class="card-header">
            </div>
            <div class="card-body">
                <table id="datatablesSimple">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Code Purchases</th>
                            <th scope="col">Code Goods</th>
                            <th scope="col">Name of Items</th>
                            <th scope="col">Total Purchases</th>
                            <th scope="col">Total Payment</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($transaksiData as $row) : ?>
                            <tr>
                                <td><?= $row['tanggal_transaksi']; ?></td>
                                <td><?= $row['id_transaksi']; ?></td>
                                <td><?= $row['kode_pakaian']; ?></td>
                                <td><?= $row['namapakaian']; ?></td>
                                <td><?= $row['total_pembelian']; ?></td>
                                <td>Rp. <?= number_format($row['total_pembayaran'], 0, ',', '.'); ?></td>
                                <td><?= $row['status_transaksi']; ?></td>
                                <td class="action">
                                    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#ubah<?= $row['id_transaksi']; ?>">
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</main>
<?= $this->include('barang_keluar/modal_update'); ?>

<?= $this->endSection(); ?>