console.log('Archivo JavaScript cargado correctamente');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM completamente cargado y analizado');
    
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario
        const nombre = document.getElementById('name');
        const email = document.getElementById('email');
        const asunto = document.getElementById('subject');
        const mensaje = document.getElementById('message');
        const errorMessage = document.getElementById('error-message');

        let isValid = true;

        if (!nombre.value.trim()) {
            nombre.classList.add('invalid');
            isValid = false;
        } else {
            nombre.classList.remove('invalid');
        }

        if (!email.value.trim()) {
            email.classList.add('invalid');
            isValid = false;
        } else {
            email.classList.remove('invalid');
        }

        if (!asunto.value.trim()) {
            asunto.classList.add('invalid');
            isValid = false;
        } else {
            asunto.classList.remove('invalid');
        }

        if (!mensaje.value.trim()) {
            mensaje.classList.add('invalid');
            isValid = false;
        } else {
            mensaje.classList.remove('invalid');
        }

        if (!isValid) {
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
            // Aquí podrías enviar el formulario si todo es válido
            alert('Formulario enviado correctamente!');
            // document.getElementById('contactForm').submit(); // Descomenta esta línea para enviar el formulario
        }
    });

    // CSS adicional para resaltar los campos inválidos
    const style = document.createElement('style');
    if ('invalid'){  style.innerHTML = `
        .invalid {
            border-color: red !important;
        }
    `;}
  
    document.head.appendChild(style);
});
