<?php foreach ($transaksiData as $row) : ?>
    <div class="modal fade" id="ubah<?= $row['id_transaksi']; ?>">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Change Status</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- Modal body -->
                <form action="<?= base_url('keluar/updateStatus'); ?>" method="post">
                    <div class="modal-body">

                        <input type="hidden" name="id_transaksi" value="<?= $row['id_transaksi']; ?>">

                        <label for="status_transaksi">Status Transaksi:</label>
                        <select name="status_transaksi" class="form-control">
                            <option value="Pending" <?php if ($row['status_transaksi'] == 'Pending') echo 'selected'; ?>>Pending</option>
                            <option value="Processing" <?php if ($row['status_transaksi'] == 'Processing') echo 'selected'; ?>>Processing</option>
                            <option value="Completed" <?php if ($row['status_transaksi'] == 'Completed') echo 'selected'; ?>>Completed</option>
                            <!-- Tambahkan opsi lainnya sesuai kebutuhan -->
                        </select>
                        <br>

                        <button type="submit" class="btn btn-primary" name="updateStatus">Submit</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
<?php endforeach; ?>