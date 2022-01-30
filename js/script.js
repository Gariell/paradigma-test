const overflay = document.querySelector('.overflow');
const body = document.querySelector('body');
const header = document.querySelector('header');
const menuOpenBtn = document.querySelector('.burger');
const menuCloseBtn = document.querySelector('.menu-close');
const menu = document.querySelector('#mobile-menu');
const btnsModalOpen = document.querySelectorAll('button[data-modal-open]');
const modals = document.querySelectorAll('[data-modal]');

let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

function checkWidthWindow() {
  scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
}

menuOpenBtn.addEventListener('click', () => {
  toggleActiveMenu()
});

menuCloseBtn.addEventListener('click', () => {
  toggleActiveMenu()
});

function toggleActiveMenu() {
  menu.classList.toggle('active');
  menuOpenBtn.classList.toggle('active');
  toggleActiveOverlay('menu')
}

function toggleActiveOverlay(param) {
  if (param === 'menu') {
    if(menu.classList.contains('active')) {
      overflay.classList.add('active');
      body.classList.add('overflow-hidden');
    } else {
      overflay.classList.remove('active');
      body.classList.remove('overflow-hidden');
    }
  } else if(param === 'modal'){
    overflay.classList.toggle('active');
    body.classList.toggle('overflow-hidden');
  }
}

modals.forEach(modal => {
  const btnModalClose = modal.querySelector('button[data-modal-btn="close"]');
  btnModalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    toggleActiveOverlay('modal');
    body.style.paddingRight = 0;
    header.style.paddingRight = 0;
  })
});

btnsModalOpen.forEach(btn => {
  btn.addEventListener('click', () => {
    checkWidthWindow()
    let dataAtr = btn.dataset.modalOpen; let modal = document.querySelector('[data-modal="'+dataAtr +'"]');
    body.style.paddingRight = `${scrollbarWidth}px`;
    header.style.paddingRight = `${scrollbarWidth}px`;
    modal.classList.add('active')
    toggleActiveOverlay('modal') 
  })
});

// ymap
let mapBtn = document.getElementById('mapBtn');
let listenerMapOptions = { once: true, passive: true, capture: true };

mapBtn.addEventListener('click', startLazyMap, listenerMapOptions );
mapBtn.addEventListener('mouseover', startLazyMap, listenerMapOptions );
mapBtn.addEventListener('touchstart', startLazyMap, listenerMapOptions );
mapBtn.addEventListener('touchmove', startLazyMap, listenerMapOptions );

let mapLoaded = false;
function startLazyMap() {
  if (!mapLoaded) {
    let mapBlock = document.getElementById('ymapLazy');
    mapLoaded = true;
    mapBlock.setAttribute('src', mapBlock.getAttribute('data-src'));
    mapBlock.removeAttribute('data_src');
  }
}