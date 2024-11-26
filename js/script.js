document.addEventListener('DOMContentLoaded', function() {
    const btnScrollToTop = document.getElementById('btnScrollToTop');
    if (btnScrollToTop) {
        btnScrollToTop.addEventListener('click', function() {
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
    }

    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = form.querySelector('input[type="text"][placeholder="Tu nombre"]');
        const correo = form.querySelector('input[type="email"][placeholder="Tu correo"]');
        const motivo = form.querySelector('input[type="text"][placeholder="Motivo"]');
        const mensaje = form.querySelector('textarea[placeholder="Tu mensaje"]');
        
        clearErrors();

        let isValid = true;

        if (!nombre.value.trim()) {
            showError(nombre, "El nombre es obligatorio.");
            isValid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!correo.value.trim()) {
            showError(correo, "El correo es obligatorio.");
            isValid = false;
        } else if (!emailPattern.test(correo.value)) {
            showError(correo, "Por favor, ingresa un correo válido.");
            isValid = false;
        }

        if (!motivo.value.trim()) {
            showError(motivo, "El motivo es obligatorio.");
            isValid = false;
        }

        if (!mensaje.value.trim()) {
            showError(mensaje, "El mensaje es obligatorio.");
            isValid = false;
        } else if (mensaje.value.trim().length < 5) {
            showError(mensaje, "El mensaje debe tener al menos 5 caracteres.");
            isValid = false;
        }

        if (isValid) {
            form.submit();
        }
    });

    function showError(inputElement, message) {
        const errorElement = document.createElement('div');
        errorElement.classList.add('invalid-feedback');
        errorElement.textContent = message;

        inputElement.classList.add('is-invalid');
        inputElement.insertAdjacentElement('afterend', errorElement);
    }

    function clearErrors() {
        const errorElements = document.querySelectorAll('.invalid-feedback');
        errorElements.forEach(function(element) {
            element.remove();
        });

        const invalidElements = document.querySelectorAll('.is-invalid');
        invalidElements.forEach(function(element) {
            element.classList.remove('is-invalid');
        });
    }
    
    const experienceIcons = document.querySelectorAll('.experience-icon');
    
    experienceIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            this.classList.add('bounce');
            setTimeout(() => {
                this.classList.remove('bounce');
            }, 500);
        });
    });

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
 
            alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
            contactForm.reset();
        });

        // Efecto de enfoque para los campos del formulario
        const formInputs = contactForm.querySelectorAll('.form-control');
        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('input-focused');
            });
            input.addEventListener('blur', function() {
                if (this.value === '') {
                    this.parentElement.classList.remove('input-focused');
                }
            });
        });
    }
    
    const portfolioItems = document.querySelectorAll('.card');
    portfolioItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });

    
    portfolioItems.forEach((item) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });

});
