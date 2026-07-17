document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Controle do Header Scrolled
    const header = document.querySelector(".main-header");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // 2. Menu Responsivo (Mobile Hambúrguer)
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-menu a");

    menuToggle.addEventListener("click", function () {
        menuToggle.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            menuToggle.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });

    // 3. Animação de Scroll Reveal
    const revealElements = document.querySelectorAll(".scroll-reveal");

    const revealOnScroll = function () {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.85) {
                element.classList.add("visible");
            }
        });
    };

    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);

    // 4. Suporte de rolagem suave 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
