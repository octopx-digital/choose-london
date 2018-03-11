var fetchAPI = {
  jobs : [
    {
      logo: "startech.png",
      post: "Software Developer",
      position: "Full Time",
      date: "Posted Jan 5th"
    },
    {
      logo: "vehikl.png",
      post: "Full Stack Web Developer",
      position: "Full Time",
      date: "Posted Feb 25th"
    },
    {
      logo: "voices.png",
      post: "Systems Architect",
      position: "Full or Part Time",
      date: "Posted Jan 19th"
    },
    {
      logo: "mccg.png",
      post: "Senior Developer",
      position: "Full or Part Time",
      date: "Posted Mar 14th"
    },
    {
      logo: "carproof.png",
      post: "App Developer",
      position: "Part Time",
      date: "Posted Mar 22nd"
    }
  ]
}

// Functions to set and resize images

const MIN = 320;
const MEDIUM = 640;
const LARGE = 1024;
var screensize;
var curSize = 'large';

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
    this[i].src = this[i].src.replace('large', screensize);
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

var meetup = {
    "city":{
        "id":624814,
        "city":"London",
        "lat":43.01,
        "lon":-81.18,
        "state":"ON",
        "country":"ca",
        "zip":"N5V 0A1",
        "member_count":1410
    },
    "events":[
        {
            "created":1445266131000,
            "duration":7200000,
            "id":"kqqpllyxfbdc",
            "name":"Front-End Development Meetup",
            "status":"upcoming",
            "time":1521759600000,
            "local_date":"2018-mar-22",
            "local_time":"19:00",
            "updated":1514081304000,
            "utc_offset":-14400000,
            "waitlist_count":0,
            "yes_rsvp_count":5,
            "venue":{
                "id":24025637,
                "name":"Hacker Studios",
                "lat":42.98481369018555,
                "lon":-81.24620819091797,
                "repinned":false,
                "address_1":"252 Dundas Street",
                "city":"London",
                "country":"ca",
                "localized_country_name":"Canada",
                "zip":"",
                "state":"ON"
            },
            "group":{
                "created":1439235148000,
                "name":"London Front-end Development Meetup",
                "id":18820217,
                "join_mode":"open",
                "lat":42.97999954223633,
                "lon":-81.26000213623047,
                "urlname":"London-Front-end-Development-Meetup",
                "who":"Devs",
                "localized_location":"London, ON",
                "region":"en_US"
            },
            "link":"https://www.meetup.com/London-Front-end-Development-Meetup/events/246166695/",
            "visibility":"public"
        },
        {
            "created":1491966585000,
            "duration":10800000,
            "fee":{
                "accepts":"cash",
                "amount":10.0,
                "currency":"CAD",
                "description":"",
                "label":"Price",
                "required":false
            },
            "id":"239148427",
            "name":"World Usability Day - UX and UI",
            "status":"upcoming",
            "time":1520548200000,
            "local_date":"2018-mar-08",
            "local_time":"17:30",
            "rsvp_open_offset":"PT18H",
            "updated":1519259853000,
            "utc_offset":-18000000,
            "waitlist_count":0,
            "yes_rsvp_count":12,
            "venue":{
                "id":25722974,
                "name":"The London Club",
                "lat":0.0,
                "lon":0.0,
                "repinned":false,
                "address_1":"177 Queens Ave.",
                "city":"London",
                "country":"ca",
                "localized_country_name":"Canada",
                "zip":"",
                "state":"ON"
            },
            "group":{
                "created":1453208546000,
                "name":"Ladies that UX - London Ontario",
                "id":19365592,
                "join_mode":"open",
                "lat":42.939998626708984,
                "lon":-81.20999908447266,
                "urlname":"Ladies-that-UX-London-Ontario",
                "who":"LTUXers",
                "localized_location":"London, ON",
                "region":"en_US"
            },
            "link":"https://www.meetup.com/Ladies-that-UX-London-Ontario/events/239148427/",
            "description":"<p>**IMPORTANT INFORMATION! Please register for the event at the link below - not on meetup.com!**</p> <p><a href=\"https://www.wct-fct.com/en/civicrm/event/info?reset=1&id=285\" class=\"linkified\">https://www.wct-fct.com/en/civicrm/event/info?reset=1&id=285</a></p> <p>Press For Progress is a call to motivate and unite friends, colleagues, and whole communities to think, act, and be, gender inclusive. Because we know, equipped with the right resources, today's girls and women are our future leaders, entrepreneurs, and change-makers.</p> <p>On International Women's Day, join Ladies that UX London Ontario, in partnership with the Women in Communication and Technology, The London Club Speaker Series, for an evening celebrating the unity and harmony between women, the strength of our collective voices, and why we need to continue to Press for Progress.</p> <p>Sponsored by the London Economic Development Corporation, our prestigious line-up of speakers includes award-winning spoken word artist, Holly Painter, Kate Young, Member of Parliament for London West and Parliamentary Secretary to the Minister of Science, and StarTech.com (<a href=\"http://startech.com/\" class=\"linkified\">http://startech.com/</a>) President Lynn Smurthwaite-Murphy as our keynote speaker. These incredible women will share their stories and key learnings in and out of the boardroom.</p> <p>When: March 8, 2018 (5:30-8pm)<br/>Where: The London Club, 177 Queens Ave.<br/>Cost: $10.00</p> <p>All proceeds go to Anova (<a href=\"http://www.anovafuture.org/\" class=\"linkified\">http://www.anovafuture.org/</a>). Tickets include light refreshments and entry to our door prize draw. Cash bar will be available.</p> <p>Anova provides safe places, shelter, support, counselling, and resources for abused women, their children, and all oppressed individuals to find a new start.</p> <p>Reserve your spot: Click here (<a href=\"https://www.wct-fct.com/en/civicrm/event/info?reset=1&id=285\" class=\"linkified\">https://www.wct-fct.com/en/civicrm/event/info?reset=1&id=285</a>)</p> <p>#PressForProgress presents a great opportunity to make new connections with like-minded networking groups in the Forest City.</p> <p>Agenda<br/>Event Time 5:30 - 8:00pm<br/>Registration & Networking 5:30 - 6:00pm<br/>Speaker Event 6:00 - 7:00pm<br/>Post-Event Networking 7:15 - 8:00 pm</p> <p>Thank you to our sponsors:<br/>The London Economic Development Corporation and The London Club Speaker Series</p> ",
            "visibility":"public"
        },
        {
            "created":1512176675000,
            "duration":10800000,
            "id":"245574300",
            "name":"Build a Child Theme in Wordpress",
            "rsvp_limit":25,
            "status":"upcoming",
            "time":1521586800000,
            "local_date":"2018-mar-20",
            "local_time":"19:00",
            "updated":1519221871000,
            "utc_offset":-14400000,
            "waitlist_count":0,
            "yes_rsvp_count":9,
            "venue":{
                "id":5024132,
                "name":"London Public Library (Landon Branch in Old South)",
                "lat":42.972198486328125,
                "lon":-81.25288391113281,
                "repinned":false,
                "address_1":"167 Wortley Road",
                "city":"London",
                "country":"ca",
                "localized_country_name":"Canada",
                "zip":"",
                "state":"ON"
            },
            "group":{
                "created":1414089216000,
                "name":"WordPress London Canada",
                "id":17818122,
                "join_mode":"open",
                "lat":43.02000045776367,
                "lon":-81.20999908447266,
                "urlname":"WordPress-London",
                "who":"WordPressers",
                "localized_location":"London, ON",
                "region":"en_US"
            },
            "link":"https://www.meetup.com/WordPress-London/events/245574300/",
            "description":"<p>When you need to make modifications to the theme you are using, child themes are the way to go. We will demonstrate how to do it. If you have a site you want to try this on you can follow along. No programming experience is needed, we will cover the basics.</p> ",
            "visibility":"public",
            "pro_is_email_shared":false
        },
        {
            "created":1518895582000,
            "duration":10800000,
            "id":"247906863",
            "name":"Female Artists\u2019 Music Night at Cowboys!!",
            "status":"upcoming",
            "time":1520121600000,
            "local_date":"2018-mar-03",
            "local_time":"19:00",
            "updated":1518963287000,
            "utc_offset":-18000000,
            "waitlist_count":0,
            "yes_rsvp_count":15,
            "venue":{
                "id":17886022,
                "name":"Cowboys Ranch",
                "lat":42.983699798583984,
                "lon":-81.26339721679688,
                "repinned":false,
                "address_1":"60 Wharncliffe Rd North",
                "city":"London",
                "country":"ca",
                "localized_country_name":"Canada",
                "zip":"",
                "state":"ON"
            },
            "group":{
                "created":1441820763000,
                "name":"London Random Activity Meetup Hosted by Infinite Activities",
                "id":18915354,
                "join_mode":"open",
                "lat":42.9900016784668,
                "lon":-81.27999877929688,
                "urlname":"Londonrandomactivitymeetup",
                "who":"Friends",
                "localized_location":"London, ON",
                "region":"en_US"
            },
            "link":"https://www.meetup.com/Londonrandomactivitymeetup/events/247906863/",
            "description":"<p>\u2022 What we'll do<br/>I will be sitting in on drums for a friend of mine, who will be one of three London, female musicians performing that night. She is a very talented musician, and I had the pleasure of performing with her at Trackside, on Canada Day, 2017.<br/>Each will play a set from 7-8pm, 8-9pm (which is the one I'm playing for) and 9-10pm.<br/>Tickets are $10 and $2 from each ticket will go towards the \"My Sister's Place\" charity.<br/>Hope to see a bunch of you out, for a fun night of music, dancing, and to support our local female music artists and a great charity!</p> <p>\u2022 What to bring</p> <p>\u2022 Important to know</p> ",
            "visibility":"public"
        }
    ]

};

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
