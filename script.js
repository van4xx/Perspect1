document.addEventListener("DOMContentLoaded", () => {
  const coordsElement = document.querySelector('.coords');
  const targetCoords = "−16°42′58.<span>02</span>.75′"; // Итоговые координаты
  let interval;

  // Функция для генерации случайных координат
  function getRandomCoords() {
      const degrees = Math.floor(Math.random() * 180 - 90); // От -90 до 90
      const minutes = Math.floor(Math.random() * 60); // От 0 до 59
      const seconds = Math.floor(Math.random() * 60); // От 0 до 59
      const fractions = Math.floor(Math.random() * 100); // От 0 до 99
      return `${degrees}°${minutes}′${seconds}<span>${fractions}</span>.75′`;
  }

  // Функция для обновления координат
  function updateCoords() {
      coordsElement.innerHTML = getRandomCoords();
  }

  // Начинаем обновлять координаты с интервалом
  interval = setInterval(updateCoords, 300); // Каждые 300 мс меняем координаты

  // Через 5 секунд выставляем итоговые координаты и останавливаем смену
  setTimeout(() => {
      clearInterval(interval);
      document.body.style.position = 'relative';
      coordsElement.innerHTML = targetCoords;

      // Прокрутка к секции firstBlock
      const firstBlock = document.querySelector('.firstBlock');
      if (firstBlock) {
          firstBlock.scrollIntoView({ behavior: 'smooth' });
      }
      setTimeout(() => document.querySelector('.site-loader').remove(), 500)
  }, 5000); // Время ожидания в миллисекундах

  // Пример для отслеживания завершения анимации прелоадера
  const preloader = document.querySelector('.preloader'); // Убедитесь, что у вас есть этот элемент
  preloader.addEventListener('animationend', () => {
      // Когда анимация прелоадера закончилась, прокручиваем к firstBlock
      const firstBlock = document.querySelector('.firstBlock');
      if (firstBlock) {
          firstBlock.scrollIntoView({ behavior: 'smooth' });
      }
  });
});

    window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        const firstBlock = document.querySelector('.firstBlock');
        const secondBlock = document.querySelector('.secondBlock');
        const thirdBlock = document.querySelector('#firstCard');
        const fourthBlock = document.querySelector('#secondCard');
        const fifthBlock = document.querySelector('#thirdCard');
        const sixthBlock = document.querySelector('#fourthCard');

        secondBlock.style.opacity = 0;
        thirdBlock.style.opacity = 0;
        fourthBlock.style.opacity = 0;
        fifthBlock.style.opacity = 0;
        sixthBlock.style.opacity = 0;

        if (scroll < 3000 - window.innerHeight) {
            firstBlock.style.opacity = '100%';
            secondBlock.style.opacity = 0;
        }
        else if (scroll > 3000 - window.innerHeight && scroll < 6000 - window.innerHeight*2) {
            firstBlock.style.opacity = 0;
            secondBlock.style.opacity = '100%';
        }
        else if (scroll > 6000 - window.innerHeight*2 && scroll < 9000 - window.innerHeight*3) {
            secondBlock.style.opacity = 0;
            thirdBlock.style.opacity = '100%';
        }
        else if (scroll > 9000 - window.innerHeight*3 && scroll < 12000 - window.innerHeight*4) {
            thirdBlock.style.opacity = 0;
            fourthBlock.style.opacity = '100%';
        }
        else if (scroll > 12000 - window.innerHeight*4 && scroll < 15000 - window.innerHeight*5) {
            fourthBlock.style.opacity = 0;
            fifthBlock.style.opacity = '100%';
        }
        else if (scroll > 15000 - window.innerHeight*5 && scroll < 18000 - window.innerHeight*6) {
            fifthBlock.style.opacity = 0;
            sixthBlock.style.opacity = '100%';
        }
        else if (scroll > 18000 - window.innerHeight*6) {
            sixthBlock.style.opacity = '100%';
        }
    })

  document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('.typing-animation');
    const text = heading.textContent;
    heading.textContent = '';
  
    let index = 0;
    const typingSpeed = 100; // скорость печатания (мс)
  
    function type() {
      if (index < text.length) {
        heading.textContent += text.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
      }
    }
  
    type();
  });
  

  const emailBlock = document.querySelector('.emailBlock');

  window.addEventListener('scroll', () => {
      // Проверяем, достигнут ли конец страницы
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight) {
          emailBlock.classList.add('show'); // Добавляем класс для показа формы
      } else {
          emailBlock.classList.remove('show'); // Удаляем класс, если не внизу
      }
  });














  