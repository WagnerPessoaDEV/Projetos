
// 1. FUNCIONALIDADES DO CARRINHO DE COMPRAS

// Estado do Carrinho
let cart = [];

// Função para Abrir/Fechar Carrinho
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.querySelector('.overlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Função Adicionar ao Carrinho
function addToCart(id, name, price) {
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    
    updateCartUI();
    
    // Feedback visual — obtém botão de forma robusta
    let btn = (typeof event !== 'undefined' && event && event.target) ? event.target : document.activeElement;
    try {
        if (btn && (btn.tagName === 'BUTTON' || btn.tagName === 'A')) {
            const originalText = btn.innerText;
            btn.innerText = "Adicionado!";
            btn.style.backgroundColor = "#1a1a1a"; // Preto ao clicar
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = ""; // Volta ao roxo
            }, 1000);
        }
    } catch (e) {
        // não crítico, ignora
    }
    
    // Opcional: Abrir o carrinho automaticamente ao adicionar
    // toggleCart(); 
}

// Função Remover do Carrinho
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

// Atualizar a Interface do Carrinho
function updateCartUI() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartCountElement = document.getElementById('cartCount');
    const cartTotalElement = document.getElementById('cartTotal');

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartCountElement.innerText = totalItems;

    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; color: #999; margin-top: 20px;">Seu carrinho está vazio.</p>';
    } else {
        cart.forEach(item => {
            totalPrice += item.price * item.quantity;
            
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <span>${item.quantity}x R$ ${item.price.toFixed(2).replace('.', ',')}</span>
                </div>
                <span class="remove-item" onclick="removeFromCart(${item.id})">Remover</span>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
    }

    cartTotalElement.innerText = 'R$ ' + totalPrice.toFixed(2).replace('.', ',');
}

// Finalizar Compra no WhatsApp
function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    let message = "Olá! Gostaria de fazer um pedido na loja Toda Bela:%0A%0A";
    let total = 0;

    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        message += `▪️ ${item.quantity}x ${item.name} - R$ ${subtotal.toFixed(2).replace('.', ',')}%0A`;
    });

    message += `%0A*Total: R$ ${total.toFixed(2).replace('.', ',')}*`;
    message += "%0A%0AAguardo instruções para o pagamento e entrega!";

    // ALTERE AQUI O NÚMERO DO WHATSAPP
    const phoneNumber = "5521980261948"; // Atualizado com o número do rodapé
    
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
}

// ==========================================
// 2. SLIDER DA HERO SECTION (HOME)
// ==========================================

const slides = document.querySelectorAll('.hero-slider .slide');
let currentSlide = 0;
const slideInterval = 5000; // 5 segundos

