let burger = document.querySelector('.burger');
let wraper = document.querySelector('.burger_container');
let intro = document.querySelector('.intro');
let burgerMenu = document.querySelector('.burger_list');



burger.addEventListener('click', function () {
    wraper.classList.toggle('wraper_open');
    burgerMenu.classList.toggle('burger_open');
    intro.classList.toggle('intro_margin');
});

