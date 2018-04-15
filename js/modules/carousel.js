
function eventArrows(){
  let toLeft = document.querySelector('.nav-back');
  let toRight = document.querySelector('.nav-forward');
  let events = document.querySelector('#events-container');
  let thumbs = events.children.length;
  let thumbcount = events.querySelectorAll('.events');
  let thumb = thumbcount[0].offsetWidth;
  let thumbWidth = events.offsetWidth;
  var holder = document.querySelector('.events-holder').getBoundingClientRect().right;
  let leftPosition = 0;

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
    let rightPos = events.getBoundingClientRect().right;
    //If it's not mobile
    if (window.innerWidth > 640){
      //Check if the right position are proximate enough
      var diff = ( rightPos - holder );
      //If difference is smaller than 5, return container at position 0
      if( diff < 5 ) {
          leftPosition = 0;
          events.style.left = '0px';
      } else {
        if (leftPosition > (thumbs-1) * -thumb) {
          moveSlide(-1);
        } else {
          leftPosition = 0;
          events.style.left = leftPosition + 'px';
        }
      }
    }
    else{
      if (leftPosition > (thumbs-1) * -thumb) {
        moveSlide(-1);
      } else {
        leftPosition = 0;
        events.style.left = leftPosition + 'px';
      }
    }
  }

  toLeft.addEventListener('click', moveBack, false);
  toRight.addEventListener('click', moveForward, false);
}



  function jobArrows(){
    let leftArrow = document.querySelector('.arrow-back');
    let rightArrow = document.querySelector('.arrow-forward');
    let cont = document.querySelector('#job-post');
    let thumbs = cont.children.length;
    let thumbcount = cont.querySelectorAll('.space-between');
    let thumb = thumbcount[0].offsetWidth;
    let thumbWidth = cont.offsetWidth;
    var holder = document.querySelector('#job-cont').getBoundingClientRect().right;
    let leftPosition = 0;
    cont.style.left = leftPosition+"px";


    let moveSlide = function (value) {
        leftPosition += value * thumb;
        cont.style.left = leftPosition + 'px';
    };

    function moveBack(){
      if(leftPosition !== 0) {
        moveSlide(1);
      } else if (leftPosition === 0) {
          cont.style.left = leftPosition + 'px';
        } else {
        leftPosition = (thumbs-1)* -thumbWidth;
        cont.style.left = leftPosition + 'px';
      }
    }

    function moveForward(){
      let rightPos = cont.getBoundingClientRect().right;
      //If it's not mobile
      if (window.innerWidth > 640){
        //Check if the right position are proximate enough
        var diff = ( rightPos - holder );
        //If difference is smaller than 5, return container at position 0
        if( diff < 5 ) {
            leftPosition = 0;
            cont.style.left = '0px';
        } else {
          if (leftPosition > (thumbs-1) * -thumb) {
            moveSlide(-1);
          } else {
            leftPosition = 0;
            cont.style.left = leftPosition + 'px';
          }
        }
      }
      else{
        if (leftPosition > (thumbs-1) * -thumb) {
          moveSlide(-1);
        } else {
          leftPosition = 0;
          cont.style.left = leftPosition + 'px';
        }
      }
    }

    leftArrow.addEventListener('click', moveBack, false);
    rightArrow.addEventListener('click', moveForward, false);
  }