function nextSlide() {
    if (slides.length === 0) return;
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

if (slides.length > 0) {
    setInterval(nextSlide, slideInterval);
}

// ==========================================
// 3. LIGHTBOX DA GALERIA
// ==========================================

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(element) {
    const img = element.querySelector('img');
    if (img && lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
    }
}

function closeLightbox() {
    if (lightbox) {
        lightbox.classList.remove('active');
    }
}

// Fechar com tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});

// ==========================================
// 4. INTERNACIONALIZAÇÃO E TEMA
// ==========================================

const translations = {
    pt: {
        nav_home: "Início",
        nav_about: "Sobre",
        nav_team: "Equipe",
        nav_services: "Serviços",
        nav_shop: "Loja",
        nav_gallery: "Trabalhos",
        nav_contact: "Contato",
        hero_title: "Seu espaço de beleza, cuidado e autoestima todos os dias.",
        hero_subtitle: "Oferecemos cuidados completos em cabelos, unhas e cílios, além de produtos de qualidade profissional para você manter o resultado todos os dias.",
        hero_btn: "Ver Produtos",
        about_title: "Nossa História",
        about_text: "O Toda Bela nasceu de um sonho, de muita dedicação e de um amor verdadeiro pelo universo da beleza e do cuidado. Em 2023, esse sonho se tornou realidade: a conquista do meu próprio salão, um espaço pensado para acolher, transformar e elevar a autoestima de cada cliente.<br><br>Essa realização não aconteceu sozinha. Ela foi construída com esforço, perseverança e, principalmente, com o apoio do meu marido. Juntos, transformamos um sonho em um lugar cheio de propósito, carinho e significado.<br><br>No Toda Bela, cada detalhe foi pensado para que você se sinta especial desde o momento em que entra. Aqui, unimos experiência, dedicação e as tendências mais atuais da moda e da beleza.<br><br>Nossa missão é proporcionar mais do que serviços de qualidade — queremos oferecer momentos de cuidado, renovação e bem-estar.<br><br>Além dos nossos serviços, também oferecemos produtos selecionados para que você possa continuar seu autocuidado em casa.",
        team_title: "Nossa Equipe",
        team_erlane_role: "Nails Designer",
        team_erlane_desc: "Especialista em design de unhas, Erlane Souza é dedicada a oferecer beleza, cuidado e bem-estar em cada atendimento. Com foco em técnicas modernas e produtos de alta qualidade, seu trabalho é voltado para realçar a elegância natural e fortalecer a autoestima de cada cliente."
        team_jessica_role: "Hair Designer",
        team_jessica_desc: "Dedicada a transformar cada atendimento em uma experiência única, com carinho, profissionalismo e atenção a cada cliente.",
        team_bianca_role: "Lash Designer",
        team_bianca_desc: "Especialista em design de cílios, Bianca Lima é dedicada a realçar o olhar e a beleza natural de cada cliente com técnica, precisão e cuidado. Utilizando métodos atualizados e produtos de alta qualidade, seu trabalho é focado em conforto, segurança e resultados leves, elegantes e duradouros. Comprometida com a excelência e o atendimento personalizado.",
        services_title: "Nossos Serviços",
        service_nails_desc: "Pé e Mão Simples<br>Esmaltação em Gel<br>Postiça Realista<br>Banho de Gel<br>Molde F1<br>Gel na Tips.",
        service_lash_desc: "Design de sobrancelha<br>Brow lamination<br>Volume brasileiro<br>Volume egípcio<br>Mega volume",
        service_hair_desc: "Consultoria de Visagismo<br>Cortes Personalizados<br>Colorimetria Avançada<br>Hair Styling e Penteados<br>Tratamentos e Nutrição<br>Alisamentos",
        shop_title: "Produtos em Destaques",
        shop_subtitle: "Leve para casa produtos profissionais de beleza, além de peças de lingerie e itens de bem-estar e autoestima selecionados especialmente para você.",
        gallery_title: "Resultados que Encantam",
        footer_desc: "Realçando sua beleza com profissionalismo e cuidado.",
        footer_contact: "Contato",
        footer_hours: "Horário",
        footer_hours_week: "Ter - Sex: 09:00 - 20:00",
        footer_hours_sat: "Sábado: 09:00 - 18:00",
        footer_location: "Localização",
        footer_address: "Rua Sete, 739<br>Bonsucesso - Vila do João<br>Rio de Janeiro/RJ",
        footer_rights: "Todos os direitos reservados."
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_team: "Team",
        nav_services: "Services",
        nav_shop: "Shop",
        nav_gallery: "Results that Delight",
        nav_contact: "Contact",
        hero_title: "Enhance your beauty with those who understand style.",
        hero_subtitle: "We offer complete care for hair, nails, and lashes, as well as professional quality products for you to maintain the results every day.",
        hero_btn: "View Products",
        about_title: "Our History",
        about_text: "Toda Bela was born from a dream, dedication, and true love for the universe of beauty and care. In 2023, this dream became a reality: conquering my own salon, a space designed to welcome, transform, and elevate the self-esteem of every client.<br><br>This achievement did not happen alone. It was built with effort, perseverance, and, mainly, with the support of my husband. Together, we transformed a dream into a place full of purpose, affection, and meaning.<br><br>At Toda Bela, every detail was thought out so that you feel special from the moment you enter. Here, we combine experience, dedication, and the latest trends in fashion and beauty.<br><br>Our mission is to provide more than quality services — we want to offer moments of care, renewal, and well-being.<br><br>In addition to our services, we also offer selected products so you can continue your self-care at home.",
        team_title: "Our Team",
        team_erlane_role: "Nails Designer",
        team_erlane_desc: "Specialist in beauty and personalized care. Passionate about enhancing self-esteem and providing natural and modern results.",
        team_jessica_role: "Hair Designer",
        team_jessica_desc: "Dedicated to transforming every service into a unique experience, with care, professionalism, and attention to every client.",
        team_bianca_role: "Lash Designer",
        team_bianca_desc: "Focused on updated techniques and detailed service, offering quality, safety, and a welcoming service in every procedure.",
        services_title: "Our Services",
        service_nails_desc: "Manicure & Pedicure<br>Gel Polish<br>Realistic Tips<br>Gel Overlay<br>F1 Mold<br>Gel on Tips.",
        service_lash_desc: "Eyebrow Design<br>Brow Lamination<br>Brazilian Volume<br>Egyptian Volume<br>Mega Volume",
        service_hair_desc: "Visagism Consultancy<br>Custom Cuts<br>Advanced Colorimetry<br>Hair Styling<br>Treatments & Nutrition<br>Straightening",
        shop_title: "Online Store",
        shop_subtitle: "Take home professional beauty products, as well as lingerie pieces and well-being and self-esteem items selected especially for you.",
        gallery_title: "Results that Delight",
        footer_desc: "Enhancing your beauty with professionalism and care.",
        footer_contact: "Contact",
        footer_hours: "Hours",
        footer_hours_week: "Tue - Fri: 09:00 - 20:00",
        footer_hours_sat: "Saturday: 09:00 - 18:00",
        footer_location: "Location",
        footer_address: "Rua Sete, 739<br>Bonsucesso - Vila do João<br>Rio de Janeiro/RJ",
        footer_rights: "All rights reserved."
    }
};

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    localStorage.setItem('todabela_lang', lang);
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    const themeBtn = document.getElementById('theme-toggle');
    if (body.classList.contains('dark-mode')) {
        themeBtn.innerText = "☀️";
        localStorage.setItem('todabela_theme', 'dark');
    } else {
        themeBtn.innerText = "🌙";
        localStorage.setItem('todabela_theme', 'light');
    }
}

// Inicializar preferências
window.addEventListener('DOMContentLoaded', () => {
    // Tema
    const savedTheme = localStorage.getItem('todabela_theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-toggle').innerText = "☀️";
    }

    // Idioma
    const savedLang = localStorage.getItem('todabela_lang') || 'pt';
    setLanguage(savedLang);

    // Menu Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('active'));
        });
    }
    
    // Lazy-load e decoding para imagens (melhora performance em mobile)
    document.querySelectorAll('img').forEach(img => {
        if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
        if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async');
    });
});
