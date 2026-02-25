// --- 1. Efeito de Digitação (Typewriter) ---
const textElement = document.getElementById('typewriter');
const words = ["Front-End", "Web", "E-commerce"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 150;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000; // Pausa no final da palavra
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', type);


// --- 1.5 TEMA DARK/LIGHT MODE ---
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Verifica preferência salva ou preferência do sistema
const savedTheme = localStorage.getItem('theme') || 
                   (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

// Define o tema inicial
if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.textContent = '☀️';
} else {
    document.body.classList.remove('light-mode');
    themeToggle.textContent = '🌙';
}

// Toggle do tema
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLightMode = document.body.classList.contains('light-mode');
    
    // Salva preferência
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
    
    // Muda o ícone
    themeToggle.textContent = isLightMode ? '☀️' : '🌙';
});

// --- 2. Scroll Reveal (Elementos aparecem ao rolar) ---
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// --- 2.5 Tabs do Sobre ---
const aboutTabs = document.querySelectorAll('.about-tab');
const aboutPanels = document.querySelectorAll('.about-panel');

function setActiveAboutTab(tab) {
    const target = tab.dataset.tab;
    if (!target) return;

    aboutTabs.forEach(btn => {
        const isActive = btn === tab;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-selected', String(isActive));
        btn.setAttribute('tabindex', isActive ? '0' : '-1');
    });

    aboutPanels.forEach(panel => {
        panel.classList.toggle('active', panel.dataset.panel === target);
    });
}

if (aboutTabs.length && aboutPanels.length) {
    const initialTab = document.querySelector('.about-tab.active') || aboutTabs[0];
    if (initialTab) setActiveAboutTab(initialTab);
    aboutTabs.forEach(tab => {
        tab.addEventListener('click', () => setActiveAboutTab(tab));
    });
}


// --- 3. Efeito 3D Tilt nos Cards (Vanilla JS puro) ---
const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10; // Rotação max 10deg
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

const modal = document.getElementById('project-modal');
const modalTitle = modal.querySelector('.modal-title');
const modalDesc = modal.querySelector('.modal-desc');
const modalImg = modal.querySelector('.modal-img');
const modalTags = modal.querySelector('.modal-tags');
const modalVisit = modal.querySelector('.modal-visit');
const modalClose = modal.querySelector('.modal-close');
const modalYear = modal.querySelector('.modal-year');
const modalRole = modal.querySelector('.modal-role');
const modalCategory = modal.querySelector('.modal-category');
const modalFeatures = modal.querySelector('.modal-features');

function normalizeProjectUrl(rawUrl) {
    if (!rawUrl) return '#';
    const trimmed = rawUrl.trim();
    if (/^https?:\/[^/]/i.test(trimmed)) {
        return trimmed.replace(/^https?:\//i, match => `${match}/`);
    }
    if (/^https?:\/\//i.test(trimmed)) return trimmed;
    if (trimmed.startsWith('www.')) return `https://${trimmed}`;
    return trimmed;
}

function openModal(card) {
    const title = card.querySelector('h3')?.textContent || '';
    const detailsRaw = card.dataset.details || card.querySelector('p')?.textContent || '';
    const img = card.querySelector('.project-img')?.src || '';
    const tags = Array.from(card.querySelectorAll('.tech-tags span')).map(el => el.textContent);
    const url = normalizeProjectUrl(card.dataset.url || '#');
    
    // Novos campos
    const year = card.dataset.year || '2023';
    const role = card.dataset.role || 'Desenvolvedor';
    const category = card.dataset.category || '';

    modalTitle.textContent = title;
    if (/[;\n•]/.test(detailsRaw)) {
        const lines = detailsRaw.split(/;|\n|•/).map(s => s.trim()).filter(Boolean);
        modalDesc.innerHTML = lines.map(l => `• ${l}`).join('<br>');
    } else {
        modalDesc.textContent = detailsRaw;
    }
    modalImg.src = img;
    modalTags.innerHTML = tags.map(t => `<span>${t}</span>`).join('');
    const feats = (card.dataset.features || '').split(';').map(s => s.trim()).filter(Boolean);
    if (modalFeatures) {
        modalFeatures.innerHTML = feats.map(f => `<li>${f}</li>`).join('');
        const subtitle = modal.querySelector('.modal-subtitle');
        if (feats.length === 0) {
            modalFeatures.style.display = 'none';
            if (subtitle) subtitle.style.display = 'none';
        } else {
            modalFeatures.style.display = '';
            if (subtitle) subtitle.style.display = '';
        }
    }
    modalVisit.href = url;
    
    if (modalYear) modalYear.textContent = year;
    if (modalRole) modalRole.textContent = role;
    if (modalCategory) {
        modalCategory.textContent = category;
        const categoryItem = modalCategory.parentElement;
        if (categoryItem) categoryItem.style.display = category ? '' : 'none';
    }

    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

cards.forEach(card => {
    card.addEventListener('click', () => openModal(card));
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// --- 4. Menu Mobile (Hamburger) ---
const navToggle = document.getElementById('navToggle');
const siteHeader = document.querySelector('header');
const navLinks = document.querySelectorAll('.nav-links a');

function closeMobileMenu() {
    if (!siteHeader || !navToggle) return;
    siteHeader.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
}

if (navToggle && siteHeader) {
    navToggle.addEventListener('click', () => {
        const isOpen = siteHeader.classList.toggle('nav-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMobileMenu();
    });
}

// --- 5. Header oculto no mobile (revela ao tocar no topo) ---
const mobileHeaderQuery = window.matchMedia('(max-width: 560px)');
let headerHideTimer = null;

function setHeaderHiddenState(shouldHide) {
    if (!siteHeader) return;
    if (shouldHide && !siteHeader.classList.contains('nav-open')) {
        siteHeader.classList.add('mobile-hidden');
    } else {
        siteHeader.classList.remove('mobile-hidden');
    }
}

function revealHeaderTemporarily() {
    if (!siteHeader) return;
    setHeaderHiddenState(false);
    if (headerHideTimer) {
        clearTimeout(headerHideTimer);
    }
    headerHideTimer = setTimeout(() => {
        if (mobileHeaderQuery.matches && window.scrollY > 0) {
            setHeaderHiddenState(true);
        }
    }, 2200);
}

function handleHeaderVisibility() {
    if (!siteHeader) return;
    if (!mobileHeaderQuery.matches) {
        setHeaderHiddenState(false);
        return;
    }
    if (window.scrollY === 0) {
        setHeaderHiddenState(false);
        return;
    }
    setHeaderHiddenState(true);
}

window.addEventListener('scroll', handleHeaderVisibility, { passive: true });
window.addEventListener('touchstart', (event) => {
    if (!mobileHeaderQuery.matches) return;
    const touch = event.touches[0];
    if (touch && touch.clientY <= 60) {
        revealHeaderTemporarily();
    }
}, { passive: true });
mobileHeaderQuery.addEventListener('change', handleHeaderVisibility);
handleHeaderVisibility();

