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
        // Não fechar menu se clicar em um dropdown no mobile
        if (!link.closest('.dropdown') || window.innerWidth > 768) {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
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

// 4. Dropdown Menu
const dropdownItems = document.querySelectorAll('.main-nav .dropdown');

dropdownItems.forEach(dropdown => {
    const link = dropdown.querySelector('a');
    
    link.addEventListener('click', (e) => {
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // Mobile: toggle o submenu
            e.preventDefault();
            dropdown.classList.toggle('active');
        } else {
            // Desktop: toggle o submenu e fechar outros
            e.preventDefault();
            dropdown.classList.toggle('active');
            
            // Fechar outros dropdowns
            dropdownItems.forEach(other => {
                if (other !== dropdown) {
                    other.classList.remove('active');
                }
            });
        }
    });
});

// Fechar dropdown ao clicar fora
document.addEventListener('click', (e) => {
    if (!e.target.closest('.main-nav .dropdown')) {
        dropdownItems.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

// 5. Botão Flutuante WhatsApp - Seguir Rolagem
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