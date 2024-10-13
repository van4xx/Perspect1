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
    interval = setInterval(updateCoords, 300); // Каждые 100 мс меняем координаты
  
    // Через 5 секунд выставляем итоговые координаты и останавливаем смену
    setTimeout(() => {
      clearInterval(interval);
      coordsElement.innerHTML = targetCoords;
    }, 5000); // Время ожидания в миллисекундах
  });
  

  let currentIndex = 0;
  const cards = document.querySelectorAll('.thirdBlockCard');
  const thirdBlock = document.querySelector('.thirdBlock');
  const lastCard = cards[cards.length - 1];
  
  // Функция для отображения карточек
  function showCard(index) {
    cards.forEach((card, i) => {
      if (i === index) {
        card.classList.remove('hidden');
        card.style.display = 'flex'; // Показать текущую карточку
      } else {
        card.classList.add('hidden');
        card.style.display = 'none'; // Скрыть остальные карточки
      }
    });
  }
  
  // Изначально показываем первую карточку
  showCard(currentIndex);
  
  // Обработчик события прокрутки
  window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0 && currentIndex < cards.length - 1) {
      // Прокрутка вниз
      currentIndex++;
    } else if (event.deltaY < 0 && currentIndex > 0) {
      // Прокрутка вверх
      currentIndex--;
    }
  
    showCard(currentIndex);
  });
  
  // Используем Intersection Observer для отслеживания последней карточки
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Если последняя карточка видима, разрешаем прокрутку
        thirdBlock.style.position = 'absolute'; // Делаем секцию абсолютно позиционированной
        thirdBlock.style.top = `${window.innerHeight}px`; // Перемещаем ее вниз на высоту экрана
      } else {
        // Если последняя карточка не видима, оставляем фиксированной
        thirdBlock.style.position = ''; // Снова фиксируем позицию
        thirdBlock.style.top = '0'; // Возвращаем к верхней части экрана
      }
    });
  }, { threshold: 1.0 }); // Настраиваем на 100% видимости
  
  // Наблюдаем за последней карточкой
  observer.observe(lastCard);
  



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














  