/* start - filter */
const mobileFilter = document.querySelector('.filter-m');
const mobilePrevBtn = document.querySelector('.filter-m__top-btn');
const mobileFilterBtn = document.querySelector('.sort__filter-name');

mobileFilterBtn.addEventListener('click', function () {
  mobileFilter.classList.add('is-active');
});

mobilePrevBtn.addEventListener('click', function () {
  mobileFilter.classList.remove('is-active');
});
/*end - filter */
