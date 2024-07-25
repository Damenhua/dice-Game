'use strict';

const p1Score = document.getElementById('score--0');
const p1Current = document.getElementById('current--0');

const p2Score = document.getElementById('score--1');
const p2Current = document.getElementById('current--1');

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

function rollHandler() {
  let diceNum = Math.floor(Math.random() * 6) + 1;
  const img = diceImgs[diceNum - 1];
  dice.src = img;

  console.log(diceNum);
}

rollbtn.addEventListener('click', rollHandler);

/*
如何綁定dice圖片到1~6隨機數
*/
