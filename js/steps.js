/* Tabs */

let step_button = document.querySelectorAll('.how__step-link');
let step_text = document.querySelectorAll('.how__step-slider-block-item');
let step_photo = document.querySelectorAll('.how__step-slider-img');

step_button.forEach(function(element) {

  element.addEventListener('click',
  function(e) {

    const path = e.currentTarget.dataset.path;

    //Онуление стилей
    step_button.forEach(function(button) {
      button.classList.remove('how__step-link--active');
    })

    step_text.forEach(function(text) {
      text.classList.remove('how__step-slider-block-item--show');
    })

    step_photo.forEach(function(photo) {
      photo.classList.remove('how__step-slider-img--show');
    })


    // Добавить стиль элементу
      e.currentTarget.classList.add('how__step-link--active');

      step_text.forEach(function(){
        document.querySelector(`[data-target="${path}"]`).classList.add('how__step-slider-block-item--show');
      })

      step_photo.forEach(function() {
        document.querySelector(`[data-target="${path}img"]`).classList.add('how__step-slider-img--show');
      })
  })
})
