'use strict';

let scoreBoard = document.getElementById('scoreBoard');
let retreivedName = localStorage.getItem('userName');
let retreivedScore = localStorage.getItem('finalScore');
console.log(retreivedName);

function scoreTableRender() {
  let rowEl = document.createElement('tr');
  let data = document.createElement('td');
  let score = document.createElement('td');
  
  data.textContent = retreivedName;
  score.textContent = retreivedScore;

  scoreBoard.appendChild(rowEl);
  rowEl.appendChild(data);
  rowEl.appendChild(score);
}

scoreTableRender();
