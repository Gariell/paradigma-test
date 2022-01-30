const overflay = document.querySelector('.overflow');
const body = document.querySelector('body');
const header = document.querySelector('header');
const menuOpenBtn = document.querySelector('.burger');
const menuCloseBtn = document.querySelector('.menu-close');
const menu = document.querySelector('#mobile-menu');
const btnsModalOpen = document.querySelectorAll('button[data-modal-open]');
const btnsModalClose = document.querySelectorAll('button[data-modal-btn="close"]');
const modals = document.querySelectorAll('[data-modal]');

menuOpenBtn.addEventListener('click', () => {
  toggleActiveMenu()
});
menuCloseBtn.addEventListener('click', () => {
  toggleActiveMenu()
});
btnsModalClose.forEach(btn => {
  btn.addEventListener('click', () => {
    closeModal()
    toggleActiveOverlay('remove') 
  })
});
btnsModalOpen.forEach(btn => {
  btn.addEventListener('click', () => {
    let dataAtr = btn.dataset.modalOpen; 
    let modal = document.querySelector('[data-modal="'+dataAtr +'"]');
    modal.classList.add('active')
    toggleActiveOverlay('add') 
  })
});

function closeModal() {
  modals.forEach(modal => {
    modal.classList.remove('active');
  });
}
function toggleActiveMenu() {
  menu.classList.toggle('active');
  menuOpenBtn.classList.toggle('active');
  menu.classList.contains('active') ? toggleActiveOverlay('add') :  toggleActiveOverlay('remove')  
}
function toggleActiveOverlay(param) {
  if (param === 'add') {
    body.style.paddingRight = `${checkWidthWindow()}px`;
    header.style.paddingRight = `${checkWidthWindow()}px`;
    overflay.classList.add('active');
    body.classList.add('overflow-hidden');
  } else {
    body.style.paddingRight = `0`;
    header.style.paddingRight = `0`;
    overflay.classList.remove('active');
    body.classList.remove('overflow-hidden');
  }
}
function checkWidthWindow() {
  return window.innerWidth - document.documentElement.clientWidth;
}

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