const menuIcon = document.getElementById('mobile-icon');
// нашли элемент иконки и присвоили её переменной menuIcon
const menuList = document.querySelector('.header__menu__list');
// нашли элемент блока меню со ссылками и присвоили его значение переменной menuList

function toggleNavList() {
  menuList.classList.toggle('visible');
}

menuIcon.addEventListener('click', toggleNavList);