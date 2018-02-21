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

(() => {

  var header = document.querySelector('header');
  var hambMenu = header.querySelector('#hamburger-menu');
  var menuOpen = false;

  function checkScrollMenu() {
    // if menu is open, close it when scroll
    if(menuOpen === true) {
      menuAnimation();
    }
  }

  function menuAnimation() {
    if (!menuOpen) {
      menuOpen = true;
      hambMenu.classList.remove('ion-android-menu');
      hambMenu.classList.add('ion-android-close');
      header.classList.add('openmenu');
    }
    else {
      menuOpen = false;
      // menuTl.reverse();
      hambMenu.classList.remove('ion-android-close');
      hambMenu.classList.add('ion-android-menu');
      header.classList.remove('openmenu');
    }
  }

  // function openMenu() {
  //   menuTl.to(menu, 1, {left: 0, opacity: 1, ease: Expo.easeInOut});
  // }

  // function getJobs() {
  //   var posts = document.querySelector('#job-post');
  //   var data = fetchAPI.jobs;
  //   console.log(data);
  //
  //   data.forEach(({logo, post, position}) => {
  //     let newDiv = document.createElement('div');
  //     newDiv.classList.add('responsive');
  //     let newImg = document.createElement('img');
  //     let newPost = document.createElement('h1');
  //     let newPosition = document.createElement('p');
  //     let button = document.createElement('button');
  //     let anchor = document.createElement('a');
  //     anchor.innerHTML = "APPLY";
  //     button.appendChild(anchor);
  //     newImg.src = 'images/build/logo_'+logo;
  //     newPost.textContent = post;
  //     newPosition.textContent = position;
  //     newDiv.append(newImg, newPost, newPosition, button);
  //     posts.appendChild(newDiv);
  //   });
  // }

  // window.addEventListener('load', getJobs, false);
  window.addEventListener('scroll', checkScrollMenu, false);
  // window.addEventListener('load', openMenu, false);
  hambMenu.addEventListener('click', menuAnimation, false);

})();
