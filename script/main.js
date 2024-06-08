function handleSubmission() {
    var name = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var quantity = document.getElementById("jumlah").value;
    var paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    

    var alertHTML = `
        <div class="form-values">
            <div class="form-group">
                <label for="nama" style="width: 130px;">Nama : </label>
                <input type="text" value="${name}" readonly />
            </div>
            <div class="form-group">
                <label for="email" style="width: 130px;">Email :</label>
                <input type="text" value="${email}" readonly />
            </div>
            <div class="form-group">
                <label for="jumlah" style="width: 130px;">Jumlah :</label>
                <input type="text" value="${quantity}" readonly />
            </div>
            <div class="form-group">
                <label for="paymentMethod" style="width: 130px;">Payment :</label>
                <input type="text" value="${paymentMethod}" readonly />
        </div>`;

        // untuk membuat judul dan button
    Swal.fire({
        title: "Confirm Ur Ticket",
        html: alertHTML,
        showCancelButton: true,
        confirmButtonText: "Letsgo!",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#3885d6",
        cancelButtonColor: "#d33",
        customClass: {
            title: "swal-title",
            htmlContainer: "swal-html-container",
            confirmButton: "swal-confirm-button",
            cancelButton: "swal-cancel-button",
            popup: "swal-popup"
        }
        // ketika melakukan konfirmasi
    }).then((result) => {
        if (result.isConfirmed) {
            var ticketData = {
                Name: name,
                Email: email,
                Total: jumlah,
                PaymentMethod: paymentMethod
            };
            console.log(ticketData);
            Swal.fire({
                title: "Thank You",
                text: "you will recive an email. Footbal is coming home",
                icon: "success",
                customClass: {
                    title: "swal-title",
                    closeButton: "swal-close-button",
                    popup: "swal-popup"
                },
                onOpen: function() {
                    document.querySelector('.swal-modal').style.top = '50%';
                    document.querySelector('.swal-modal').style.left = '50%';
                    document.querySelector('.swal-modal').style.transform = 'translate(-50%, -50%)';
                }
            });
            // ketika melakukan pembatalan
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire({
                title: "Cancel",
                text: "Ticket was cancel",
                icon: "error",
                customClass: {
                    title: "swal-title",
                    closeButton: "swal-close-button",
                    popup: "swal-popup"
                },
                onOpen: function() {
                    document.querySelector('.swal-modal').style.top = '50%';
                    document.querySelector('.swal-modal').style.left = '50%';
                    document.querySelector('.swal-modal').style.transform = 'translate(-50%, -50%)';
                }
            });
        }
    });
}
