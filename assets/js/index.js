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

// ========================
// Scroll Smooth
// ========================

const topBtn = document.getElementById("topBtn");
topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        topBtn.classList.remove("opacity-0");
        topBtn.classList.add("animate-top")
    } else {
        topBtn.classList.add("opacity-0");
        topBtn.classList.remove("animate-top")
    }
});