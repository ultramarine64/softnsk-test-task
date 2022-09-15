let menuBtn = document.querySelector('.menu__btn');
let menuBtnSpans = document.querySelectorAll('.menu__btn-span');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu_active');
  for (span of menuBtnSpans) {
    span.classList.toggle('menu__btn-span_active');
  }
});
