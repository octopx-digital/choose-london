"use strict";

var fetchAPI = {
  jobs: [{
    logo: "startech.png",
    post: "Software Developer",
    position: "Full Time",
    date: "Posted Jan 5th"
  }, {
    logo: "vehikl.png",
    post: "Full Stack Web Developer",
    position: "Full Time",
    date: "Posted Feb 25th"
  }, {
    logo: "voices.png",
    post: "Systems Architect",
    position: "Full or Part Time",
    date: "Posted Jan 19th"
  }, {
    logo: "mccg.png",
    post: "Senior Developer",
    position: "Full or Part Time",
    date: "Posted Mar 14th"
  }, {
    logo: "carproof.png",
    post: "App Developer",
    position: "Part Time",
    date: "Posted Mar 22nd"
  }]

  // Functions to set and resize images

};var MIN = 320;
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

//set videos size (small, medium or large) on load
function setVideoSize() {
  for (var i = 0; i < this.length; i++) {
    this[i].poster = this[i].poster.replace('large', screensize);
    var vidsource = this[i].querySelectorAll('source');
    for (var j = 0; j < vidsource.length; j++) {
      vidsource[j].src = vidsource[j].src.replace('large', screensize);
    }
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
    var vid = document.querySelectorAll('.video-change');
    for (var _i = 0; _i < vid.length; _i++) {
      vid[_i].poster = vid[_i].poster.replace(curSize, screensize);
    }
    curSize = screensize;
  }
}

checkScreenSize.call(window.innerWidth);
setImageSize.call(document.querySelectorAll('.media-change'));
setVideoSize.call(document.querySelectorAll('.video-change'));
window.addEventListener('resize', checkScreenSize, false);
window.addEventListener('resize', changeImageSize, false);

