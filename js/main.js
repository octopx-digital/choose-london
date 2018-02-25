(() => {

  var header = document.querySelector('header');
  var hambMenu = header.querySelector('#hamburger-menu');
  var storyArrow = document.querySelector('.story-check > i');
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
