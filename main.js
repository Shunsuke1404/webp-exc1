let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'firefox-icon.png') {
    myImage.setAttribute ('src','firefox2.png');
  } else {
    myImage.setAttribute ('src','firefox-icon.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let Name = prompt('名前を入力してください');
  if(!Name) {
    setUserName();
  } else {
    localStorage.setItem('name', Name);
    myHeading.innerHTML = 'Mozilla is cool, ' + Name;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}