var meetup = {
  "city": {
    "id": 624814,
    "city": "London",
    "lat": 43.01,
    "lon": -81.18,
    "state": "ON",
    "country": "ca",
    "zip": "N5V 0A1",
    "member_count": 1410
  },
  "events": [{
    "created": 1445266131000,
    "duration": 7200000,
    "id": "kqqpllyxfbdc",
    "name": "Front-End Development Meetup",
    "status": "upcoming",
    "time": 1521759600000,
    "local_date": "2018-mar-22",
    "local_time": "19:00",
    "updated": 1514081304000,
    "utc_offset": -14400000,
    "waitlist_count": 0,
    "yes_rsvp_count": 5,
    "venue": {
      "id": 24025637,
      "name": "Hacker Studios",
      "lat": 42.98481369018555,
      "lon": -81.24620819091797,
      "repinned": false,
      "address_1": "252 Dundas Street",
      "city": "London",
      "country": "ca",
      "localized_country_name": "Canada",
      "zip": "",
      "state": "ON"
    },
    "group": {
      "created": 1439235148000,
      "name": "London Front-end Development Meetup",
      "id": 18820217,
      "join_mode": "open",
      "lat": 42.97999954223633,
      "lon": -81.26000213623047,
      "urlname": "London-Front-end-Development-Meetup",
      "who": "Devs",
      "localized_location": "London, ON",
      "region": "en_US"
    },
    "link": "https://www.meetup.com/London-Front-end-Development-Meetup/events/246166695/",
    "visibility": "public"
  }, {
    "created": 1491966585000,
    "duration": 10800000,
    "fee": {
      "accepts": "cash",
      "amount": 10.0,
      "currency": "CAD",
      "description": "",
      "label": "Price",
      "required": false
    },
    "id": "239148427",
    "name": "World Usability Day - UX and UI",
    "status": "upcoming",
    "time": 1520548200000,
    "local_date": "2018-mar-08",
    "local_time": "17:30",
    "rsvp_open_offset": "PT18H",
    "updated": 1519259853000,
    "utc_offset": -18000000,
    "waitlist_count": 0,
    "yes_rsvp_count": 12,
    "venue": {
      "id": 25722974,
      "name": "The London Club",
      "lat": 0.0,
      "lon": 0.0,
      "repinned": false,
      "address_1": "177 Queens Ave.",
      "city": "London",
      "country": "ca",
      "localized_country_name": "Canada",
      "zip": "",
      "state": "ON"
    },
    "group": {
      "created": 1453208546000,
      "name": "Ladies that UX - London Ontario",
      "id": 19365592,
      "join_mode": "open",
      "lat": 42.939998626708984,
      "lon": -81.20999908447266,
      "urlname": "Ladies-that-UX-London-Ontario",
      "who": "LTUXers",
      "localized_location": "London, ON",
      "region": "en_US"
    },
    "link": "https://www.meetup.com/Ladies-that-UX-London-Ontario/events/239148427/",
    "description": "<p>**IMPORTANT INFORMATION! Please register for the event at the link below - not on meetup.com!**</p> <p><a href=\"https://www.wct-fct.com/en/civicrm/event/info?reset=1&id=285\" class=\"linkified\">https://www.wct-fct.com/en/civicrm/event/info?reset=1&id=285</a></p> <p>Press For Progress is a call to motivate and unite friends, colleagues, and whole communities to think, act, and be, gender inclusive. Because we know, equipped with the right resources, today's girls and women are our future leaders, entrepreneurs, and change-makers.</p> <p>On International Women's Day, join Ladies that UX London Ontario, in partnership with the Women in Communication and Technology, The London Club Speaker Series, for an evening celebrating the unity and harmony between women, the strength of our collective voices, and why we need to continue to Press for Progress.</p> <p>Sponsored by the London Economic Development Corporation, our prestigious line-up of speakers includes award-winning spoken word artist, Holly Painter, Kate Young, Member of Parliament for London West and Parliamentary Secretary to the Minister of Science, and StarTech.com (<a href=\"http://startech.com/\" class=\"linkified\">http://startech.com/</a>) President Lynn Smurthwaite-Murphy as our keynote speaker. These incredible women will share their stories and key learnings in and out of the boardroom.</p> <p>When: March 8, 2018 (5:30-8pm)<br/>Where: The London Club, 177 Queens Ave.<br/>Cost: $10.00</p> <p>All proceeds go to Anova (<a href=\"http://www.anovafuture.org/\" class=\"linkified\">http://www.anovafuture.org/</a>). Tickets include light refreshments and entry to our door prize draw. Cash bar will be available.</p> <p>Anova provides safe places, shelter, support, counselling, and resources for abused women, their children, and all oppressed individuals to find a new start.</p> <p>Reserve your spot: Click here (<a href=\"https://www.wct-fct.com/en/civicrm/event/info?reset=1&id=285\" class=\"linkified\">https://www.wct-fct.com/en/civicrm/event/info?reset=1&id=285</a>)</p> <p>#PressForProgress presents a great opportunity to make new connections with like-minded networking groups in the Forest City.</p> <p>Agenda<br/>Event Time 5:30 - 8:00pm<br/>Registration & Networking 5:30 - 6:00pm<br/>Speaker Event 6:00 - 7:00pm<br/>Post-Event Networking 7:15 - 8:00 pm</p> <p>Thank you to our sponsors:<br/>The London Economic Development Corporation and The London Club Speaker Series</p> ",
    "visibility": "public"
  }, {
    "created": 1512176675000,
    "duration": 10800000,
    "id": "245574300",
    "name": "Build a Child Theme in Wordpress",
    "rsvp_limit": 25,
    "status": "upcoming",
    "time": 1521586800000,
    "local_date": "2018-mar-20",
    "local_time": "19:00",
    "updated": 1519221871000,
    "utc_offset": -14400000,
    "waitlist_count": 0,
    "yes_rsvp_count": 9,
    "venue": {
      "id": 5024132,
      "name": "London Public Library (Landon Branch in Old South)",
      "lat": 42.972198486328125,
      "lon": -81.25288391113281,
      "repinned": false,
      "address_1": "167 Wortley Road",
      "city": "London",
      "country": "ca",
      "localized_country_name": "Canada",
      "zip": "",
      "state": "ON"
    },
    "group": {
      "created": 1414089216000,
      "name": "WordPress London Canada",
      "id": 17818122,
      "join_mode": "open",
      "lat": 43.02000045776367,
      "lon": -81.20999908447266,
      "urlname": "WordPress-London",
      "who": "WordPressers",
      "localized_location": "London, ON",
      "region": "en_US"
    },
    "link": "https://www.meetup.com/WordPress-London/events/245574300/",
    "description": "<p>When you need to make modifications to the theme you are using, child themes are the way to go. We will demonstrate how to do it. If you have a site you want to try this on you can follow along. No programming experience is needed, we will cover the basics.</p> ",
    "visibility": "public",
    "pro_is_email_shared": false
  }, {
    "created": 1518895582000,
    "duration": 10800000,
    "id": "247906863",
    "name": "Female Artists\u2019 Music Night at Cowboys!!",
    "status": "upcoming",
    "time": 1520121600000,
    "local_date": "2018-mar-03",
    "local_time": "19:00",
    "updated": 1518963287000,
    "utc_offset": -18000000,
    "waitlist_count": 0,
    "yes_rsvp_count": 15,
    "venue": {
      "id": 17886022,
      "name": "Cowboys Ranch",
      "lat": 42.983699798583984,
      "lon": -81.26339721679688,
      "repinned": false,
      "address_1": "60 Wharncliffe Rd North",
      "city": "London",
      "country": "ca",
      "localized_country_name": "Canada",
      "zip": "",
      "state": "ON"
    },
    "group": {
      "created": 1441820763000,
      "name": "London Random Activity Meetup Hosted by Infinite Activities",
      "id": 18915354,
      "join_mode": "open",
      "lat": 42.9900016784668,
      "lon": -81.27999877929688,
      "urlname": "Londonrandomactivitymeetup",
      "who": "Friends",
      "localized_location": "London, ON",
      "region": "en_US"
    },
    "link": "https://www.meetup.com/Londonrandomactivitymeetup/events/247906863/",
    "description": "<p>\u2022 What we'll do<br/>I will be sitting in on drums for a friend of mine, who will be one of three London, female musicians performing that night. She is a very talented musician, and I had the pleasure of performing with her at Trackside, on Canada Day, 2017.<br/>Each will play a set from 7-8pm, 8-9pm (which is the one I'm playing for) and 9-10pm.<br/>Tickets are $10 and $2 from each ticket will go towards the \"My Sister's Place\" charity.<br/>Hope to see a bunch of you out, for a fun night of music, dancing, and to support our local female music artists and a great charity!</p> <p>\u2022 What to bring</p> <p>\u2022 Important to know</p> ",
    "visibility": "public"
  }]

};

