'use strict';

let scoreBoard = document.getElementById('scoreBoard');
let retreivedScoreBoard = localStorage.getItem('scoreBoard');
let parsedScoreBoard = JSON.parse(retreivedScoreBoard);

function scoreTableRender() {
  for (let i = 0; i < parsedScoreBoard.length; i++) {
    let rowEl = document.createElement('tr');
    let name = document.createElement('td');
    let score = document.createElement('td');
    scoreBoard.appendChild(rowEl);
    name.textContent = parsedScoreBoard[i].user;
    score.textContent = parsedScoreBoard[i].score;
    rowEl.appendChild(name);
    rowEl.appendChild(score);
  }
}

scoreTableRender();
