// Three line menu

const menuButton = document.querySelector('.three-line-menu')
const mobileNav = document.querySelector('.mobile-nav')

menuButton.addEventListener('click', ()=> {
  menuButton.classList.toggle('active')
  mobileNav.classList.toggle('active')
})

// Filter
    
const buttons = document.querySelectorAll('.buttons-container button');
const item = document.querySelectorAll('.products-grid-element');

buttons.forEach(button => {
  button.onclick = function() {
  buttons.forEach(button => {
    button.className = "";
  })
  button.className = "active";
  const value = button.textContent;
  item.forEach(img => {
    img.style.display = 'none';
    if (img.getAttribute('data-filter') == value.toLowerCase() || value == "Todos") {
      img.style.display = 'block';
    }
  })
}

});

// Products details


const details = document.querySelectorAll('.details-button')
const closex = document.querySelectorAll('.x-container')
const cover = document.querySelectorAll('.details-cover')

for(let i = 0; i < details.length; i++) {
  details[i].addEventListener('click', function() {
    cover[i].classList.add('active');
  });
}

for(let i = 0; i < closex.length; i++) {
  closex[i].addEventListener('click', function() {
    cover[i].classList.remove('active');
  });
}