//Functions to control video
function videoCtrl() {
  var videosec = document.querySelector('#video-wrapper');
  var overvideo = videosec.querySelector('#over-video');
  var videobtn = overvideo.querySelector('#video-btn');
  // var videocontainer = videosec.querySelector('#main-video');
  var video = document.querySelector('#video');
  var videocontrol = videosec.querySelector("#video-controls");
  var videotime = videocontrol.querySelector('#video-time');
  var playbtn = videocontrol.querySelector('#play-btn');
  var seekbar = videocontrol.querySelector('#seek-bar');
  var progressbar = seekbar.querySelector('span');
  var volumebar = videocontrol.querySelector('#volume-bar');
  var volumebg = volumebar.querySelector('#volume-bg');
  var volumefg = volumebar.querySelector('#volume-fg');
  var volumebtn = videocontrol.querySelector('#volume-btn');
  var fullbtn = videocontrol.querySelector('#full-btn > .video-ctrl-bt');
  var videoduration;
  var prevvol = 0;
  var videoPlaying = false;
  video.volume = 0.8;

  var videoCtrlTl = new TimelineLite({
    paused: true
  });

  // function to play/pause video
  function togglePlayVideo() {
    var icon = playbtn.querySelector('.video-ctrl-bt');
    if (video.paused) {
      videoduration = convertSecondsToMinutes(video.duration);
      overvideo.style.backgroundColor = 'transparent';
      video.play();
      playToPauseBtn(icon);
      videobtn.style.display = 'none';
      addVideoListeners();
      outVideoControl();
      videoPlaying = true;
    } else {
      video.pause();
      pauseToPlayBtn(icon);
      videobtn.style.display = 'block';
      removeVideoListeners();
      videoCtrlTl.reverse();
      videoPlaying = false;
    }
  }

  // function to present video on full screen
  function fullScreenVideo() {
    console.log('full screen');
    var isFullScreen = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
    if (isFullScreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    }
  }

  // function to slide seek bar while video is playing
  function slideProgress() {
    var perc = video.currentTime / video.duration * 100;
    progressbar.style.width = perc.toString() + '%';
  }
  //Add video event listeners
  function addVideoListeners() {
    var isFullScreen = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
    video.addEventListener('timeupdate', updateVideoCurrentTime, false);
    video.addEventListener('timeupdate', slideProgress, false);
    video.addEventListener('ended', reloadVideo, false);
    videocontrol.addEventListener('mouseout', outVideoControl, false);
    videocontrol.addEventListener('mouseover', overVideoControl, false);
    if (!isFullScreen) {
      overvideo.addEventListener('mouseout', outVideoControl, false);
      overvideo.addEventListener('mouseover', overVideoControl, false);
    }
  }

  // move video and time regarding position clicked on seek bar
  function toggleSeekBar(evt) {
    var pos = evt.pageX;
    var voloffsets = seekbar.getBoundingClientRect();
    var volwidth = voloffsets.right - voloffsets.left;
    var perc = (pos - voloffsets.left) / volwidth;
    var time = video.duration * perc;
    video.currentTime = time;
    progressbar.style.width = (perc * 100).toString() + '%';
  }
  // remove event listeners of video and controls
  function removeVideoListeners() {
    video.removeEventListener('timeupdate', updateVideoCurrentTime, false);
    video.removeEventListener('ended', reloadVideo, false);
    overvideo.removeEventListener('mouseout', outVideoControl, false);
    overvideo.removeEventListener('mouseover', overVideoControl, false);
    videocontrol.removeEventListener('mouseout', outVideoControl, false);
    videocontrol.removeEventListener('mouseover', overVideoControl, false);
  }

  // update video running time on video control
  function updateVideoCurrentTime() {
    var curtime = convertSecondsToMinutes(video.currentTime);
    videotime.innerHTML = curtime + ' / ' + videoduration;
  }

  //convert time in seconds.miliseconds to minutes:seconds
  function convertSecondsToMinutes(rawtime) {
    var inttime = Math.floor(rawtime);
    var minutes = Math.floor(inttime / 60);
    var seconds = inttime - minutes * 60;
    var time = minutes.toString() + ':' + ('0' + seconds.toString()).slice(-2);
    return time;
  }

  // function to check if video control must be hidden when video is playing and cursor is not over the video
  // plays timeline to hide video control
  function outVideoControl() {
    videoCtrlTl.play();
  }

  // function to check if video control must be shown when video is playing and cursor is over the video
  // plays timeline in reverse to show video control
  function overVideoControl() {
    videoCtrlTl.reverse();
  }

  // timelines to hide video control when video is playing and mouse is not over the video
  function hideVideoControl() {
    videoCtrlTl.to(videocontrol, 1, { opacity: 0 });
  }

  // change Play button from play to pause icon
  function playToPauseBtn(el) {
    el.classList.remove('ion-play');
    el.classList.add('ion-pause');
  }

  // change Play button from pause to play icon
  function pauseToPlayBtn(el) {
    el.classList.remove('ion-pause');
    el.classList.add('ion-play');
  }

  // reload video to its initial state
  function reloadVideo() {
    var icon = playbtn.querySelector('.video-ctrl-bt');
    video.load();
    pauseToPlayBtn(icon);
    videobtn.style.display = 'block';
    videotime.innerHTML = '0:00 / ' + videoduration;
    removeVideoListeners();
    videoCtrlTl.reverse();
    videoPlaying = false;
    progressbar.style.width = null;
  }

  // change volume regarding position clicked on volume bar
  // also change position of colorful area of volume bar
  function volumeChange(evt) {
    console.log('volume change');
    var pos = evt.pageX;
    var voloffsets = volumefg.getBoundingClientRect();
    var volwidth = voloffsets.right - voloffsets.left;
    var perc = (pos - voloffsets.left) / volwidth;
    var value = volwidth * perc / 16;
    volumefg.style.clip = 'rect(0, ' + value + 'rem, ' + volwidth / 16 + 'rem, 0)';
    video.volume = perc.toFixed(1);
    volumeChangeBtn();
  }

  // sets 0% and 100% volume if clicked before or after volume bar area
  function volumeOut(evt) {
    var pos = evt.pageX;
    var voloffsets = volumefg.getBoundingClientRect();
    if (pos < voloffsets.left && pos > voloffsets.left - 8) {
      video.volume = 0;
    } else if (pos > voloffsets.right && pos < voloffsets.right + 8) {
      video.volume = 1;
    }
    volumeChangeBar();
    volumeChangeBtn();
  }

  // change volume bar position regarding video volume level
  function volumeChangeBar() {
    var voloffsets = volumefg.getBoundingClientRect();
    var volwidth = voloffsets.right - voloffsets.left;
    volumefg.style.clip = 'rect(0, ' + video.volume * volwidth / 16 + 'rem, ' + volwidth / 16 + 'rem, 0)';
  }

  // change volume button icon regarding video volume level
  function volumeChangeBtn() {
    console.log('volume');
    var icon = volumebtn.querySelector('.video-ctrl-bt');
    var curclass = void 0;
    for (var i = 0; i < icon.classList.length; i++) {
      if (icon.classList[i].match('ion-android-volume')) {
        curclass = icon.classList[i];
      }
    }
    icon.classList.remove(curclass);
    if (video.volume === 0) {
      icon.classList.add('ion-android-volume-off');
    } else if (video.volume > 0.5) {
      icon.classList.add('ion-android-volume-up');
    } else {
      icon.classList.add('ion-android-volume-down');
    }
  }

  // mute and unmute video volume
  function toggleMuteVolume() {
    if (video.volume > 0) {
      prevvol = video.volume;
      video.volume = 0;
    } else {
      video.volume = prevvol;
      prevvol = 0;
    }
    volumeChangeBar();
    volumeChangeBtn();
  }

  function checkFullscreen() {
    var isFullScreen = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
    if (isFullScreen) {
      console.log('is full screen');
      overvideo.style.zIndex = 2147483647;
      videocontrol.style.zIndex = 2147483648;
      fullbtn.classList.remove('ion-arrow-expand');
      fullbtn.classList.add('ion-arrow-shrink');

      overvideo.removeEventListener('mouseout', outVideoControl, false);
      overvideo.removeEventListener('mouseover', overVideoControl, false);
      if (video.currentTime > 0 && !video.paused && !video.ended) {
        outVideoControl();
      }
    } else {
      console.log('not full screen');
      overvideo.style.zIndex = null;
      videocontrol.style.zIndex = null;
      fullbtn.classList.remove('ion-arrow-shrink');
      fullbtn.classList.add('ion-arrow-expand');
      if (video.currentTime > 0 && !video.paused && !video.ended) {
        overvideo.addEventListener('mouseout', outVideoControl, false);
        overvideo.addEventListener('mouseover', overVideoControl, false);
      }
    }
  }

  window.addEventListener('load', hideVideoControl, false);
  video.addEventListener('click', togglePlayVideo, false);
  overvideo.addEventListener('click', togglePlayVideo, false);
  playbtn.addEventListener('click', togglePlayVideo, false);
  fullbtn.addEventListener('click', fullScreenVideo, false);
  seekbar.addEventListener('mousedown', toggleSeekBar, false);
  volumebg.addEventListener('mousedown', volumeChange, false);
  volumefg.addEventListener('mousedown', volumeChange, false);
  volumebar.addEventListener('mousedown', volumeOut, false);
  volumebtn.addEventListener('click', toggleMuteVolume, false);
  document.addEventListener('webkitfullscreenchange', checkFullscreen, false);
  document.addEventListener('mozfullscreenchange', checkFullscreen, false);
  document.addEventListener('fullscreenchange', checkFullscreen, false);
}

