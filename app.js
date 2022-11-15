'use strict';





























































































//-------------Global Variables-------------//
let imagesArray = [];

//-------------DOM-------------//
let gameBoard = document.getElementById('gameBoard');

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
  for (let i = 0; i < imagesArray.length; i++) {
    cardEl.innerHTML = imagesArray[i];
    rowEl.appendChild(cardEl);
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

imagesArray.push(bunny,cat,chicken,cow,deer,duck,pig,puppy);