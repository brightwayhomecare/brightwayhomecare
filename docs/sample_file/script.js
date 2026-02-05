// Mobile menu toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Contact form submission
function handleSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        message: formData.get('message')
    };
    
    // Show success message
    const messageDiv = document.getElementById('formMessage');
    messageDiv.style.display = 'block';
    messageDiv.style.background = 'linear-gradient(135deg, #5eead4 0%, #2dd4bf 100%)';
    messageDiv.style.color = '#1e3a8a';
    messageDiv.innerHTML = `
        <strong>Thank you for your message!</strong><br>
        We've received your inquiry and will get back to you shortly.<br>
        For immediate assistance, please call or WhatsApp us at <strong>+1 (847) 745-9930</strong>.
    `;
    
    // Reset form
    event.target.reset();
    
    // Scroll to message
    messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', data);
    
    return false;
}

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
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
});
