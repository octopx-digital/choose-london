(() => {

  var header = document.querySelector('header');
  var hambMenu = header.querySelector('#hamburger-menu');
  var catButtons = document.querySelectorAll('.open-category');
  var categories = document.querySelectorAll('.category');
  var storyDiv = document.querySelectorAll('.story');
  let topButton = document.querySelector('.back-to-top');
  var menuOpen = false;
  var catOpen = 0;
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

  function checkResize(){
    storyArrow();
    if(document.querySelector('.home') !== null){
      eventArrows();
      videoCall();
    }
  }

  function fetchData(){
    let url = 'includes/read.php?home';
    let container = document.querySelector('#section-icons');

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

  }

  function videoCall(){
    let video = 'includes/read.php?video';
    let ldnBanner = document.querySelector('#ldn-banner');
    let videoContainer = document.querySelector('#main-video');

    fetch(video)
      .then((res) => res.json())
        .then((info) => {
          info.forEach((entry) => {
            let div = `<div class="video-header">
            <img src="images/`+entry.icon+`.svg" alt="`+entry.title+`">
            <p>`+entry.description+`</p>
            </div>`;
            ldnBanner.innerHTML = div;
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

  function storyArrow(){
    if(screensize == 'small'){
      var storyDiv = document.querySelectorAll('.story');
      storyDiv.forEach((arrow) => {
        arrow.addEventListener('click', showStory, false);
      });
    } else {
      var storyDiv = document.querySelectorAll('.story');
      storyDiv.forEach((arrow) => {
        arrow.removeEventListener('click', showStory, false);
      });
    }
  }

  function showStory(el) {
    el = this;
    let storyArrow = this.querySelector('.story-check > i');
    if(el.classList.contains('open')){
      el.classList.remove('open');
      storyArrow.classList.remove('ion-arrow-up-b');
      storyArrow.classList.add('ion-arrow-down-b');
    } else {
      el.classList.add('open');
      storyArrow.classList.remove('ion-arrow-down-b');
      storyArrow.classList.add('ion-arrow-up-b');
    }
  }

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
        } else {
            topButton.classList.remove('fadein');
            topButton.classList.add('bottom');
        }
    }
  }

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

    jobArrows();
  }

  function getEvents(){
    let container = document.querySelector('#events-container');
    let events = meetup.events;

    events.forEach(({id,name, image, venue, local_date, local_time, link}) => {
      let address = venue.address_1;
      let month = local_date.slice(5,8);
      let date = local_date.slice(9,11);

      let img = 'images/'+image;
      let newEvent = `<div class="events">
      <div class="event-data">
      <div class="date"><h5>`+month+`</br>`+date+`</h5></div>
      <img src="`+img+`">
      <h2>${name}</h2>
      <p>`+address+`</br>
      At ${local_time}</p>
      <a href="${link}"><p>Event Details</p><div><span class="share-btn"><i class="ion-android-share-alt"></i></span></div></a>
      </div>
      </div>`;

      container.innerHTML += newEvent;
    });
    eventArrows();
  }

  function toggleCategory(e) {
    let id = e.currentTarget.dataset.id;
    if(id === catOpen) {
      categories[(id-1)].classList.remove('selected');
      e.currentTarget.classList.remove('selected');
      catButtons.forEach((button) => {
        button.classList.remove('dim');
      });
      catOpen = 0;
    }
    else {
      categories.forEach((category, index) => {
        if(category.dataset.id === id) {
          category.classList.add('selected');
          catButtons[index].classList.remove('dim');
          catButtons[index].classList.add('selected');
          let closeButton = category.querySelector('.close-category-btn');
          closeButton.addEventListener('click', toggleCategory, false);
        }
        else {
          category.classList.remove('selected');
          catButtons[index].classList.remove('selected');
          catButtons[index].classList.add('dim');
        }
      });
      catOpen = id;
    }
  }

  function submitForm(e){
    e.preventDefault;
    if(document.querySelector('.subscribe-form input[type=text]').value !== "" || document.querySelector('.subscribe-form input[type=email]').value !== ""){
      let form = document.querySelector('.subscribe-form');
      let message = `<h2>Thanks for subscribing!</h2>`;
      form.innerHTML = message;
    }
  }

  window.addEventListener('load', storyArrow, false);
  window.addEventListener('resize', checkResize, false);
  window.addEventListener('scroll', checkScrollMenu, false);
  hambMenu.addEventListener('click', menuAnimation, false);
  checkEconomicsPage.call(document.querySelector('#container'));
  window.addEventListener('scroll', fixButton);
  window.addEventListener('mousemove', fixButton);
  topButton.addEventListener('click', topPage, false);

  catButtons.forEach((button) => {
    if (!('ontouchstart' in document.documentElement)) {
      button.classList.add('no-touch');
    }
    button.addEventListener('click', toggleCategory, false);
  });

  //If it's on the homepage, run those functions
  if(document.querySelector('.home') !== null){
    videoCall.call();
    fetchData.call();
    getEvents.call();
    getJobs.call();
    window.addEventListener('load', videoCtrl, false);
  }

  if(document.querySelector('#form-submit') !== null){
    let submit = document.querySelector('#form-submit');
    submit.addEventListener('click', submitForm, false);
  }

})();
