/*  start - accardion */
function accordeon(triggersSelector) {
  const btns = document.querySelectorAll(triggersSelector);

  btns.forEach((item) => {
    item.addEventListener('click', function () {
      this.classList.toggle('is-active');
      this.nextElementSibling.classList.toggle('active-content');

      if (this.classList.contains('is-active')) {
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
      } else {
        this.nextElementSibling.style.maxHeight = '0px';
      }
    });
  });
}

accordeon('.category__subtitle');
accordeon('.js-aside-title');
accordeon('.js-footer-caption');
accordeon('.filter-m__subtitle');

/*  end - accardion */
