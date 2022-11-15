'use strict';





























































































//-------------Global Variables-------------//
let imagesArray = [];

//-------------DOM-------------//
// let gameBoard = document.getElementById('gameBoard');
let parentEl = document.getElementById('img-container');
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

//-------------Table Render-------------//
function tableRender() {
  let rowEl = document.createElement('tr');
  let cardEl = document.createElement('td');
  let imageEl = document.createElement('img');
  for (let i = 0; i < imagesArray.length; i++) {
    imageEl.src=imagesArray[i].imagePath;
    // cardEl.innerHTML = imagesArray[i];
    cardEl.appendChild(imageEl);
    rowEl.appendChild(cardEl);
    // parentEl.appendChild(rowEl);
  }
  console.log(imagesArray);

  imgOne.src=imagesArray[0].imagePath;
  imgTwo.src=imagesArray[1].imagePath;
  imgThree.src=imagesArray[2].imagePath;
  imgFour.src=imagesArray[3].imagePath;
  imgFive.src=imagesArray[4].imagePath;
  imgSix.src=imagesArray[5].imagePath;
  imgSeven.src=imagesArray[6].imagePath;
  imgEight.src=imagesArray[7].imagePath;
  imgNine.src=imagesArray[0].imagePath;
  imgTen.src=imagesArray[1].imagePath;
  imgEleven.src=imagesArray[2].imagePath;
  imgTwelve.src=imagesArray[3].imagePath;
  imgThirteen.src=imagesArray[4].imagePath;
  imgFourteen.src=imagesArray[5].imagePath;
  imgFifteen.src=imagesArray[6].imagePath;
  imgSixteen.src=imagesArray[7].imagePath;
  
  imgOne.alt=imagesArray[0].name;
  imgTwo.alt=imagesArray[1].name;
  imgThree.alt=imagesArray[2].name;
  imgFour.alt=imagesArray[3].name;
  imgFive.alt=imagesArray[4].name;
  imgSix.alt=imagesArray[5].name;
  imgSeven.alt=imagesArray[6].name;
  imgEight.alt=imagesArray[7].name;
  imgNine.alt=imagesArray[0].name;
  imgTen.alt=imagesArray[1].name;
  imgEleven.alt=imagesArray[2].name;
  imgTwelve.alt=imagesArray[3].name;
  imgThirteen.alt=imagesArray[4].name;
  imgFourteen.alt=imagesArray[5].name;
  imgFifteen.alt=imagesArray[6].name;
  imgSixteen.alt=imagesArray[7].name;
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

imagesArray.push(bunny,cat,chicken,cow,deer,duck,pig,puppy);

//-------------Executable Code-------------//

tableRender();
