/* Burger-menu */

let burger_open = document.querySelector('.burger-button');
let burger_menu = document.querySelector('.header__nav-burger');
let menu_links = burger_menu.querySelectorAll('.header__link-burger');

burger_open.addEventListener('click',

function() {

  burger_menu.classList.toggle('burger--active');

  burger_open.classList.toggle('burger--close');

  document.body.classList.toggle('stop-scroll');
}
)

menu_links.forEach(function(elem) {

  elem.addEventListener('click',
    function() {

      burger_menu.classList.remove('burger--active');

      burger_open.classList.remove('burger--close');

      document.body.classList.remove('stop-scroll');

    })
})
