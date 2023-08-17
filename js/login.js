const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_ty0ex9r';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar ';
                alert('Sent!');
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });

Swal.fire({
    icon: 'success',
    title: 'Mensaje Enviado 😀',
    text: 'En breve un asesor se comunicará con vos.',
    confirmButtonText: 'Cerrar'
})

