

  function getJobs() {
    var posts = document.querySelector('#job-post');
    var data = fetchAPI.jobs;
    console.log(data);

    data.forEach(({logo, post, position}) => {
      let newDiv = document.createElement('div');
      newDiv.classList.add('responsive');
      let newImg = document.createElement('img');
      let newPost = document.createElement('h1');
      let newPosition = document.createElement('p');
      let button = document.createElement('button');
      let anchor = document.createElement('a');
      anchor.innerHTML = "APPLY";
      button.appendChild(anchor);
      newImg.src = 'images/build/logo_'+logo;
      newPost.textContent = post;
      newPosition.textContent = position;
      newDiv.append(newImg, newPost, newPosition, button);
      posts.appendChild(newDiv);
    });
  }

  window.addEventListener('load', getJobs, false);