(function () {
  var header = document.querySelector('header');
  var hambMenu = header.querySelector('#hamburger-menu');
  // var storyArrow = document.querySelectorAll('.story-check > i');
  var storyDiv = document.querySelectorAll('.story');
  var topButton = document.querySelector('.back-to-top');
  var menuOpen = false;
  // var storyOpen = false;
  var sectorOpen = false;

  // add event handlers to Business Sectors section of Economics page
  function checkEconomicsPage() {
    if (this.classList.contains('economics')) {
      var sectorButton = document.querySelector('.sector-wrapper > .open');
      var sectorClose = document.querySelector('.sector-wrapper > .close');

      sectorButton.addEventListener('click', openBusinessSector, false);
      sectorClose.addEventListener('click', openBusinessSector, false);
    }
  }

  function checkResize() {
    storyArrow();
    if (document.querySelector('.home') !== null) {
      videoCall();
    }
  }

  function fetchData() {
    var url = 'includes/read.php?home';
    var container = document.querySelector('#section-icons');

    fetch(url).then(function (resp) {
      return resp.json();
    }).then(function (data) {
      data.forEach(function (item) {
        if (item.icon) {
          var icon = "<div class=\"section-icons\"><a href=\"" + item.name + ".php\"><img src=\"images/" + item.icon + ".png\" alt=" + item.title + "\"><h4>" + item.name + "</h4></a></div>";
          container.innerHTML += icon;
        }
      });
    }).catch(function (error) {
      console.log(error);
    });
  }

  function videoCall() {
    var video = 'includes/read.php?video';
    var ldnBanner = document.querySelector('#ldn-banner');
    var videoContainer = document.querySelector('#main-video');

    fetch(video).then(function (res) {
      return res.json();
    }).then(function (info) {
      info.forEach(function (entry) {
        var div = "<div class=\"video-header\">\n            <img src=\"images/" + entry.icon + ".svg\" alt=\"" + entry.title + "\">\n            <p>" + entry.description + "</p>\n            </div>";
        ldnBanner.innerHTML = div;
      });
    }).catch(function (error) {
      console.log(error);
    });
  }

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
      hambMenu.classList.remove('ion-android-close');
      hambMenu.classList.add('ion-android-menu');
      header.classList.remove('openmenu');
    }
  }

  function storyArrow() {
    if (screensize == 'small') {
      var storyDiv = document.querySelectorAll('.story');
      storyDiv.forEach(function (arrow) {
        arrow.addEventListener('click', showStory, false);
      });
    } else {
      var storyDiv = document.querySelectorAll('.story');
      storyDiv.forEach(function (arrow) {
        arrow.removeEventListener('click', showStory, false);
      });
    }
  }

  function showStory(el) {
    el = this;
    var storyArrow = this.querySelector('.story-check > i');
    if (el.classList.contains('open')) {
      el.classList.remove('open');
      storyArrow.classList.remove('ion-arrow-up-b');
      storyArrow.classList.add('ion-arrow-down-b');
    } else {
      el.classList.add('open');
      storyArrow.classList.remove('ion-arrow-down-b');
      storyArrow.classList.add('ion-arrow-up-b');
    }
  }

  function fixButton() {
    var footer = document.querySelector('footer').clientHeight;
    var height = window.scrollY;
    if (screensize != 'small') {
      if (height <= 50) {
        topButton.classList.remove('fadein');
        topButton.classList.remove('bottom');
      } else if (height > 50 && window.innerHeight + window.pageYOffset < document.body.offsetHeight - footer) {
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
    bodyarea.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
  }

  // open Business Sector section on Economics page for mobile
  function openBusinessSector(evt) {
    evt.preventDefault();
    var sectorDiv = document.querySelector('.sector-wrapper');
    var sectorArrow = document.querySelector('.sector-wrapper > .open > i');
    if (!sectorOpen) {
      sectorOpen = true;
      sectorDiv.classList.add('open');
      sectorArrow.classList.remove('ion-arrow-down-b');
      sectorArrow.classList.add('ion-arrow-up-b');
    } else {
      sectorOpen = false;
      sectorDiv.classList.remove('open');
      sectorArrow.classList.remove('ion-arrow-up-b');
      sectorArrow.classList.add('ion-arrow-down-b');
    }
  }

  function getJobs() {
    var posts = document.querySelector('#job-post');
    var data = fetchAPI.jobs;

    data.forEach(function (_ref) {
      var logo = _ref.logo,
          post = _ref.post,
          position = _ref.position,
          date = _ref.date;

      var newDiv = "<div class=\"space-between\"><div class=\"posts\">\n      <div class=\"job-title\"><h3>" + post + "</h3></div>\n      <div class=\"content\">\n      <img src=\"images/logo_" + logo + "\">\n      <p>" + position + "</p>\n      <p>" + date + "</p>\n      <a href=\"#\">APPLY</a>\n      </div>\n      </div></div>";
      posts.innerHTML += newDiv;
    });

    arrows();
  }

  function arrows() {
    var leftArrow = document.querySelector('.arrow-back');
    var rightArrow = document.querySelector('.arrow-forward');
    var posts = document.querySelector('#job-post');
    var thumbs = posts.children.length;
    var thumbcount = posts.querySelectorAll('.space-between');
    var thumb = thumbcount[0].offsetWidth;
    var thumbWidth = posts.offsetWidth;
    var leftPosition = 0;
    posts.style.left = leftPosition + "px";

    leftArrow.addEventListener('click', moveBack, false);
    rightArrow.addEventListener('click', moveForward, false);

    var moveSlide = function moveSlide(value) {
      leftPosition += value * thumb;
      posts.style.left = leftPosition + 'px';
    };
    function moveBack() {
      if (leftPosition !== 0) {
        moveSlide(1);
      } else if (leftPosition === 0) {
        posts.style.left = leftPosition + 'px';
      } else {
        leftPosition = (thumbs - 1) * -thumbWidth;
        posts.style.left = leftPosition + 'px';
      }
    }

    function moveForward() {
      if (leftPosition > (thumbs - 1) * -thumb) {
        moveSlide(-1);
      } else {
        leftPosition = 0;
        posts.style.left = leftPosition + 'px';
      }
    }
  }

  function getEvents() {
    var container = document.querySelector('#events-container');
    var events = meetup.events;

    events.forEach(function (_ref2) {
      var id = _ref2.id,
          name = _ref2.name,
          venue = _ref2.venue,
          local_date = _ref2.local_date,
          local_time = _ref2.local_time,
          link = _ref2.link;

      var address = venue.address_1;
      var month = local_date.slice(5, 8);
      var date = local_date.slice(9, 11);

      var image = 'images/' + id + '.jpg';
      var newEvent = "<div class=\"events\">\n      <div class=\"event-data\">\n      <div class=\"date\"><h5>" + month + "</br>" + date + "</h5></div>\n      <img src=\"" + image + ("\">\n      <h2>" + name + "</h2>\n      <p>") + address + ("</br>\n      At " + local_time + "</p>\n      <a href=\"" + link + "\"><p>Event Details</p><div><span class=\"share-btn\"><i class=\"ion-android-share-alt\"></i></span></div></a>\n      </div>\n      </div>");

      container.innerHTML += newEvent;
    });
    eventArrows();
  }

  function eventArrows() {
    var toLeft = document.querySelector('.nav-back');
    var toRight = document.querySelector('.nav-forward');
    var events = document.querySelector('#events-container');
    var thumbs = events.children.length;
    var thumbcount = events.querySelectorAll('.events');
    var thumb = thumbcount[0].offsetWidth;
    var thumbWidth = events.offsetWidth;
    var leftPosition = 0;
    events.style.left = leftPosition + "px";

    toLeft.addEventListener('click', moveBack, false);
    toRight.addEventListener('click', moveForward, false);

    var moveSlide = function moveSlide(value) {
      leftPosition += value * thumb;
      events.style.left = leftPosition + 'px';
    };
    function moveBack() {
      if (leftPosition !== 0) {
        moveSlide(1);
      } else if (leftPosition === 0) {
        events.style.left = leftPosition + 'px';
      } else {
        leftPosition = (thumbs - 1) * -thumbWidth;
        events.style.left = leftPosition + 'px';
      }
    }

    function moveForward() {
      if (leftPosition > (thumbs - 1) * -thumb) {
        moveSlide(-1);
      } else {
        leftPosition = 0;
        events.style.left = leftPosition + 'px';
      }
    }
  }

  window.addEventListener('resize', checkResize, false);
  window.addEventListener('scroll', checkScrollMenu, false);
  // window.addEventListener('load', openMenu, false);
  hambMenu.addEventListener('click', menuAnimation, false);
  checkEconomicsPage.call(document.querySelector('#container'));
  // window.addEventListener('load', getJobs, false);
  window.addEventListener('scroll', fixButton);
  window.addEventListener('mousemove', fixButton);
  topButton.addEventListener('click', topPage, false);

  //If it's on the homepage, run those functions
  if (document.querySelector('.home') !== null) {
    videoCall.call();
    fetchData.call();
    getEvents.call();
    getJobs.call();
    window.addEventListener('load', videoCtrl, false);
  }
})();
//# sourceMappingURL=production.es5.js.map
