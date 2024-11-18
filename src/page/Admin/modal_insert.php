<!-- The Modal -->
<div class="modal fade" id="myModal">
    <div class="modal-dialog">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">Tambah Barang</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal body -->
            <form method="post" action="<?= base_url('/inventory/insert') ?>" enctype="multipart/form-data">
                <div class="modal-body">
                    <input type="text" name="namapakaian" placeholder="Name of Goods" class="form-control" required>
                    <br>
                    <input type="text" name="deskripsi" placeholder="Description" class="form-control" required>
                    <br>
                    <label for="ukuran">Size:</label>
                    <select name="ukuran" class="form-control" required>
                        <option disabled selected>Size</option>
                        <option value="XXS">XXS</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                    <br>
                    <label for="warna">Color:</label>
                    <select name="warna" class="form-control" required>
                        <option disabled selected>Color</option>
                        <option value="Merah">Merah</option>
                        <option value="Biru">Biru</option>
                        <option value="Hijau">Hijau</option>
                        <option value="Kuning">Kuning</option>
                        <option value="Hitam">Hitam</option>
                        <option value="Biru Dongker">Biru Dongker</option>
                        <option value="Pink">Pink</option>
                        <option value="Maroon">Maroon</option>
                        <option value="Coklat">Coklat</option>
                        <option value="Abu-abu">Abu-abu</option>
                        <option value="Lavender">Lavender</option>
                        <option value="Charcoal">Charcoal</option>
                        <option value="Magenta">Magenta</option>
                        <option value="Putih">Putih</option>
                    </select>
                    <br>
                    <input type="text" name="kode_pakaian" placeholder="Code Goods" class="form-control" required>
                    <br>
                    <input type="number" name="stok" class="form-control" placeholder="Stock" required>
                    <br>
                    <input type="number" name="hargapakaian" class="form-control" placeholder="Price" required>
                    <br>
                    <input type="file" name="gambar" class="form-control" placeholder="Gambar Pakaian" required>
                    <br>
                    <button type="submit" class="btn btn-primary" name="addnewbarang">Submit</button>
                </div>
            </form>

        </div>
    </div>
</div>