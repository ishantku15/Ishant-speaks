document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.getElementById('nav-trigger');
  const menu = document.querySelector('.site-nav .trigger');
  
  if (menuToggle && menu) {
    menuToggle.addEventListener('change', function() {
      if (this.checked) {
        menu.style.display = 'block';
      } else {
        menu.style.display = 'none';
      }
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Add active class to current navigation item
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-item').forEach(item => {
    const itemPath = item.getAttribute('href');
    if (currentPath === itemPath || 
        (currentPath.startsWith('/blog') && itemPath === '/') || 
        (currentPath.startsWith(itemPath) && itemPath !== '/')) {
      item.classList.add('active');
    }
  });
});