/* My first accordion */

let accordeon_button = document.querySelectorAll('.faq__link');
let accordeon_body= document.querySelectorAll('.faq__item-body');

accordeon_button.forEach(function(element) {
  element.addEventListener('click',
  function(e) {
    const path = e.currentTarget.dataset.path;


    accordeon_button.forEach(function(button) {
      e.currentTarget.classList.toggle('faq__link--active');
    })

    accordeon_body.forEach(function(ac_body){
      document.querySelector(`[data-target="${path}ac"]`).classList.toggle('faq__body--active');
    })




  })
})

