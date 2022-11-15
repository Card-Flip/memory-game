'use strict';

//-------------Global Variables-------------//
let imagesArray = [];
let score = [];

//-------------DOM-------------//
// let gameBoard = document.getElementById('gameBoard');
let parentEl = document.getElementById('imgContainer');
let gameBoard = document.getElementById('imgContainer');
// let imgOne = document.getElementById('imgOne');
// let imgTwo = document.getElementById('imgTwo');
// let imgThree = document.getElementById('imgThree');
// let imgFour = document.getElementById('imgFour');

//-------------Card Constructor-------------//
function Card(name, fileExtension = 'jpg') {
  this.name = name;
  this.imagePath = `img/${name}.${fileExtension}`;
  this.clicks = 0;
}

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
      // else if (randomImageArray.includes(randomImg)) 
      // for (let i = 0; i < imagesArray.length; i++) {
      //   let randomImage = randomIndex();
      //     if (randomImageArray.includes(imagesArray(randomImg)) || imagesArray.includes(randomImg)) {
      // }
      // if (randomImageArray.includes(imagesArray[randomIndex])) { 
      // }
    }
  }
}
console.log('random image array', randomImageArray);


//------------Event Handlers-------------//
function handleImageClick(event) {
  let animalClick = event.target.alt;
  for (let i = 0; i < imagesArray.length; i++) {
    if (imagesArray[i].name === animalClick) {
      score[i].clicks++;
    }
  }
}
console.log('score', score);

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
      itemIndex++;
      rowEl.appendChild(cardEl);
      cardEl.appendChild(imageEl);
    }
    parentEl.appendChild(rowEl);
  }
  console.log('images array', imagesArray);
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

tableRender();
gameBoard.addEventListener('click', handleImageClick);
