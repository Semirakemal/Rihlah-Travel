document.querySelector('form').addEventListener('submit', function(e) {
   e.preventDefault();

   const name = document.getElementById('name').value.trim();
   const contact = document.getElementById('contact').value.trim();
   const dates = document.getElementById('travel-dates').value.trim();
   const package = document.getElementById('package').value;

   if (!name || !contact || !dates || !package) {
     alert("Please fill in all required fields.");
     return;
   }

   // Show confirmation message
   document.getElementById('confirmationMessage').style.display = 'block';

   // Reset form
   this.reset();
});
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Set initial aria-expanded state
hamburger.setAttribute('aria-expanded', 'false');

hamburger.addEventListener('click', () => {
   const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
   hamburger.setAttribute('aria-expanded', !isExpanded);
   navMenu.classList.toggle('active');
});