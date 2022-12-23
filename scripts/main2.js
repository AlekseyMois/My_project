const menuIcon = document.getElementById('mobile-icon');
const menuList = document.querySelector('.header__menu__list');

function toggleNavList() {
  menuList.classList.toggle('visible');
}

menuIcon.addEventListener('click', toggleNavList);