
const modal = document.querySelector('.backdrop');
const modalImage = document.querySelector('.modal-image');
const modalBtnClose = document.querySelector('.modal-btn-close');

// Функція для відкриття модального вікна з вибраним зображенням
const openModalWithImage = (event) => {
  const imageSrc = event.target.src;
  modalImage.src = imageSrc;
  modal.classList.remove('is-hidden');
};

// Додаємо обробник події для зображень з класом .cats
const catImages = document.querySelectorAll('.cats');
catImages.forEach((image) => {
  image.addEventListener('click', openModalWithImage);
});

// Закриваємо модальне вікно
modalBtnClose.addEventListener('click', () => {
  modal.classList.add('is-hidden');
  modalImage.src = ''; // Очищуємо src, коли модальне вікно закривається
});