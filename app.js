/* =============== SHOW MENU ==============*/ 
const toggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

toggle.addEventListener('click', () => navMenu.classList.toggle('show-menu'));
// const showMenu = (toggleId, navId) => {
//   const toggle = document.getElementById(toggleId);
//   const nav = document.getElementById(navId);

//   // Validate that variables exist
//   if (toggle && nav) {
//     // We add the show-menu class to the div tag with the nav__menu class
//     toggle.addEventListener('click', () => nav.classList.toggle('show-menu'))
//   }
// }

// showMenu('nav-toggle', 'nav-menu');

/* =============== REMOVE MENU MOBILE ==============*/ 
const navLinks = document.querySelectorAll('.nav__link');
// const navMenu = document.getElementById('nav-menu');

// When we click on each nav__link, we remove the show-menu class
navLinks.forEach(link => link.addEventListener('click', () => navMenu.classList.remove('show-menu')))

/* ================ SCROLL SECTIONS ACTIVE LINK ==============*/ 
const home = document.getElementById('home');
console.log(home.offsetHeight)
console.log(home.offsetTop)

const about = document.getElementById('about');
console.log(about.offsetHeight)
console.log(about.offsetTop)

const services = document.getElementById('services');
console.log(services.offsetHeight)
console.log(services.offsetTop)

const menu = document.getElementById('menu');
console.log(menu.offsetHeight)
console.log(menu.offsetTop)

const contact = document.getElementById('contact');
console.log(contact.offsetHeight)
console.log(contact.offsetTop)

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;
  // console.log(scrollY)
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop -50;
    // console.log(sectionHeight);
    // console.log(sectionTop);
    sectionId = section.getAttribute('id')
    // console.log(sectionId)

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.nav__menu a[href='#${sectionId}']`).classList.add('active-link')
    } else {
      document.querySelector(`.nav__menu a[href='#${sectionId}']`).classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

/* =============== CHANGE BACKGROUND HEADER ==============*/ 
function scrollHeader() {
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the sroll-header class
  if (this.scrollY >= 200) {
    nav.classList.add('scroll-header')
  } else {
    nav.classList.remove('scroll-header')
  }
}

window.addEventListener('scroll', scrollHeader)

/* =============== SHOW SCROLL TOP ==============*/ 
function scrollTop() {
  const scrollTop = document.getElementById('scroll-top')
  // When the scroll is greater than 560 viewport height, add the show-sroll class
  if (this.scrollY >= 560) {
    scrollTop.classList.add('show-scrollTop')
  } else {
    scrollTop.classList.remove('show-scrollTop')
  }
}

window.addEventListener('scroll', scrollTop)
// When the scroll is hight than 560 viewport height, add the show-scroll class

/* =============== DARK LIGHT THEME ==============*/ 
const themeButton = document.getElementById('theme-button');
// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme') ;
// const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => {
  if (document.body.classList.contains('dark-theme')) {
    return 'dark'
  } else {
    return 'light'
  }
}

// const getCurrentIcon = () => {
//   if (themeButton.classList.contains('bx-sun')) {
//     return 'bx-sun'
//   } else {
//     return 'bx-moon'
//   }
// }

if (selectedTheme === 'dark') {
  document.body.classList.add('dark-theme');
  themeButton.classList.add('bx-sun');
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle('dark-theme');
  themeButton.classList.toggle('bx-sun')
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  // localStorage.setItem('selected-icon', getCurrentIcon());
})


/* =============== SCROLL REVEAL ANIMATION ==============*/ 
const sr = ScrollReveal( {
  origin: 'top',
  distance: '30px',
  duration: 2000,
  reset: true,
})

sr.reveal(`.home__data, .home__img, .about__data, .about__img, .services__content, .menu__content, .app__data, .app__img, .contact__data, .contact__button, .footer__content, .map-img`, {
  interval: 200
})

