const cosialIcon = document.getElementById('social-icon');
const cosialMenu = document.querySelector('.social__list');
const cosialBlock = document.querySelector('.social');

function openSocialMenu() {
  cosialMenu.classList.add('visible');
  cosialIcon.classList.add('rotated');
  cosialIcon.classList.remove('not-rotated');
}

function closeSocialMenu() {
  cosialMenu.classList.remove('visible');
  cosialIcon.classList.remove('rotated');
  cosialIcon.classList.add('not-rotated');
}

cosialIcon.addEventListener('mouseenter', () => openSocialMenu())
cosialBlock.addEventListener('mouseleave', () => closeSocialMenu())