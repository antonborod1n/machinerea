import './scss/main-offer.scss';
import './scss/main.scss';

const tabsBtn = document.querySelectorAll('.tabs__btn');

tabsBtn.forEach((item) => {
  item.addEventListener('click', () => {
    tabsBtn.forEach((element) => {
      if (element.classList.contains('is-active')) {
        element.classList.remove('is-active');
      }
    });
    item.classList.add('is-active');
  });
});
