<?= $this->extend('layout_admin/template2'); ?>
<?= $this->section('content'); ?>

            <main>
                <div class="container-fluid px-4">
                    <h1 class="mt-4">Stock Inventory</h1>

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
                                        <th>No</th>
                                        <th>Name of Items</th>
                                        <th>Description</th>
                                        <th>Size</th>
                                        <th>color</th>
                                        <th>Code Goods</th>
                                        <th>Stock</th>
                                        <th>Price</th>
                                        <th>Image</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <?php $i = 1; ?>
                                <tbody>
                                    <?php foreach ($namapakaian as $p) : ?>
                                        <tr>
                                            <th scope="row"><?= $i++ ?></th>
                                            <td><?= $p['namapakaian']; ?></td>
                                            <td><?= $p['deskripsi']; ?></td>
                                            <td><?= $p['ukuran']; ?></td>
                                            <td><?= $p['warna']; ?></td>
                                            <td><?= $p['kode_pakaian']; ?></td>
                                            <td><?= $p['stok']; ?></td>
                                            <td>Rp<?= $p['hargapakaian']; ?></td>
                                            <td><img src="<?= base_url('uploads/' . $p['gambar']) ?>" alt="Uploaded Image" width="50"></td>
                                            <td class="action">
                                                <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit<?= $p['idpakaian']; ?>">
                                                    Edit
                                                </button>
                                                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete<?= $p['idpakaian']; ?>">
                                                    Delete
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

<?= $this->include('admin/modal_update'); ?>
<?= $this->include('admin/modal_delete'); ?>
<?= $this->include('admin/modal_insert'); ?>

<?= $this->endSection(); ?>