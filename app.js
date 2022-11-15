'use strict';





























































































//-------------Global Variables-------------//
let imagesArray = [];

//-------------DOM-------------//
// let gameBoard = document.getElementById('gameBoard');
let imgOne = document.getElementById('imgOne');
let imgTwo = document.getElementById('imgTwo');
let imgThree = document.getElementById('imgThree');
let imgFour = document.getElementById('imgFour');

//-------------Card Constructor-------------//
function Card(name, fileExtension = 'jpg') {
  this.name = name;
  this.imagePath = `img/${name}.${fileExtension}`;
  this.clicks = 0;
}

//-------------Table Render-------------//
function tableRender() {
  let parentEl = document.getElementById('img-container');
  let rowEl = document.createElement('tr');
  let cardEl = document.createElement('td');
  let imageEl = document.createElement('img');
  for (let i = 0; i < imagesArray.length; i++) {
    imageEl.src=imagesArray[i].imagePath;
    // cardEl.innerHTML = imagesArray[i];
    cardEl.appendChild(imageEl);
    rowEl.appendChild(cardEl);
    parentEl.appendChild(rowEl);
  }
  console.log(imagesArray);

  imgOne.src=imagesArray[0].imagePath;
  imgTwo.src=imagesArray[1].imagePath;
  imgThree.src=imagesArray[2].imagePath;
  imgFour.src=imagesArray[3].imagePath;

  imgOne.alt=imagesArray[0].name;
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