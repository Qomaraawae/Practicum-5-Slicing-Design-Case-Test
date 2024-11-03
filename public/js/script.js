// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Change navbar background color on scroll
  const navbar = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-white', 'shadow-lg');
    } else {
      navbar.classList.remove('bg-white', 'shadow-lg');
    }
  });
  
  // Scroll-fade animation
  const scrollElements = document.querySelectorAll('.scroll-fade');
  function animateOnScroll() {
    scrollElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }
    });
  }
  
  window.addEventListener('scroll', animateOnScroll);
  