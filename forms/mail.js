
emailjs.init('uN3Rq_EbdDkgeTurZ');
window.onload = function() {
    document.getElementById('mail-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('portfolio', 'template_e1lwjso', this)
            .then(function() {
                let form = document.getElementById('mail-form');
                const modal = document.createElement('div');
                modal.classList.add('alert');
                modal.classList.add('alert-success');
                modal.innerHTML = "Success! Message has been sent";
                form.appendChild(modal);
                form.reset();
            }, function(error) {
                let form = document.getElementById('mail-form');
                const modal = document.createElement('div');
                modal.classList.add('alert');
                modal.classList.add('alert-danger');
                modal.innerHTML = "Failure! Message Not sent";
                form.appendChild(modal);
                form.reset();
            });
    });
}