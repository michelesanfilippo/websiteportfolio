const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
//to navigate menu
const navigationItems = document.querySelectorAll('.nav-item');

//initial state 
let isOpen = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!isOpen){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navigationItems.forEach(item => item.classList.add('show'));
        isOpen = true;
    }
    else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navigationItems.forEach(item => item.classList.remove('show'));
        isOpen = false;
    }
}