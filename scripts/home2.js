//Скрипт изменения текста на главной странице:
const phrase = document.querySelector('.main__picture__phrase');

let phrases = [
  'Аренда электро-самокатов в хабаровске по лучшим ценам',
  'Электросамокаты на любой вкус и цвет',
  'Заполните форму заявки',
  'только качественные товары',
  'закажите доставку по удобному адресу'
];

function changePhrase(array, num) {
  phrase.textContent = array[num];
};

let count = 1;

setInterval(function () {
  changePhrase(phrases, count);
  count++;

  if (count >= phrases.length) {
    count = 0;
  }
}, 3000);

//Скрипт изменения изображений на главной странице:
const scooterImage = document.querySelector('.slide');

let images = [
  './images/slide-1.png',
  './images/slide-2.png',
  './images/slide-3.png',
  './images/slide-4.png',
  './images/slide-5.png'
];

function changeImage(array, num) {
  scooterImage.src = array[num];
};

let countImg = 1;

setInterval(function () {
  changeImage(images, countImg);
  countImg++;

  if (countImg >= images.length) {
    countImg = 0;
  }
}, 2000);