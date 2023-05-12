
window.onload = ()=>{



  //styling the menu bar to change element color when section is displayed on the screen
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

  //contact form data
  var contactForm = document.getElementById("contact-form");
  var res = document.getElementById("submit-response");
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    var formData = new FormData(contactForm);

    fetch(contactForm.getAttribute("action"), {
      method: "POST",
      body: formData,
    })
      .then(function() {
        res.innerText = 'Message sent sucessfully!!!'
        
        setTimeout(function(){
          res.innerText=''
          contactForm.reset()
        },7000)
        
        
      })
      .catch(error => {
        console.error(error); // Handle any error that occurred during the fetch request
      });
  });
}