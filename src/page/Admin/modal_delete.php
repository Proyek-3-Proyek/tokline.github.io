<!-- Delete Modal -->
<?php foreach ($namapakaian as $p) : ?>
    <div class="modal fade" id="delete<?= $p['idpakaian']; ?>">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Delete Items</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal">
                    </button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    Are You Sure You Want To Delete <?= $p['namapakaian']; ?>?
                    <br>
                    <br>
                    <a href="<?= base_url('/inventory/delete/' . $p['idpakaian']) ?>" class="btn btn-danger">Delete</a>
                </div>

            </div>
        </div>
    </div>
<?php endforeach; ?>