// Obtener el formulario y botón de envío
const form = document.querySelector('form');
const enviarBtn = document.getElementById('button');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    enviarBtn.value = 'Enviando...';

    const serviceID = 'service_1kxle9n';
    const templateID = 'template_ty0ex9r';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            enviarBtn.value = 'Enviar';
            Swal.fire({
                icon: 'success',
                title: 'Mensaje Enviado 😀',
                text: 'En breve un asesor se comunicará con vos.',
                confirmButtonText: 'Cerrar'
            });
        })
        .catch(err => {
            enviarBtn.value = 'Enviar';
            alert(JSON.stringify(err));
        });
        form.reset()
});
// Restablece el formulario

