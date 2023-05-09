
window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('nav a');
    var currentSection = '';
  
    sections.forEach(function(section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(function(navLink) {
      navLink.classList.remove('active');
      if (navLink.getAttribute('href').substring(1) === currentSection) {
        navLink.classList.add('active');
      }
    });
  });