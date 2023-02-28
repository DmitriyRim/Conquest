'use strict';

const menuBtn = document.querySelector('.nav__hamburger');
const menu = document.querySelector('.menu__mobile');
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('nav__open');
    menu.classList.toggle('menu__open');
});
