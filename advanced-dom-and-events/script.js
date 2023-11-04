'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// !! Smmoth scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  // const s1coords = section1.getBoundingClientRect();
  // console.log('s1coords :>> ', s1coords);
  // scrollTo(s1coords.left, s1coords.top);
  // window.scrollTo({
  //   left:s1coords.left+window.pageXOffset
  // })
  section1.scrollIntoView({ behavior: 'smooth' });
});

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollTo.scrollIntoView({ behavior: 'smooth' });
//   });
// });

// !!BASED ON THE ABBOVE APPROACH THE FUNCTION HAS TO BE CREATED N TIMES BASED ON THE NUMBER OF LINKS TO RESOLVE THIS WE CAN USE
// !! EVENT DELIGATION
// 1.Add event listener to the commom parent element
// 2.Find which element orginated that event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // Stragey to find the matching element
  console.log('id :>> ', e.target);
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    console.log('id :>> ', this);
  }
});
