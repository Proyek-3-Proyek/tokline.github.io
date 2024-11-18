<?= $this->extend('layout_admin/template2'); ?>
<?= $this->section('content'); ?>
<main>
    <div class="container-fluid px-4">
        <h1 class="mt-4">Stock In</h1>

        <div class="card mb-4">
            <div class="card-header">
                <!-- To Open Modal -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                    Add Items
                </button>
            </div>
            <div class="card-body">
                <table id="datatablesSimple">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Code Goods</th>
                            <th>Name of Items</th>
                            <th>Size</th>
                            <th>Color</th>
                            <th>Amount</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($masukData as $row) : ?>
                            <tr>
                                <td><?= $row['tanggal_pakaian_masuk']; ?></td>
                                <td><?= $row['kode_pakaian']; ?></td>
                                <td><?= $row['namapakaian']; ?></td>
                                <td><?= $row['ukuran']; ?></td>
                                <td><?= $row['warna']; ?></td>
                                <td><?= $row['jumlah_pakaian_masuk']; ?></td>
                                <td><?= $row['keterangan']; ?></td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</main>
<?= $this->include('barang_masuk/modal_insert'); ?>

<?= $this->endSection(); ?>