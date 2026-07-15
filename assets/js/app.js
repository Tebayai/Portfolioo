// Sélectionner les éléments du DOM
const burgerBtn = document.getElementById('burger-btn');
const navLinks = document.getElementById('nav-links');

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