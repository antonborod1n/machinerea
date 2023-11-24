//start - sort
const sortDropdownMenu = document.querySelector('.sort__dropdown');
const offerSortBtn = document.querySelector('.offer__sort-btn-new');

offerSortBtn.addEventListener('click', function () {
  sortDropdownMenu.classList.toggle('is-active');
});
//end - sort
