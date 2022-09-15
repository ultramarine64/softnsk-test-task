let menuBtn = document.querySelector('.menu__btn');
let menuBtnSpans = document.querySelectorAll('.menu__btn-span');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu_active');
  for (span of menuBtnSpans) {
    span.classList.toggle('menu__btn-span_active');
  }
});

let orderFormSliderValue = document.querySelector('.order-making .range-slider__value');
let orderFormSlider = document.querySelector('.order-making .range-slider__input');

orderFormSlider.addEventListener('input', () => {
  orderFormSliderValue.textContent = `${orderFormSlider.value} %`;
});

const select = document.querySelector(".select-menu__header");
const optionsContainer = document.querySelector(".select-menu__options-container");
const optionsList = document.querySelector(".select-menu__options-list");
const optionsLabels = document.querySelectorAll(".select-menu__option-label");
const options = document.querySelectorAll(".select-menu__option");

select.addEventListener("click", () => {
  optionsContainer.classList.toggle("select-menu__options-container_active");
  select.classList.toggle("select-menu__header_active");
});

options.forEach((option) => {
  option.addEventListener("input", () => {
    optionsLabels.forEach((optionLabel) => {
      optionLabel.classList.remove('selected')
    });
    parentLabel = option.parentElement;
    select.querySelector(".select-menu__header-text").textContent = parentLabel.textContent;
    parentLabel.classList.add("selected");
    optionsContainer.classList.toggle("select-menu__options-container_active");
    select.classList.toggle("select-menu__header_active");
  });
});

window.addEventListener('click', function(e){
  if (!document.querySelector('.select-menu').contains(e.target) &&
      optionsContainer.classList.contains("select-menu__options-container_active")){
    optionsContainer.classList.toggle("select-menu__options-container_active");
    select.classList.toggle("select-menu__header_active");
  }
});
