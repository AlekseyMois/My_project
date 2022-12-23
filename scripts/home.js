//Скрипт изменения текста на главной странице:
const phrase = document.querySelector('.main__picture__phrase');

function changePhrase(array, index) {
  phrase.textContent = array[index];
};

fetch('https://api.github.com/users')
  .then(response => response.json())
  .then(users => users.map(user => {
    return user.login
  }))
  .then(logins => {
    let count = 1;

    setInterval(function () {
      changePhrase(logins, count);
      count++;

      if (count >= logins.length) {
        count = 0;
      }
    }, 3000);
  })

//Скрипт изменения изображений на главной странице:
const scooterImage = document.querySelector('.slide');

function changeImage(array, num) {
  scooterImage.src = array[num];
};

fetch('https://api.github.com/users')
  .then(response => response.json())
  .then(users => users.map(user => {
    return user.avatar_url
  }))
  .then(images => {
    let countImg = 1;

    setInterval(function () {
      changeImage(images, countImg);
      countImg++;

      if (countImg >= images.length) {
        countImg = 0;
      }
    }, 2000);
  })
