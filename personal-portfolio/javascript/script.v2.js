
homeButton = document.querySelector(".home")
aboutMeButton = document.querySelector(".about-me")
projectsButton = document.querySelector(".projects")
contactsButton = document.querySelector(".contacts")

const header = document.querySelector("header")
window.addEventListener("scroll", function
(event) {
  let scroll = this.scrollY
  
  let home = document.getElementById("home");
  let homeY = home.offsetTop;

  let aboutMe = document.getElementById("about-me");
  let aboutMeY = aboutMe.offsetTop;

  let projects = document.getElementById("projects");
  let projectsY = projects.offsetTop;

  let contacts = document.getElementById("contacts");
  let contactsY = contacts.offsetTop;

  if (scroll > (aboutMeY - 260)) {
    header.classList.add('not-on-top')
    header.classList.remove('on-top')
  } else {
    header.classList.remove('not-on-top')
    header.classList.add('on-top')
  }

  if (scroll < (aboutMeY + 200)) {

    homeButton.classList.add('active')
    aboutMeButton.classList.remove('active')
    projectsButton.classList.remove('active')
    contactsButton.classList.remove('active')
  } else {
    homeButton.classList.remove('active')
  }

  if (scroll >= (aboutMeY - 200) && scroll < (projectsY - 200)) {

    homeButton.classList.remove('active');
    aboutMeButton.classList.add('active');
    projectsButton.classList.remove('active');
    contactsButton.classList.remove('active');
  } else {
    aboutMeButton.classList.remove('active');
  }

  if (scroll >= (projectsY - 200) && scroll < (contactsY - 200)) {
    
    homeButton.classList.remove('active');
    aboutMeButton.classList.remove('active');
    projectsButton.classList.add('active');
    contactsButton.classList.remove('active');
  } else {
    projectsButton.classList.remove('active');
  }

  if (scroll >= (contactsY - 200)) {

    homeButton.classList.remove('active')
    aboutMeButton.classList.remove('active')
    projectsButton.classList.remove('active')
    contactsButton.classList.add('active')
  } else {
    contactsButton.classList.remove('active')
  }
})

const menuButton = document.querySelector('.three-line-menu')
const mobileNav = document.querySelector('.mobile-nav')

menuButton.addEventListener('click', ()=> {
  menuButton.classList.toggle('active')
  mobileNav.classList.toggle('active')
})

