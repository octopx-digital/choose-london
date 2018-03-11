(() => {
  var header = document.querySelector('header');
  var hambMenu = header.querySelector('#hamburger-menu');
  // var storyArrow = document.querySelector('.story-check > i');
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

  function init(){
    if(document.querySelector('.home') !== null){
      fetchData();
      getEvents();
      getJobs();

    }
  }

  function fetchData(){
    let url = 'includes/read.php?home';
    let video = 'includes/read.php?video';
    let container = document.querySelector('#section-icons');
    let videoContainer = document.querySelector('#main-video');

    fetch(url)
      .then((resp) => resp.json())
        .then((data) => {
          data.forEach((item) => {
            if(item.icon){
              let icon = `<div class="section-icons"><a href="`+item.name+`.php"><img src="images/`+item.icon+`.png" alt=`+item.title+`"><h4>`+item.name+`</h4></a></div>`;
              container.innerHTML += icon;
            }
          })
        })
         .catch(function(error){
          console.log(error);
        });

    fetch(video)
      .then((res) => res.json())
        .then((info) => {
          info.forEach((entry) => {
            let div = `<div class="video-header">
            <img src="images/`+entry.icon+`.svg" alt="`+entry.title+`">
            <p>`+entry.description+`</p>
            </div>`;
            videoContainer.innerHTML += div;
          });
        })
        .catch(function(error){
         console.log(error);
       });

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

  function getJobs() {
    let posts = document.querySelector('#job-post');
    let data = fetchAPI.jobs;

    data.forEach(({logo, post, position, date}) => {
      let newDiv = `<div class="space-between"><div class="posts">
      <div class="job-title"><h3>${post}</h3></div>
      <div class="content">
      <img src="images/logo_${logo}">
      <p>${position}</p>
      <p>${date}</p>
      <a href="#">APPLY</a>
      </div>
      </div></div>`;
      posts.innerHTML += newDiv;
    });

    arrows();
  }

  function arrows(){
    let leftArrow = document.querySelector('.arrow-back');
    let rightArrow = document.querySelector('.arrow-forward');
    let posts = document.querySelector('#job-post');
    let thumbs = posts.children.length;
    let thumbcount = posts.querySelectorAll('.space-between');
    let thumb = thumbcount[0].offsetWidth;
    let thumbWidth = posts.offsetWidth;
    let leftPosition = 0;
    posts.style.left = leftPosition+"px";

    leftArrow.addEventListener('click', moveBack, false);
    rightArrow.addEventListener('click', moveForward, false);

    let moveSlide = function (value) {
        leftPosition += value * thumb;
        posts.style.left = leftPosition + 'px';
    };
    function moveBack(){
      if(leftPosition !== 0) {
        moveSlide(1);
      } else if (leftPosition === 0) {
          posts.style.left = leftPosition + 'px';
        } else {
        leftPosition = (thumbs-1)* -thumbWidth;
        posts.style.left = leftPosition + 'px';
      }
    }

    function moveForward(){
      if (leftPosition > (thumbs-1) * -thumb) {
        moveSlide(-1);
      } else {
        leftPosition = 0;
        posts.style.left = leftPosition + 'px';
      }
    }
  }


  function getEvents(){
    let container = document.querySelector('#events-container');
    let events = meetup.events;

    events.forEach(({id,name, venue, local_date, local_time, link}) => {
      let address = venue.address_1;
      let month = local_date.slice(5,8);
      let date = local_date.slice(9,11);

      let image = 'images/'+id+'.jpg';
      let newEvent = `<div class="events">
      <div class="event-data">
      <div class="date"><h5>`+month+`</br>`+date+`</h5></div>
      <img src="`+image+`">
      <h2>${name}</h2>
      <p>`+address+`</br>
      At ${local_time}</p>
      <a href="${link}"><p>Event Details</p><span class="share-btn"><i class="ion-android-share-alt"></i></span></a>
      </div>
      </div>`;

      container.innerHTML += newEvent;
    });
    eventArrows();
  }

  function eventArrows(){
    let toLeft = document.querySelector('.nav-back');
    let toRight = document.querySelector('.nav-forward');
    let events = document.querySelector('#events-container');
    let thumbs = events.children.length;
    let thumbcount = events.querySelectorAll('.events');
    let thumb = thumbcount[0].offsetWidth;
    let thumbWidth = events.offsetWidth;
    let leftPosition = 0;
    events.style.left = leftPosition+"px";

    toLeft.addEventListener('click', moveBack, false);
    toRight.addEventListener('click', moveForward, false);

    let moveSlide = function (value) {
        leftPosition += value * thumb;
        events.style.left = leftPosition + 'px';
    };
    function moveBack(){
      if(leftPosition !== 0) {
        moveSlide(1);
      } else if (leftPosition === 0) {
          events.style.left = leftPosition + 'px';
        } else {
        leftPosition = (thumbs-1)* -thumbWidth;
        events.style.left = leftPosition + 'px';
      }
    }

    function moveForward(){
      if (leftPosition > (thumbs-1) * -thumb) {
        moveSlide(-1);
      } else {
        leftPosition = 0;
        events.style.left = leftPosition + 'px';
      }
    }
  }
  
  checkEconomicsPage.call(document.querySelector('#container'));
  window.addEventListener('load', init, false);
  window.addEventListener('scroll', checkScrollMenu, false);
  // window.addEventListener('load', openMenu, false);
  hambMenu.addEventListener('click', menuAnimation, false);
  checkEconomicsPage.call(document.querySelector('#container'));
  // window.addEventListener('load', getJobs, false);
  // storyArrow.addEventListener('click', showStory, false);
  window.addEventListener('scroll', fixButton);
  window.addEventListener('mousemove', fixButton);
  topButton.addEventListener('click', topPage, false);
})();
