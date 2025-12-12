
// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        576: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 }
    }
});

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Show success message
    const formMessage = document.querySelector('.form-message');
    formMessage.innerHTML = `
                <div class="alert alert-success d-flex align-items-center" role="alert">
                    <i class="fas fa-check-circle me-2"></i>
                    <div>
                        Message sent successfully! I'll get back to you soon.
                    </div>
                </div>
            `;
    formMessage.style.opacity = '1';

    // Reset form
    setTimeout(() => {
        this.reset();
    }, 3000);

    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.opacity = '0';
        setTimeout(() => {
            formMessage.innerHTML = '';
        }, 300);
    }, 5000);
});

// Project filter buttons
document.querySelectorAll('.project-sec button').forEach(button => {
    button.addEventListener('click', function () {
        // Remove active class from all buttons
        document.querySelectorAll('.project-sec button').forEach(btn => {
            btn.classList.remove('active-project');
            btn.style.background = 'transparent';
        });

        // Add active class to clicked button
        this.classList.add('active-project');
        this.style.background = 'linear-gradient(45deg, rgba(255,215,0,0.1), rgba(192,192,192,0.1))';
    });
});

// Initialize first project button as active
document.querySelector('.project-sec button').classList.add('active-project');
document.querySelector('.project-sec button').style.background = 'linear-gradient(45deg, rgba(255,215,0,0.1), rgba(192,192,192,0.1))';

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Show alert message
    alert("Thank you, " + name + "! Your message has been sent.\n\nI'll reply to: " + email);

    // Also show styled message on page
    const formMessage = document.querySelector('.form-message');
    formMessage.innerHTML = `
        <div class="alert alert-success d-flex align-items-center" role="alert" style="
            background: linear-gradient(135deg, rgba(255,215,0,0.1), rgba(192,192,192,0.1));
            border: 1px solid rgba(255,215,0,0.3);
            color: #B8860B;
        ">
            <i class="fas fa-check-circle me-2" style="color: #FFD700;"></i>
            <div>
                <strong>Message sent successfully!</strong><br>
                Thank you ${name}, I'll reply to ${email} within 24 hours.
            </div>
        </div>
    `;
    formMessage.style.opacity = '1';

    // Log to console for testing
    console.log("=== FORM SUBMISSION ===");
    console.log("From:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    // Reset form
    this.reset();

    // Hide message after 8 seconds
    setTimeout(() => {
        formMessage.style.opacity = '0';
        setTimeout(() => {
            formMessage.innerHTML = '';
        }, 300);
    }, 8000);
});