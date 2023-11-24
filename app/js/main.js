import './accardion.js';
import './filter.js';
import './modal.js';
import './sort.js';

document.addEventListener('DOMContentLoaded', () => {
  const swipers = new Swiper('.swiper__catalog-top', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 16,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const reviewsSlider = new Swiper('.reviews__slider', {
    slidesPerView: 'auto',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      320: {
        spaceBetween: 8,
      },
      640: {
        spaceBetween: 16,
      },
    },
  });

  const catalogProductSwiper = new Swiper('.swiper__catalog-product', {
    slidesPerView: 1,
    direction: 'horizontal',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  const swiperProduct = new Swiper('.swiper-product', {
    slidesPerView: 5,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiperProductNarrow = new Swiper('.first-screen__swiper-narrow', {
    slidesPerView: 4,
    spaceBetween: 20,
    loopedSlides: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'vertical',
  });

  const swiperProductLarge = new Swiper('.first-screen__swiper-large', {
    slidesPerView: 'auto',
    thumbs: {
      swiper: swiperProductNarrow,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  const screenWidth = window.innerWidth;

  if (screenWidth < 1000) {
    const editBtns = document.querySelectorAll('.btn-edit-js');

    editBtns.forEach((item) => {
      item.innerHTML = '';
    });
  }

  /* start - mobile menu */
  const burgerBtn = document.querySelector('.header__menu-btn');
  const mobileMenuReg = document.querySelector('.menu__registered-m');
  const mobileMenuLog = document.querySelector('.menu__login-m');
  const menuBtnExit = document.querySelector('.menu__btn-close');
  const menuLinkCatalog = document.querySelectorAll('.menu__link-catalog');
  const overlay = document.querySelector('.menu-m');
  const category = document.querySelector('.catalog-menu__category-m');
  const subcategory = document.querySelector('.catalog-menu__subcategory-m');
  const categoryBtn = document.querySelectorAll('.catalog-menu__btn-m');
  const btnsCloseCategory = document.querySelectorAll('.catalog-menu__category-btn');
  const btnsCloseSubategory = document.querySelectorAll('.catalog-menu__subcategory-btn');
  const btnCloseCatalog = document.querySelectorAll('.catalog-menu__close-m');

  btnCloseCatalog.forEach((item) => {
    item.addEventListener('click', function () {
      category.classList.remove('is-active');
      subcategory.classList.remove('is-active');
      mobileMenuReg.classList.remove('open');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  categoryBtn.forEach((item) => {
    item.addEventListener('click', function () {
      subcategory.classList.add('is-active');
    });
  });
  btnsCloseSubategory.forEach((item) => {
    item.addEventListener('click', function () {
      subcategory.classList.remove('is-active');
    });
  });
  btnsCloseCategory.forEach((item) => {
    item.addEventListener('click', function () {
      category.classList.remove('is-active');
    });
  });
  menuLinkCatalog.forEach((item) => {
    item.addEventListener('click', function () {
      category.classList.add('is-active');
    });
  });
  menuBtnExit.addEventListener('click', function () {
    mobileMenuReg.classList.remove('open');
    mobileMenuLog.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
  burgerBtn.addEventListener('click', function () {
    mobileMenuReg.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) {
      mobileMenuReg.classList.remove('open');
      mobileMenuLog.classList.remove('open');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
  /* end - mobile menu */

  /* start - catalog dropdown menu */
  const catalogBtn = document.querySelector('.header__catalog-btn');
  const catalogMenu = document.querySelector('.catalog-menu');
  const openNavMenu = document.querySelector('.catalog__btn-burgermenu');

  catalogBtn.addEventListener('click', toggleNav);

  function toggleNav() {
    openNavMenu.classList.toggle('opened');
    catalogMenu.classList.toggle('is-active');
  }
  /* end - catalog dropdown menu */

  /*start - catalog dropdown menu tabs*/
  document.addEventListener('click', showCatalogMenu);
  document.addEventListener('click', showTabs);

  function showCatalogMenu(e) {
    const target = e.target;

    if (target.closest('[data-menu]')) {
      const subMenuId = target.dataset.menu ? target.dataset.menu : null;
      const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
      const menuBtn = document.querySelectorAll('.catalog-menu__btn');
      const menuContent = document.querySelectorAll('.catalog-menu__content');

      menuBtn.forEach((item) => {
        item.classList.remove('is-active');
      });

      menuContent.forEach((item) => {
        item.classList.remove('is-active');
      });

      if (subMenu) {
        target.classList.add('is-active');
        subMenu.classList.add('is-active');
      }
    }
  }
  function showTabs(e) {
    const target = e.target;

    if (target.closest('[data-btn]')) {
      const tabsContentId = target.dataset.btn ? target.dataset.btn : null;
      const subMenu = document.querySelector(`[data-tabs="${tabsContentId}"]`);
      const menuBtn = document.querySelectorAll('.tabs__btn');
      const menuContent = document.querySelectorAll('.tabs__item');

      menuBtn.forEach((item) => {
        item.classList.remove('is-active');
      });

      menuContent.forEach((item) => {
        item.classList.remove('is-active');
      });

      if (subMenu) {
        target.classList.add('is-active');
        subMenu.classList.add('is-active');
      }
    }
  }
  /*end - catalog dropdown menu tabs*/

  //start - show drop menu breadcrumbs
  const dropBtn = document.querySelector('.breadcrumbs__item.drop-down');
  const dropMenu = document.querySelector('.drop-down__menu');

  dropBtn.addEventListener('click', function () {
    dropMenu.classList.toggle('is-active');
  });
  //end - show drop menu breadcrumbs

  /* start - range-slider */
  const rangeSlider = document.getElementById('range');

  if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
      start: [0, 999999],
      connect: true,
      step: 1,
      range: {
        min: 0,
        max: 9999,
      },
    });
    const input0 = document.getElementById('rangeInput0');
    const input1 = document.getElementById('rangeInput1');
    const inputs = [input0, input1];

    rangeSlider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = Math.round(values[handle]);
    });
  }
  /* end - range-slider */

  //start - search
  const searchBlock = document.querySelector('.search');
  const searchInput = document.querySelector('.search__input');
  const searchBtnClear = document.querySelector('.search__top-btn-delete');
  const searchBtnPrev = document.querySelector('.search__top-btn');

  searchBtnClear.style.display = 'none';

  searchInput.addEventListener('input', getInputValue);
  searchBtnClear.addEventListener('click', clearInputValue);
  searchBtnPrev.addEventListener('click', function () {
    searchBlock.classList.remove('is-active');
  });

  function clearInputValue() {
    searchInput.value = '';
  }

  function getInputValue() {
    const val = searchInput.value;
    if (val.length) {
      searchBtnClear.style.display = 'block';
    }
  }
  //end - search
});
