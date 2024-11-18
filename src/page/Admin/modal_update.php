<?php foreach ($namapakaian as $p) : ?>
    <div class="modal fade" id="edit<?= $p['idpakaian']; ?>">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Edit Items</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"> </button>
                </div>

                <!-- Modal body -->
                <form action="<?= base_url('/inventory/update/' . $p['idpakaian']) ?>" method="post" enctype="multipart/form-data">
                    <div class="modal-body">
                        <input type="hidden" name="id" value="<?= $p['idpakaian']; ?>" class="form-control" required>
                        <br>
                        <input type="text" name="namapakaian" value="<?= $p['namapakaian']; ?>" class="form-control" required>
                        <br>
                        <input type="text" name="kode_pakaian" value="<?= $p['kode_pakaian']; ?>" class="form-control" required>
                        <br>
                        <input type="text" name="deskripsi" value="<?= $p['deskripsi']; ?>" class="form-control" required>
                        <br>
                        <input type="number" name="stok" value="<?= $p['stok']; ?>" class="form-control" required>
                        <br>
                        <label for="warna">Color:</label>
                        <select name="warna" class="form-control" required>
                            <option value="Merah" <?php if ($p['warna'] == 'Merah') echo 'selected'; ?>>Merah</option>
                            <option value="Biru" <?php if ($p['warna'] == 'Biru') echo 'selected'; ?>>Biru</option>
                            <option value="Hijau" <?php if ($p['warna'] == 'Hijau') echo 'selected'; ?>>Hijau</option>
                            <option value="Kuning" <?php if ($p['warna'] == 'Kuning') echo 'selected'; ?>>Kuning</option>
                            <option value="Hitam" <?php if ($p['warna'] == 'Hitam') echo 'selected'; ?>>Hitam</option>
                            <option value="Biru Dongker" <?php if ($p['warna'] == 'Biru Dongker') echo 'selected'; ?>>Biru Dongker</option>
                            <option value="Pink" <?php if ($p['warna'] == 'Pink') echo 'selected'; ?>>Pink</option>
                            <option value="Maroon" <?php if ($p['warna'] == 'Maroon') echo 'selected'; ?>>Maroon</option>
                            <option value="Coklat" <?php if ($p['warna'] == 'Coklat') echo 'selected'; ?>>Coklat</option>
                            <option value="Abu-abu" <?php if ($p['warna'] == 'Abu-abu') echo 'selected'; ?>>Abu-abu</option>
                            <option value="Lavender" <?php if ($p['warna'] == 'Lavender') echo 'selected'; ?>>Lavender</option>
                            <option value="Charcoal" <?php if ($p['warna'] == 'Charcoal') echo 'selected'; ?>>Charcoal</option>
                            <option value="Magenta" <?php if ($p['warna'] == 'Magenta') echo 'selected'; ?>>Magenta</option>
                            <option value="Putih" <?php if ($p['warna'] == 'Putih') echo 'selected'; ?>>Putih</option>
                        </select>
                        <br>
                        <label for="ukuran">Size:</label>
                        <select name="ukuran" class="form-control" required>
                            <option value="XXS" <?php if ($p['ukuran'] == 'XXS') echo 'selected'; ?>>XXS</option>
                            <option value="XS" <?php if ($p['ukuran'] == 'XS') echo 'selected'; ?>>XS</option>
                            <option value="S" <?php if ($p['ukuran'] == 'S') echo 'selected'; ?>>S</option>
                            <option value="M" <?php if ($p['ukuran'] == 'M') echo 'selected'; ?>>M</option>
                            <option value="L" <?php if ($p['ukuran'] == 'L') echo 'selected'; ?>>L</option>
                            <option value="XL" <?php if ($p['ukuran'] == 'XL') echo 'selected'; ?>>XL</option>
                            <option value="XXL" <?php if ($p['ukuran'] == 'XXL') echo 'selected'; ?>>XXL</option>
                            <!-- Tambahkan pilihan ukuran lainnya sesuai kebutuhan -->
                        </select>
                        <br>
                        <input type="file" name="gambar" id="gambar">
                        <button type="submit" class="btn btn-primary" name="updatebarang">Submit</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
<?php endforeach; ?>
