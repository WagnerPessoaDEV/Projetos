//menu Mobile Toggle
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.querySelector('.main-nav');
const themeToggle = document.getElementById('theme-toggle');

//tema claro/escuro
const THEME_STORAGE_KEY = 'dumotors-theme';

function updateThemeIcon(theme) {
    if (!themeToggle) return;
    const icon = themeToggle.querySelector('i');
    if (!icon) return;

    icon.classList.remove('fa-moon', 'fa-sun');
    icon.classList.add(theme === 'dark' ? 'fa-sun' : 'fa-moon');
}

function applyTheme(theme) {
    document.body.classList.toggle('dark-mode', theme === 'dark');
    updateThemeIcon(theme);
}

const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

applyTheme(initialTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark-mode');
        const nextTheme = isDark ? 'light' : 'dark';

        applyTheme(nextTheme);
        localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    });
}

menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    //troca o ícone (opcional)
    const icon = menuToggle.querySelector('i');
    if (mainNav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

//fechar menu ao clicar em um link
document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
        //não fechar menu se clicar em um dropdown no mobile
        if (!link.closest('.dropdown') || window.innerWidth > 768) {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        }
    });
});

//scroll Suave para links internos
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

//dropdown Menu
const dropdownItems = document.querySelectorAll('.main-nav .dropdown');

dropdownItems.forEach(dropdown => {
    const link = dropdown.querySelector('a');
    
    link.addEventListener('click', (e) => {
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            //mobile: toggle o submenu
            e.preventDefault();
            dropdown.classList.toggle('active');
        } else {
            //desktop: toggle o submenu e fechar outros
            e.preventDefault();
            dropdown.classList.toggle('active');
            
            //fechar outros dropdowns
            dropdownItems.forEach(other => {
                if (other !== dropdown) {
                    other.classList.remove('active');
                }
            });
        }
    });
});

//fechar dropdown ao clicar fora
document.addEventListener('click', (e) => {
    if (!e.target.closest('.main-nav .dropdown')) {
        dropdownItems.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});