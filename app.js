
//project details
var p3Det = {descr: "Pin and Password Generator is a Java Swing application that generates secure PINs and passwords. Users can choose between PIN or password generation using radio buttons. A slider allows customization of the length, set to default values of 5 for PINs and 8 for passwords. Clicking the 'Generate' button produces new results, which can be done repeatedly.",
              technical: "Developed with Java and Swing.",
              summary: "Pin and Password Generator is a user-friendly Java Swing application for generating secure PINs and passwords. It offers options for PIN or password generation, length customization, and easy result generation."
              };
var p2Det = {descr: "FastReact is a Java desktop application developed using Java and the Swing Graphical User Interface (GUI) framework.It is an application where users are presented with 20 randomly positioned buttons labeled from 1 to 20 on the screen. The objective is to click the buttons in ascending order within a specified time frame. FastReact tests the user's reaction speed and ability to quickly identify and click the buttons accurately.",
               technical: "Developed with Java and Swing.",
               summary: "FastReact is a Java desktop application that challenges users to click numbered buttons in ascending order within a time limit. It tests reaction speed and accuracy in a game-like setting."
              };

var p1Det = {descr: "Password Manager is a Python-based application with a Tkinter Graphical User Interface (GUI) and MySQL integration. It allows users to securely store and manage their account details, including site names, usernames, and passwords. Users can create an account or log in. Once logged in, Users can add new account details to store, modify existing entries, and delete entries. The stored details are displayed within the app for easy access.",
               technical: "Built with Python, Tkinter, and MySQL.",
               summary: "Summary: The Password Manager is a user-friendly Python application with a GUI that helps users store and manage their account details securely."
              };

var projectsDet = { 
  name:["Password Manager", "FastReact", "Pin and Password Generator"],
  photos:[['images/password-manager/main.png', 'images/password-manager/login.png', 'images/password-manager/createAccount.png', 'images/password-manager/enterData.png'],
        ['images/FastReact/welcome.png', 'images/FastReact/play.png', 'images/FastReact/lose.png', 'images/FastReact/win.png'],
        ['images/Pin-Password-gen/startScreen.png','images/Pin-Password-gen/generatePin.png','images/Pin-Password-gen/generatePwd.png']],
  description:[p1Det,p2Det,p3Det],
  codelink: ["https://github.com/Lukhany0/Password-Manager/", "https://github.com/Lukhany0/FastReact-Game", "https://github.com/Lukhany0/Pin-and-Password-Generator"]
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
  var projectImgUrl = document.querySelector(".view-project .project-photos img");
  var prevBtn = document.querySelector(".view-project .project-photos .btn-prev");
  var nextBtn = document.querySelector(".view-project .project-photos .btn-next");
          
  var projectText = document.querySelector(".view-project .project-text");
  var projectName = document.querySelector(".view-project .project-text #project-name");

  var projectDescr = document.querySelector(".project-details .description");
  var projectTech = document.querySelector(".project-details .tech");
  var projectSumm = document.querySelector(".project-details .summary");

  var projectlink = document.querySelector(".view-project .project-text .viewcode-btn");

  Array.from(projects).forEach(function(project, index){
    project.addEventListener("click", function(){
      projectContainer.classList.add("projectActive");
      viewProject.classList.remove("projectDisplay");

      clickedIndex = Array.from(projects).indexOf(this);

      projectImgUrl.setAttribute("src", projectsDet.photos[clickedIndex][0]);
      projectName.innerText = projectsDet.name[clickedIndex];

      projectDescr.innerText = projectsDet.description[clickedIndex].descr;
      projectTech.innerText = projectsDet.description[clickedIndex].technical;
      projectSumm.innerText = projectsDet.description[clickedIndex].summary;

      projectlink.setAttribute("href", projectsDet.codelink[clickedIndex]);
      var num=0;
      var length = projectsDet.photos[clickedIndex].length-1;

      prevBtn.addEventListener("click", function(){
        console.log("here now");
        if(num == 0){
          num = length
        }
        else num -= 1;
        projectImgUrl.setAttribute("src", projectsDet.photos[clickedIndex][num]);
      });
      nextBtn.addEventListener("click", function(){
        if(num == length){
          num = 0;
        }
        else num += 1;
        projectImgUrl.setAttribute("src", projectsDet.photos[clickedIndex][num]);
      });
    });
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