'use strict';

//-------------Global Variables-------------//
let imagesArray = [];
let score = [];

//-------------DOM-------------//
// let gameBoard = document.getElementById('gameBoard');

// let parentEl = document.getElementById('imgContainer');
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
    if (!(randomImageArray.includes(imagesArray[randomIndex]))) {
      randomImageArray.push(imagesArray[randomImg]);
      // for (let i = 0; i < imagesArray.length; i++) {
      //   let randomImage = randomIndex();
      //   if (randomImage) {

    }
  }
}

//------------Event Handlers-------------//
function handleImageClick(event) {
  let animalClicked = event.target.src;
  console.log('image clicked >>>> ', animalClicked);
  for (let i = 0; i < randomImageArray.length; i++) {
    if (randomImageArray[i].name === animalClicked) {
      imagesArray[i].clicks++;
    }
  }
}
console.log(randomImageArray.clicks);

//-------------Table Render-------------//
function tableRender() {

  imageRandomizer();

  let rowEl = document.createElement('tr');
  let cardEl = document.createElement('td');
  let imageEl = document.createElement('img');
  for (let i = 0; i < imagesArray.length; i++) {

    imageEl.src=imagesArray[i].imagePath;
    // cardEl.innerHTML = imagesArray[i];

    cardEl.appendChild(imageEl);
    rowEl.appendChild(cardEl);
  }
  console.log(imagesArray);


  imgOne.src = randomImageArray[0].imagePath;
  imgTwo.src = randomImageArray[1].imagePath;
  imgThree.src = randomImageArray[2].imagePath;
  imgFour.src = randomImageArray[3].imagePath;
  imgFive.src = randomImageArray[4].imagePath;
  imgSix.src = randomImageArray[5].imagePath;
  imgSeven.src = randomImageArray[6].imagePath;
  imgEight.src = randomImageArray[7].imagePath;
  imgNine.src = randomImageArray[8].imagePath;
  imgTen.src = randomImageArray[9].imagePath;
  imgEleven.src = randomImageArray[10].imagePath;
  imgTwelve.src = randomImageArray[11].imagePath;
  imgThirteen.src = randomImageArray[12].imagePath;
  imgFourteen.src = randomImageArray[13].imagePath;
  imgFifteen.src = randomImageArray[14].imagePath;
  imgSixteen.src = randomImageArray[15].imagePath;

  imgOne.alt = randomImageArray[0].name;
  imgTwo.alt = randomImageArray[1].name;
  imgThree.alt = randomImageArray[2].name;
  imgFour.alt = randomImageArray[3].name;
  imgFive.alt = randomImageArray[4].name;
  imgSix.alt = randomImageArray[5].name;
  imgSeven.alt = randomImageArray[6].name;
  imgEight.alt = randomImageArray[7].name;
  imgNine.alt = randomImageArray[8].name;
  imgTen.alt = randomImageArray[9].name;
  imgEleven.alt = randomImageArray[10].name;
  imgTwelve.alt = randomImageArray[11].name;
  imgThirteen.alt = randomImageArray[12].name;
  imgFourteen.alt = randomImageArray[13].name;
  imgFifteen.alt = randomImageArray[14].name;
  imgSixteen.alt = randomImageArray[15].name;
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
gameBoard.addEventListener("click", handleImageClick);

// imagesArray.push(bunny,cat,chicken,cow,deer,duck,pig,puppy);
