const savedTheme = localStorage.getItem("theme");
const heroTitle = document.getElementById("hero-title");
const textToType = "Привет, я Emerald_NS";
const revealElements = document.querySelectorAll(".reveal");
const burgerBtn = document.getElementById("burger-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuLinks = document.querySelectorAll(".menu a")
const themeToggle = document.getElementById("theme-toggle");
let charIndex = 0;

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    themeToggle.checked = true; 
}

themeToggle.addEventListener("change", function() {
    if (this.checked) {
        document.body.classList.add("light");
        localStorage.setItem("theme", "light");
    } else {
        document.body.classList.remove("light");
        localStorage.setItem("theme", "dark");
    }
});

function typeEffect() {
    if (charIndex < textToType.length) {
        heroTitle.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 500)
});

document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");

    function checkReveal() {

        const windowHeight = window.innerHeight;

        const elementVisible = 100;

        reveals.forEach(reveal => {

            const elementTop = reveal.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add("active");
            } else {

            }
        });
    }

    window.addEventListener("scroll", checkReveal);
    
    checkReveal();
});

burgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});
