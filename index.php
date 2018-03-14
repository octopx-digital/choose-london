<?php
  require_once('includes/config.php');

  $sectionData = getSectionContent('home');
  if(!is_string($sectionData)) {
    $section = mysqli_fetch_array($sectionData);
    $categoriesData = getCategories($section['id']);
  }
  else {
    redirect_to('error.php');
  }
  $indexStories = getStories('home');
  $video = video();
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="apple-touch-icon" sizes="76x76" href="apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
  <link rel="manifest" href="site.webmanifest">
  <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5">
  <meta name="msapplication-TileColor" content="#da532c">
  <meta name="theme-color" content="#ffffff">
  <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
  <link rel="stylesheet" href="css/main.min.css">
  <title>Choose London | Main Page</title>
</head>
<body>
  <div id="container" class="home">
    <h1 class="hidden">Choose London Home Page</h1>
    <div id="main-banner">
      <!-- <img src="images/downtown_bus.jpg" alt="Downtown London"> -->
      <img class="media-change" src="images/<?php echo $section['photo']; ?>_large.jpg" alt="<?php echo $section['title']; ?>">
      <?php include('includes/partials/header.html'); ?>
    </div>
    <main>
      <section>
        <h2 class="hidden">Discover London</h2>
        <div id="section-icons">

        </div>
      </section>

      <section>
        <h2 class="hidden">Main Video</h2>
          <div id="ldn-banner"></div>

          <div id="video-wrapper">
            <!-- <div id="main-video"></div> -->
            <video id="video" poster="images/<?php echo $video['poster'];?>_medium.jpg">
              <source src="images/deadpool_2016.mp4"></source>
            </video>

              <div id="over-video">
                <div id="video-btn">
                  <i class="ion-play" aria-hidden="true"></i>
                </div>
              </div>

              <div id="video-controls">
                <div id="seek-bar">
                  <span></span>
                </div>
              <div id="button-wrapper" class="clearfix">
                  <div id="play-btn">
                    <i class="ion-play video-ctrl-bt" aria-hidden="true"></i>
                  </div>
                  <p id="video-time">0:00</p>
                  <div id="full-btn">
                    <i class="ion-arrow-expand video-ctrl-bt" aria-hidden="true"></i>
                  </div>
                  <div id="volume-bar">
                    <div id="volume-bg"></div>
                    <div id="volume-fg"></div>
                  </div>
                  <div id="volume-btn">
                    <i class="ion-android-volume-up video-ctrl-bt" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
          </div>

      </section>

      <section>
        <h2>London Events</h2>
        <div id="event-caroussel">
          <span class="nav-back  arrow"><i class="ion-ios-arrow-back" aria-hidden="true"></i></span>
            <div class="events-holder">


              <div id="events-container">

              </div>
            </div>
          <span class="nav-forward  arrow"><i class="ion-ios-arrow-forward" aria-hidden="true"></i></span>
        </div>
      </section>

      <section>
        <h2>Local Stories</h2>
        <div class="story-index">
        <?php if(!is_string($indexStories)) {
            foreach($indexStories as $story){  ?>

          <div class="story">
            <div class="story-wrapper">
            <div class="story-photo">
              <img src="images/<?php echo $story['photo']; ?>" alt="<?php echo $story['name']; ?>'s Story">
            </div>
            <div class="story-text">
              <div class="story-check">
                <p>Check out people's view on London's <?php echo $story['section'];?></p>
                <i class="ion-arrow-down-b"></i>
              </div>
              <div class="story-testimony">
                <p class="story-desc"><?php echo $story['message'];?></p>
                <p class="story-name"><?php echo $story['name'];?></p>
              </div>
            </div>
          </div>
          </div>

        <?php  }   }
              else {
                redirect_to('error.php');
              } ?>
        </div>
      </section>

      <section>
          <h2>London Job Board</h2>
          <div id="job-cont">
            <span class="arrow-back"><i class="ion-ios-arrow-back arrow" aria-hidden="true"></i></span>
              <div class="job-item">
                <div id="job-post">
                  <!-- Job Posts are appended here with JS -->
                </div>
              </div>
                <span class="arrow-forward"><i class="ion-ios-arrow-forward arrow" aria-hidden="true"></i></span>
          </div>
      </section>
        <?php echo "<div class=\"back-to-top\"><span class=\"tooltip\" title=\"Go to Top\"><i class=\"ion-arrow-up-c\"></i></span></div>"; ?>
    </main>

    <?php include('includes/partials/partners.html'); ?>

    <?php include('includes/partials/footer.html'); ?>
  </div>
  <script src="js/greensock-js/src/minified/TweenMax.min.js"></script>
  <?php include('includes/partials/scripts.html'); ?>

</body>
</html>
