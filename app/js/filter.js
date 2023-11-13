const mobileFilter = document.querySelector('.filter-m');
const mobileFilterBtn = document.querySelector('.sort__filter-name');
const mobilePrevBtn = document.querySelector('.filter-m__top-btn');

mobileFilterBtn.addEventListener('click', function () {
  mobileFilter.classList.add('is-active');
});

mobilePrevBtn.addEventListener('click', function () {
  mobileFilter.classList.remove('is-active');
});
