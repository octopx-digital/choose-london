(() => {

  var header = document.querySelector('header');
  var hambMenu = header.querySelector('#hamburger-menu');
  var storyArrow = document.querySelector('.story-check > i');
  let topButton = document.querySelector('.back-to-top');
  var menuOpen = false;
  var storyOpen = false;
  var sectorOpen = false;

  // add event handlers to Business Sectors section of Economics page
  function checkEconomicsPage() {
    if(this.classList.contains('economics')) {
      let sectorButton = document.querySelector('.sector-wrapper > .open');
      let sectorClose = document.querySelector('.sector-wrapper > .close');

      sectorButton.addEventListener('click', openBusinessSector, false);
      sectorClose.addEventListener('click', openBusinessSector, false);
    }
  }

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
      hambMenu.classList.remove('ion-android-close');
      hambMenu.classList.add('ion-android-menu');
      header.classList.remove('openmenu');
    }
  }

  function showStory() {
    let story = document.querySelector('.story');
    if (!storyOpen) {
      storyOpen = true;
      story.classList.add('open');
      storyArrow.classList.remove('ion-arrow-down-b');
      storyArrow.classList.add('ion-arrow-up-b');
    }
    else {
      storyOpen = false;
      story.classList.remove('open');
      storyArrow.classList.remove('ion-arrow-up-b');
      storyArrow.classList.add('ion-arrow-down-b');
    }
  }

  // var fixButton = debounce(() => {
  function fixButton(){
    let footer = document.querySelector('footer').clientHeight;
    let height = window.scrollY;
    if(screensize != 'small'){
        if(height <= 50) {
            topButton.classList.remove('fadein');
            topButton.classList.remove('bottom');
        } else if (height > 50 && (window.innerHeight + window.pageYOffset) < (document.body.offsetHeight - footer) ) {
            topButton.classList.remove('bottom');
            topButton.classList.add('fadein');
            // setTimeout(out, 5000);
        } else {
            topButton.classList.remove('fadein');
            topButton.classList.add('bottom');
        }
    }
  }
    //
    // function out(){
    //   console.log("fade out called");
    //   topButton.classList.remove('fadein');
    //   topButton.classList.remove('bottom');
    // }
  function topPage() {
      var bodyarea = document.querySelector('body');
      bodyarea.scrollIntoView({block: 'start', inline: 'nearest', behavior: 'smooth'});
  }

  // open Business Sector section on Economics page for mobile
  function openBusinessSector(evt) {
    evt.preventDefault();
    let sectorDiv = document.querySelector('.sector-wrapper');
    let sectorArrow = document.querySelector( '.sector-wrapper > .open > i');
    if (!sectorOpen) {
      sectorOpen = true;
      sectorDiv.classList.add('open');
      sectorArrow.classList.remove('ion-arrow-down-b');
      sectorArrow.classList.add('ion-arrow-up-b');
    }
    else {
      sectorOpen = false;
      sectorDiv.classList.remove('open');
      sectorArrow.classList.remove('ion-arrow-up-b');
      sectorArrow.classList.add('ion-arrow-down-b');
    }
  }

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

  checkEconomicsPage.call(document.querySelector('#container'));

  // window.addEventListener('load', getJobs, false);
  window.addEventListener('scroll', checkScrollMenu, false);
  hambMenu.addEventListener('click', menuAnimation, false);
  storyArrow.addEventListener('click', showStory, false);
  window.addEventListener('scroll', fixButton);
  window.addEventListener('mousemove', fixButton);
  topButton.addEventListener('click', topPage, false);
})();
