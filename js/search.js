/* Search */

let search_toggle = document.querySelectorAll('.search_toggle');
let search_field = document.querySelector('.header__search-field');


search_toggle.forEach(function(elem) {

  elem.addEventListener('click',
    function() {

      search_field.classList.toggle('header__search-field--active');


    })
})
