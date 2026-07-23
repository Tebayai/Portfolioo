// Configuration EmailJS
const EMAILJS_CONFIG = {
    publicKey: 'mbuajfG-ngfdsCsHr',
    serviceId: 'service_rjp7r7l',
    templateId: 'template_4uietnm'
};

// Initialize EmailJS
emailjs.init({
    publicKey: EMAILJS_CONFIG.publicKey,
});

// Notification system
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Handle contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const submitBtn = document.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
            
            // Send form
            emailjs.sendForm(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, contactForm)
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    
                    // Show success notification
                    showNotification('Message envoyé avec succès! Je vous répondrai bientôt.', 'success');
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Reset button
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                }, (error) => {
                    console.error('FAILED...', error);
                    
                    // Show error notification
                    showNotification('Erreur lors de l\'envoi. Veuillez réessayer ou m\'envoyer un email directement.', 'error');
                    
                    // Reset button
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                });
        });
    }
});
