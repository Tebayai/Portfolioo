// Sélectionner les éléments du DOM
const burgerBtn = document.getElementById('burger-btn');
const navLinks = document.getElementById('nav-links');
const header = document.querySelector('header');

// Ajouter un event listener au clic du burger
burgerBtn.addEventListener('click', function() {
    // Toggle la classe 'active' sur le menu
    navLinks.classList.toggle('active');
    burgerBtn.classList.toggle('active');
    
    // Changer l'icône
    const icon = burgerBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        burgerBtn.classList.remove('active');
        
        // Remettre l'icône en bars
        const icon = burgerBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

const typing = document.querySelector('.typing');
const text = ["Développeur frontend", "UI/UX designer"];

let index = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    if (!typing) return; // Quitter si l'élément n'existe pas
    
    const currentText = text[index];
    
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typing.textContent = currentText.substring(0, charIndex);

    if (!isDeleting && charIndex === currentText.length) {
        // Texte complètement écrit, pause avant suppression
        isDeleting = true;
        setTimeout(type, 1800);
    } else if (isDeleting && charIndex === 0) {
        // Texte complètement supprimé, passage au suivant
        isDeleting = false;
        index = (index + 1) % text.length;
        setTimeout(type, 1000);
    } else {
        // Continue à taper ou supprimer
        setTimeout(type, isDeleting ? 30 : 100);
    }
}

if (typing) {
    type();
}

//background header on scroll
window.addEventListener('scroll', function(){
    if(window.scrollY > 50){
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})

// Intersection Observer pour animations au scroll
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer les sections, projets et autres éléments
document.querySelectorAll('section, .project-item, .stack-content').forEach(el => {
    observer.observe(el);
});