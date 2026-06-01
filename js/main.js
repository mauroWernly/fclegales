// =======================================
// SMOOTH SCROLL
// =======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const element = document.querySelector(targetId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// =======================================
// FORM HANDLING
// =======================================

const contactForm = document.getElementById('contactForm');
const contactToggle = document.getElementById('contactToggle');
const emailField = document.getElementById('emailField');
const telefonoField = document.getElementById('telefonoField');
const emailInput = document.getElementById('email');
const telefonoInput = document.getElementById('telefono');

// Handle toggle changes
if (contactToggle) {
    contactToggle.addEventListener('change', function() {
        if (this.checked) {
            // WhatsApp mode - hide email and telefono fields
            emailField.style.display = 'none';
            telefonoField.style.display = 'none';
            emailInput.required = false;
            telefonoInput.required = false;
        } else {
            // Email mode - show email and telefono fields
            emailField.style.display = 'grid';
            telefonoField.style.display = 'grid';
            emailInput.required = true;
            telefonoInput.required = false;
        }
    });
    
    // Set initial state (WhatsApp is default/checked, so hide email and telefono)
    if (contactToggle.checked) {
        emailField.style.display = 'none';
        telefonoField.style.display = 'none';
        emailInput.required = false;
    }
}

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const asunto = document.getElementById('asunto').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        
        // Validate required fields
        if (!nombre || !asunto || !mensaje) {
            alert('Por favor, completa todos los campos requeridos.');
            return;
        }
        
        // For email mode, require email
        if (!contactToggle.checked && !email) {
            alert('Por favor, completa el campo de email.');
            return;
        }
        
        // Check if WhatsApp is selected
        if (contactToggle.checked) {
            // WhatsApp message
            let whatsappText = `Hola, soy ${nombre}.\n\nAsunto: ${asunto}\n\nMensaje:\n${mensaje}`;
            
            if (email) {
                whatsappText += `\n\nMi email es: ${email}`;
            }
            if (telefono) {
                whatsappText += `\nMi teléfono es: ${telefono}`;
            }
            
            const whatsappNumber = '543425110049';
            const encodedText = encodeURIComponent(whatsappText);
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
            
            console.log('WhatsApp Link:', whatsappLink);
            console.log('WhatsApp Text:', whatsappText);
            
            window.open(whatsappLink, '_blank');
            setTimeout(() => {
                alert('Se abrirá WhatsApp. Completa el envío de tu mensaje.');
                contactForm.reset();
                contactToggle.checked = true;
                emailField.style.display = 'none';
                telefonoField.style.display = 'none';
            }, 500);
        } else {
            // Email
            const mailtoLink = `mailto:Dra.florenciacubile@gmail.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(`De: ${nombre}\nTeléfono: ${telefono}\nEmail: ${email}\n\nMensaje:\n${mensaje}`)}`;
            window.location.href = mailtoLink;
            alert('Se abrirá tu cliente de correo. Si deseas, también podés llamar al 342-5110049');
        }
    });
}

// =======================================
// NAVBAR SCROLL EFFECT
// =======================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    } else {
        navbar.style.boxShadow = '0 0 0 rgba(0, 0, 0, 0)';
    }
});

// =======================================
// ACTIVE NAVIGATION LINK
// =======================================

window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
});

// =======================================
// INITIALIZATION
// =======================================

console.log('Dra. Florencia Cubile - Portfolio cargado correctamente');