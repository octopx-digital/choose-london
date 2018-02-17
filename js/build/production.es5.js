'use strict';

function getJobs() {
  var posts = document.querySelector('#job-post');
  var data = fetchAPI.jobs;
  console.log(data);

  data.forEach(function (_ref) {
    var logo = _ref.logo,
        post = _ref.post,
        position = _ref.position;

    var newDiv = document.createElement('div');
    newDiv.classList.add('responsive');
    var newImg = document.createElement('img');
    var newPost = document.createElement('h1');
    var newPosition = document.createElement('p');
    var button = document.createElement('button');
    var anchor = document.createElement('a');
    anchor.innerHTML = "APPLY";
    button.appendChild(anchor);
    newImg.src = 'images/build/logo_' + logo;
    newPost.textContent = post;
    newPosition.textContent = position;
    newDiv.append(newImg, newPost, newPosition, button);
    posts.appendChild(newDiv);
  });
}

window.addEventListener('load', getJobs, false);
//# sourceMappingURL=production.es5.js.map
