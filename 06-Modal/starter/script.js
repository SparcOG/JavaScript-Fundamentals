'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//listen to events by pressing the esc button
//The function passes the click event as an argent to the parameter (e)
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  //If the model does not contain the hidden class and keydowm was press esc
  //then close the model.
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    if (!modal.classList.contains('hidden')) {
      // Сall the modal close function when you press key esc
      closeModal();
    }
  }
});
