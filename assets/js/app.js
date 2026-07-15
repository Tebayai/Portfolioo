// Sélectionner les éléments du DOM
const burgerBtn = document.getElementById('burger-btn');
const navLinks = document.getElementById('nav-links');

// Ajouter un event listener au clic du burger
burgerBtn.addEventListener('click', function() {
    // Toggle la classe 'active' sur le menu
    navLinks.classList.toggle('active');
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
    });
});