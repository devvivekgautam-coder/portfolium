// ===============================
// Swiper Initialization
// ===============================
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
    breakpoints: {
        768: { slidesPerView: 1 },
        992: { slidesPerView: 2 }
    }
});

// ===============================
// Contact Form Submission (Frontend)
// ===============================
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const form = this;
    const formMessage = document.querySelector('.form-message');

    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        formMessage.innerHTML = `
            <div class="alert alert-success d-flex align-items-center" role="alert">
                <i class="fas fa-check-circle me-2"></i>
                <div>
                    Message sent successfully! I'll get back to you soon.
                </div>
            </div>
        `;
        formMessage.style.opacity = '1';
        form.reset();

        setTimeout(() => {
            formMessage.style.opacity = '0';
            setTimeout(() => formMessage.innerHTML = '', 300);
        }, 6000);
    })
    .catch(() => {
        formMessage.innerHTML = `
            <div class="alert alert-danger">Something went wrong. Please try again.</div>
        `;
    });
});

// ===============================
// Project Filter Button UI
// ===============================
document.querySelectorAll('.project-sec button').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelectorAll('.project-sec button').forEach(btn => {
            btn.classList.remove('active-project');
            btn.style.background = 'transparent';
        });

        this.classList.add('active-project');
        this.style.background = 'linear-gradient(45deg, rgba(255,215,0,0.1), rgba(192,192,192,0.1))';
    });
});

// Set default active button
document.querySelector('.project-sec button')?.classList.add('active-project');

// ===============================
// Smooth Scroll
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        e.preventDefault();

        const target = document.querySelector(targetId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
