// 1. Menu Mobile Toggle
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    // Troca o ícone (opcional)
    const icon = menuToggle.querySelector('i');
    if (mainNav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// 2. Fechar menu ao clicar em um link
document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            menuToggle.querySelector('i').classList.remove('fa-times');
            menuToggle.querySelector('i').classList.add('fa-bars');
        }
    });
});

// 3. Scroll Suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 4. Botão Flutuante WhatsApp - Seguir Rolagem
const whatsappButton = document.querySelector('.whatsapp-float');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    
    // Atualiza a posição do botão durante a rolagem
    requestAnimationFrame(() => {
        // Efeito: o botão se move um pouco menos que a rolagem (parallax suave)
        const offset = lastScrollY * 0.5;
        whatsappButton.style.transform = `translateY(${offset}px)`;
    });
});