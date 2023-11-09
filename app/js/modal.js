const modals = document.querySelectorAll('.js-modal');
const modal1 = document.querySelector('.js-modal1');
const modal2 = document.querySelector('.js-modal2');
const quickOrderBtn = document.querySelector('.js-quick-order');

const modalR1 = document.querySelector('.modal-r');
const modalR2 = document.querySelector('.modal-r2');
const quickOrder = document.querySelector('.quick-order');

const closeModal = document.querySelectorAll('.close');

modal1.addEventListener('click', function () {
  modalR1.classList.add('modal-open');
});
modal2.addEventListener('click', function () {
  modalR2.classList.add('modal-open');
});

quickOrderBtn.addEventListener('click', function () {
  quickOrder.classList.add('is-active');
});

closeModal.forEach((item) => {
  item.addEventListener('click', function () {
    modalR1.classList.remove('modal-open');
    modalR2.classList.remove('modal-open');
  });
});

modals.forEach((item) => {
  item.addEventListener('click', function (e) {
    if (e.target.classList.contains('js-modal')) {
      modalR1.classList.remove('modal-open');
      modalR2.classList.remove('modal-open');
    }
  });
});
