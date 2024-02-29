const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

const burger = document.querySelector(".header-bottom__menu-burger")
const burgerMenu = document.querySelector('.header__burgrer-menu')

burger.addEventListener("click", openBurger)

function openBurger(){
  burgerMenu.classList.toggle('open-burger')
  burger.classList.toggle('active')
}