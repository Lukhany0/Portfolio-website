
//project details
var projectDet = { 
  name:["project 1", "project 2", "project 3"],
  photos:[['images/port4.png', 'images/port4.png', 'images/port4.png'],
        ['images/port4.png', 'images/port4.png', 'images/port4.png'],
        ['images/port4.png'],'images/port4.png','images/port4.png'],
  description:["1111This project does this that and that","2222This project does this that and that","3333This project does this that and that"],
  codelink: ["#111111111", "#222222222222", "#333333333333333"]
};

//About section switching tabs: skills and education tabs
var tablinks = document.querySelectorAll('.about-table a');
var tab_conts = document.querySelectorAll('.about-table ul');

function openTab(tabname){
    for(var tb of tablinks){
      tb.classList.remove('active');
    }

    for(var tbcont of tab_conts){
      tbcont.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active');
    document.getElementById(tabname).classList.add('active-tab');

}

window.onload = ()=>{

    //sidemenu
    var menuIcon = document.querySelector('#menu-icon');
    var navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function(){
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    });
  
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
  //view propject
  var projectContainer = document.querySelector('.project-container');
  var projects = document.querySelectorAll(".projectView");

  var viewProject = document.querySelector(".view-project");
  var projectPhotos = document.querySelector(".view-project .project-photos");
  var projectImgUrl = document.querySelector(".view-project .project-photos img");
  var prevBtn = document.querySelector(".view-project .project-photos .btn-prev");
  var nextBtn = document.querySelector(".view-project .project-photos .bnt-next");
          
  var projectText = document.querySelector(".view-project .project-text");
  var projectName = document.querySelector(".view-project .project-text #project-name");
  var projectDescription = document.querySelector(".view-project .project-text p");
  var projectlink = document.querySelector(".view-project .project-text .viewcode-btn");

  Array.from(projects).forEach(function(project, index){
    project.addEventListener("click", function(){
      projectContainer.classList.add("projectActive");
      viewProject.classList.remove("projectDisplay");

      var clickedIndex = Array.from(projects).indexOf(this);
      
      projectImgUrl.setAttribute("src", projectDet.photos[clickedIndex][0]);
      projectName.innerText = projectDet.name[clickedIndex];
      projectDescription.innerText = projectDet.description[clickedIndex];
      projectlink.setAttribute("href", projectDet.description[clickedIndex]);
      
    })
  });

  //close project
  var closeProject = document.querySelector("#close-project");
  closeProject.addEventListener("click", function(){
    projectContainer.classList.remove("projectActive");
    viewProject.classList.add("projectDisplay");
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
        res.innerText = 'Message sent sucessfully!'
        
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