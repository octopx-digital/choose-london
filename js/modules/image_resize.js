// Functions to set and resize images

const MIN = 320;
const MEDIUM = 640;
const LARGE = 1024;
var screensize;
var curSize = 'small';

function checkScreenSize() {
  if(this < MEDIUM || window.innerWidth < MEDIUM) {
    screensize = 'small';
  }
  else if(this < LARGE || window.innerWidth < LARGE) {
    screensize = 'medium';
  }
  else {
    screensize = 'large';
  }
}

//set images size (small, medium or large) on load
function setImageSize() {
  for (let i = 0; i < this.length; i++) {
    this[i].src = this[i].src.replace('small', screensize);
  }
  curSize = screensize;
}

// change images and videos size (small, medium or large) on screen resize
function changeImageSize() {
  if (curSize !== screensize) {
    var img = document.querySelectorAll('.media-change');
    for (let i = 0; i < img.length; i++) {
      img[i].src = img[i].src.replace(curSize, screensize);
    }
    curSize = screensize;
  }
}

checkScreenSize.call(window.innerWidth);
setImageSize.call(document.querySelectorAll('.media-change'));

window.addEventListener('resize', checkScreenSize, false);
window.addEventListener('resize', changeImageSize, false);
