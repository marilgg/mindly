// =========================================
// MENÚ HAMBURGUESA
// =========================================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Cerrar el menú al seleccionar una opción

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});


// =========================================
// BARRAS DE HABILIDADES ANIMADAS
// =========================================

const progressBars = document.querySelectorAll(".progress");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const progress = entry.target;

                if (progress.classList.contains("html")) {
                    progress.style.width = "90%";
                }

                if (progress.classList.contains("css")) {
                    progress.style.width = "85%";
                }

                if (progress.classList.contains("javascript")) {
                    progress.style.width = "75%";
                }

                if (progress.classList.contains("php")) {
                    progress.style.width = "70%";
                }

                if (progress.classList.contains("mysql")) {
                    progress.style.width = "70%";
                }

                if (progress.classList.contains("git")) {
                    progress.style.width = "80%";
                }

            }

        });

    },
    {
        threshold: 0.5
    }
);

progressBars.forEach(bar => {
    observer.observe(bar);
});


// =========================================
// VALIDACIÓN DEL FORMULARIO
// =========================================

const contactForm = document.getElementById("contact-form");

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");

const nombreError = document.getElementById("nombre-error");
const emailError = document.getElementById("email-error");
const mensajeError = document.getElementById("mensaje-error");

const formSuccess = document.getElementById("form-success");


// Función para validar el nombre

function validarNombre() {

    if (nombre.value.trim() === "") {

        nombreError.textContent = "Por favor, escribe tu nombre.";

        return false;

    }

    if (nombre.value.trim().length < 3) {

        nombreError.textContent = "El nombre debe tener al menos 3 caracteres.";

        return false;

    }

    nombreError.textContent = "";

    return true;
}


// Función para validar el correo

function validarEmail() {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {

        emailError.textContent = "Por favor, escribe tu correo.";

        return false;

    }

    if (!emailRegex.test(email.value.trim())) {

        emailError.textContent = "Escribe un correo electrónico válido.";

        return false;

    }

    emailError.textContent = "";

    return true;
}


// Función para validar el mensaje

function validarMensaje() {

    if (mensaje.value.trim() === "") {

        mensajeError.textContent = "Por favor, escribe un mensaje.";

        return false;

    }

    if (mensaje.value.trim().length < 10) {

        mensajeError.textContent = "El mensaje debe tener al menos 10 caracteres.";

        return false;

    }

    mensajeError.textContent = "";

    return true;
}


// =========================================
// VALIDACIÓN EN TIEMPO REAL
// =========================================

nombre.addEventListener("input", validarNombre);

email.addEventListener("input", validarEmail);

mensaje.addEventListener("input", validarMensaje);


// =========================================
// ENVÍO DEL FORMULARIO
// =========================================

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const nombreValido = validarNombre();
    const emailValido = validarEmail();
    const mensajeValido = validarMensaje();


    if (
        nombreValido &&
        emailValido &&
        mensajeValido
    ) {

        formSuccess.textContent =
            "¡Mensaje enviado correctamente! Gracias por contactarme. 💜";

        contactForm.reset();

    } else {

        formSuccess.textContent = "";

    }

});


// =========================================
// BOTONES DE PROYECTOS
// =========================================

const projectButtons = document.querySelectorAll(".project-btn");

projectButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const projectCard = button.closest(".project-card");

        const projectName =
            projectCard.querySelector("h3").textContent;

        alert(
            `Has seleccionado el proyecto: ${projectName}`
        );

    });

});


// =========================================
// MENSAJE EN CONSOLA
// =========================================

console.log(
    "Portafolio de Mariana Lamus cargado correctamente. 💜"
);
