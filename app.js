'use strict';

//-------------Global Variables-------------//
let imagesArray = [];
let score = [];
let firstClick = null;
let attempts = 5;
let gameScore = [];
let scoreBoardArray = [];

console.log('score', score);
console.log('gameScore', gameScore);

//-------------DOM-------------//
let parentEl = document.getElementById('imgContainer');
let gameBoard = document.getElementById('imgContainer');

//-------------Card Constructor-------------//
function Card(name, fileExtension = 'jpg') {
  this.name = name;
  this.imagePath = `img/${name}.${fileExtension}`;
  this.clicks = 0;
}

// --------------Score Constructor-------------//
function PlayerScore(name, score) {
  this.name = localStorage.getItem('userName');
  this.score = score;
  console.log(name);
}
console.log(PlayerScore);

// ----------Randomizer Function----------//
function randomIndex() {
  return Math.floor(Math.random() * imagesArray.length);
}

//-------------Images Random Function----------//
let randomImageArray = [];
function imageRandomizer() {
  while (randomImageArray.length < 16) {
    let randomImg = randomIndex();
    if (!(randomImageArray.includes(randomImg))) {
      randomImageArray.push(randomImg);
    }
  }
}

//------------Event Handlers-------------//

function handleImageClick(event) {
  let animalClicked = event.target.src;
  console.log('image clicked >>>> ', event.target.id);
  for (let i = 0; i < randomImageArray.length; i++) {
    if (randomImageArray[i].name === animalClicked) {
      imagesArray[i].clicks++;
    }
  }
  if (animalClicked.target === animalClicked.target) {
    score++;
  }
  if (!firstClick) {
    firstClick = event.target.id;
  } else {
    if (firstClick === event.target.id) {
      score++;
      firstClick = null;
    } else {
      attempts--;
    }
  }
  if (attempts === 0) {
    gameBoard.removeEventListener('click', handleImageClick);
    let gameOver = prompt('Game Over! Please enter your name!');
    let newScore = {
      user: gameOver,
      score: score,
    };
    scoreBoardArray.push(newScore);
    saveScoreBoard();
  }
}

function saveScoreBoard() {
  let stringifiedScoreBoard = JSON.stringify(scoreBoardArray);
  localStorage.setItem('scoreBoard', stringifiedScoreBoard);
}

function retrieveScoreBoard() {
  let storage = localStorage.getItem('scoreBoard');
  let parsedStorage = JSON.parse(storage);
  if (parsedStorage) {
    scoreBoardArray = parsedStorage;
  } else {
    scoreBoardArray = [];
  }
}

//-------------Table Render-------------//
function tableRender() {

  imageRandomizer();

  let itemIndex = 0;
  while (itemIndex < randomImageArray.length) {
    let rowEl = document.createElement('tr');
    for (let i = 0; i < 4; i++) {
      let cardEl = document.createElement('td');
      let imageEl = document.createElement('img');
      imageEl.src = imagesArray[randomImageArray[itemIndex]].imagePath;
      imageEl.id = imagesArray[randomImageArray[itemIndex]].name;
      itemIndex++;
      rowEl.appendChild(cardEl);
      cardEl.appendChild(imageEl);
    }
    parentEl.appendChild(rowEl);
  }
}

//-------------Objects-------------//

let bunny = new Card('bunny');
let cat = new Card('cat');
let chicken = new Card('chicken');
let cow = new Card('cow');
let deer = new Card('deer');
let duck = new Card('duck');
let pig = new Card('pig');
let puppy = new Card('puppy');
let bunnyTwo = new Card('bunny');
let catTwo = new Card('cat');
let chickenTwo = new Card('chicken');
let cowTwo = new Card('cow');
let deerTwo = new Card('deer');
let duckTwo = new Card('duck');
let pigTwo = new Card('pig');
let puppyTwo = new Card('puppy');

imagesArray.push(bunny, cat, chicken, cow, deer, duck, pig, puppy, bunnyTwo, catTwo, chickenTwo, cowTwo, deerTwo, duckTwo, pigTwo, puppyTwo);

//-------------Executable Code-------------//
retrieveScoreBoard();
tableRender();
gameBoard.addEventListener('click', handleImageClick);
