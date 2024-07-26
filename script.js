'use strict';

const players = [
  {
    section: document.querySelector('.player--0'),
    score: document.getElementById('score--0'),
    current: document.getElementById('current--0'),
  },
  {
    section: document.querySelector('.player--1'),
    score: document.getElementById('score--1'),
    current: document.getElementById('current--1'),
  },
];

const dice = document.querySelector('.dice');
const newbtn = document.querySelector('.btn--new');
const rollbtn = document.querySelector('.btn--roll');
const holdbtn = document.querySelector('.btn--hold');

const diceImgs = [
  'dice-1.png',
  'dice-2.png',
  'dice-3.png',
  'dice-4.png',
  'dice-5.png',
  'dice-6.png',
];

const winningScore = 100;

//Game origin state
let activePlayer = 0;
let score = [0, 0];
let currentScore = 0;
let dicNum = 0;
let isPlaying = true;

//funciton
function change() {
  currentScore = 0;
  players[activePlayer].current.textContent = currentScore;
  activePlayer = activePlayer == 0 ? 1 : 0;
  players.forEach(p => {
    p.section.classList.toggle('player--active');
  });
}

function rollHandler() {
  if (!isPlaying) return;

  dicNum = Math.floor(Math.random() * 6) + 1;
  dice.src = diceImgs[dicNum - 1];
  currentScore += dicNum;
  players[activePlayer].current.textContent = currentScore;
  if (dicNum === 1) {
    change();
  }
}

function holdHandler() {
  if (!isPlaying) return;

  score[activePlayer] += currentScore;
  players[activePlayer].score.textContent = score[activePlayer];

  if (score[activePlayer] >= winningScore) {
    isPlaying = false;
    players[activePlayer].section.classList.add('player--winner');
    players[activePlayer].section.classList.remove('player--active');
  } else {
    change();
  }
}

function newGame() {
  activePlayer = 0;
  score = [0, 0];
  currentScore = 0;
  dicNum = 0;
  isPlaying = true;

  players.forEach((p, index) => {
    p.score.textContent = '0';
    p.current.textContent = '0';
    p.section.classList.toggle('player--active', index === 0);
    p.section.classList.remove('player--winner');
  });
}

newbtn.addEventListener('click', newGame);
rollbtn.addEventListener('click', rollHandler);
holdbtn.addEventListener('click', holdHandler);

/*
 */
