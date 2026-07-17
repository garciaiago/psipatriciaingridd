document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Controle do Header Scrolled (Adiciona classe ao rolar a página)
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

    // Abrir/Fechar ao clicar no hambúrguer
    menuToggle.addEventListener("click", function () {
        menuToggle.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Fechar o menu ao clicar em qualquer link (útil para rolagem interna)
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            menuToggle.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });

    // 3. FAQ Accordion (Sanfona Interativa)
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function () {
            const item = this.parentElement;
            
            // Verifica se o item clicado já está aberto
            const isActive = item.classList.contains("active");

            // Fecha todos os itens abertos
            document.querySelectorAll(".accordion-item").forEach(otherItem => {
                otherItem.classList.remove("active");
            });

            // Se o item clicado não estava ativo, abre-o
            if (!isActive) {
                item.classList.add("active");
            }
        });
    });

    // 4. Animação de Scroll Reveal (Suave e Premium)
    const revealElements = document.querySelectorAll(".scroll-reveal");

    const revealOnScroll = function () {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            // Se o topo do elemento estiver a pelo menos 15% acima da parte inferior da tela
            if (elementTop < windowHeight * 0.85) {
                element.classList.add("visible");
            }
        });
    };

    // Executar uma vez no carregamento para os elementos visíveis logo de cara (Hero)
    revealOnScroll();

    // Ouvir evento de scroll
    window.addEventListener("scroll", revealOnScroll);

    // 5. Suporte de rolagem suave para navegadores que não suportam 'scroll-behavior: smooth' via CSS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Desconto do tamanho do cabeçalho fixo (aprox. 80px)
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