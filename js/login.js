// Inicializando email.js
emailjs.init('oIAWoFkg-W611XkrB')

// Obtener el formulario y botón de envío
const form = document.querySelector('form')
const enviarBtn = document.getElementById('enviarBtn')

// Agregar un evento al formulario para el momento del envío
form.addEventListener('submit', function (event) {
    event.preventDefault()

    // Cambia el valor del botón a "Enviando..."
    enviarBtn.value = 'Enviando...'

    // ID del servicio y plantilla de email.js
    const serviceID = 'service_axt837j'
    const templateID = 'template_ty0ex9r'

    // Enviando el formulario a través de email.js
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            // Cambia el valor del botón de nuevo
            enviarBtn.value = 'Enviar mensaje'

            // Muestra un mensaje de éxito
            Swal.fire({
                icon: 'success',
                title: 'Mensaje Enviado 😀',
                text: 'En breve un asesor se comunicará con vos.',
                confirmButtonText: 'Cerrar'
            })

            // Restablece el formulario
            form.reset()
        })
        .catch((error) => {
            // Cambia el valor del botón de nuevo
            enviarBtn.value = 'Enviar mensaje'

            // Mostrar un mensaje de error con los detalles del error
            Swal.fire({
                icon: 'error',
                title: 'Error al Enviar',
                text: `Hubo un error al enviar el formulario: ${error}`,
                confirmButtonText: 'Cerrar'
            })
        })
})