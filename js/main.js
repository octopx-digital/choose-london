(() => {

  var header = document.querySelector('header');
  var hambMenu = header.querySelector('#hamburger-menu');
  var storyArrow = document.querySelector('.story-check > i');
  let topButton = document.querySelector('.back-to-top');
  var menuOpen = false;
  var storyOpen = false;

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
    console.log('fade in button');
    let footer = document.querySelector('footer').clientHeight;
    let height = window.scrollY;
    console.log(footer);
    console.log(height);
    console.log(document.body.offsetHeight);
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
  window.addEventListener('scroll', fixButton);
  window.addEventListener('mousemove', fixButton);
  topButton.addEventListener('click', topPage, false);
})();
