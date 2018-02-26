'use strict';

// Functions to set and resize images

var MIN = 320;
var MEDIUM = 640;
var LARGE = 1024;
var screensize;
var curSize = 'large';

function checkScreenSize() {
  if (this < MEDIUM || window.innerWidth < MEDIUM) {
    screensize = 'small';
  } else if (this < LARGE || window.innerWidth < LARGE) {
    screensize = 'medium';
  } else {
    screensize = 'large';
  }
}

//set images size (small, medium or large) on load
function setImageSize() {
  for (var i = 0; i < this.length; i++) {
    this[i].src = this[i].src.replace('large', screensize);
  }
  curSize = screensize;
}

// change images and videos size (small, medium or large) on screen resize
function changeImageSize() {
  if (curSize !== screensize) {
    var img = document.querySelectorAll('.media-change');
    for (var i = 0; i < img.length; i++) {
      img[i].src = img[i].src.replace(curSize, screensize);
    }
    curSize = screensize;
  }
}

checkScreenSize.call(window.innerWidth);
setImageSize.call(document.querySelectorAll('.media-change'));

window.addEventListener('resize', checkScreenSize, false);
window.addEventListener('resize', changeImageSize, false);

(function () {

  var header = document.querySelector('header');
  var hambMenu = header.querySelector('#hamburger-menu');
  var storyArrow = document.querySelector('.story-check > i');
  var menuOpen = false;
  var storyOpen = false;

  function checkScrollMenu() {
    // if menu is open, close it when scroll
    if (menuOpen === true) {
      menuAnimation();
    }
  }

  function menuAnimation() {
    if (!menuOpen) {
      menuOpen = true;
      hambMenu.classList.remove('ion-android-menu');
      hambMenu.classList.add('ion-android-close');
      header.classList.add('openmenu');
    } else {
      menuOpen = false;
      // menuTl.reverse();
      hambMenu.classList.remove('ion-android-close');
      hambMenu.classList.add('ion-android-menu');
      header.classList.remove('openmenu');
    }
  }

  function showStory() {
    var story = document.querySelector('.story');
    if (!storyOpen) {
      storyOpen = true;
      story.classList.add('open');
      storyArrow.classList.remove('ion-arrow-down-b');
      storyArrow.classList.add('ion-arrow-up-b');
    } else {
      storyOpen = false;
      story.classList.remove('open');
      storyArrow.classList.remove('ion-arrow-up-b');
      storyArrow.classList.add('ion-arrow-down-b');
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
  storyArrow.addEventListener('click', showStory, false);
})();
//# sourceMappingURL=production.es5.js.map
