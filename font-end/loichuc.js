var textarea = document.getElementById('message');
var form = document.getElementById('emailForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const prePayload = new FormData(form);
    const payload = new URLSearchParams(prePayload);
    
    fetch("http://localhost:9000/send", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: payload.toString(),
    })
    .then(res => res.json())
    .then(data => {
        // Check if the server response indicates success
        if (data === 'Email đã được gửi thành công') {
            // Show a success SweetAlert
            Swal.fire({
                icon: 'success',
                title: 'Thành công!',
                text: 'Dữ liệu đã được gửi thành công.',
            });

            // Clear the textarea
            textarea.value = "";
        } else {
            // Handle the case where the server response is not successful (if needed)
            Swal.fire({
                icon: 'error',
                title: 'Thất bại!',
                text: 'Gửi email thất bại.',
            });
        }
    })
    .catch(error => {
        console.log(error);
        // Handle errors if they occur
        Swal.fire({
            icon: 'success',
            title: 'Đã gởi cho đối phươnggg!',
            text: 'Mở gmail lên và xemmm.',
        });
    });
});
