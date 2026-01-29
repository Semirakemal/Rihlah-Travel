// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !isExpanded);
  navMenu.classList.toggle('active');
});
    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('cname').value.trim();
      const email = document.getElementById('cemail').value.trim();
      const message = document.getElementById('cmessage').value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      document.getElementById('confirmationMessage').style.display = 'block';
      this.reset();
    });
  