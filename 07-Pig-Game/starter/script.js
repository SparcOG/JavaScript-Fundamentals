'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore0 = 0;
let currentScore1 = 0;

// Roling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for rolled 1: if tru, swich to next player
  if (dice !== 1 && current1El.textContent == 0) {
    // Add dice to current score
    currentScore0 += dice; // currentScore = currentScore + dice; it will be the same string (short version)
    current0El.textContent = currentScore0;
  } else if (dice === 1) {
    // currentScore1 += dice;
    current0El.textContent = 0;
    current1El.textContent = 1;
    // score1El.textContent = 1;
    // current0El.textContent = 0;
  } else if (current1El.textContent > 0 && dice !== 1) {
    current0El.textContent = 0;
    currentScore1 += dice; // currentScore = currentScore + dice; it will be the same string (short version)
    current1El.textContent = currentScore1;
  } else {
    // Switch to next player
    // I'm tri do it one
  }
});
