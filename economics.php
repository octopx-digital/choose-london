<?php
  require_once('includes/config.php');

  $sectionData = getSectionContent('economics');
  if(!is_string($sectionData)) {
    $section = mysqli_fetch_array($sectionData);
    $categoriesData = getCategories($section['id']);
  }
  else {
    redirect_to('error.php');
  }

 ?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
  <link rel="stylesheet" href="css/main.min.css">
  <title>Choose London | Economics</title>
</head>
<body>
  <div id="container" class="economics">
    <div id="main-banner">
      <img class="media-change" src="images/<?php echo $section['photo']; ?>_small.jpg" alt="<?php echo $section['title']; ?>">
      <?php include('includes/partials/header.html'); ?>
    </div>


    <main>
      <section>
        <div class="section-header">
          <?php
            if($section) {
              echo "<img class=\"section-icon\" src=\"images/{$section['icon']}.png\" alt=\"Some photo\">
                <h1 class=\"section-title\">{$section['title']}</h1>";
            }
            else {
              echo "<p>{$sectionData}</p>";
            }
           ?>
        </div>

        <div class="section-info">
          <?php
            if($section) {
              echo "<p class=\"section-desc\">{$section['description']}</p>";
            }
            else {
              echo "<p>{$sectionData}</p>";
            }
          ?>
        </div>
      </section>

      <div id="category-wrapper">
        <?php
          if(!is_string($categoriesData)) {
            while ($category = mysqli_fetch_assoc($categoriesData)) {
        ?>
          <?php echo "<button class=\"open-category-btn\" type=\"button\" name=\"{$category['name']}\">{$category['title']}</button>" ?>
          <section id="<?php echo $category['name']; ?>" class="category">
            <div class="category-header">
              <div class="photo-wrapper">
                <img src="images/london2_002-5857.jpg" alt="Photo">
              </div>
              <div class="category-info">
                <h2 class="category-title"><?php echo $category['title']; ?></h2>
                <p class="category-short"><?php echo $category['short_desc']; ?></p>
              </div>
            </div>
            <?php
              if($category['name'] === 'starting') {
                echo "<p>Quick tips from local employers</p>";
              }
              if($category['name'] === 'resources') {
                echo "<p>Job search resources</p>";
              }
              $itemData = getItems($category['id']);
              if(!is_string($itemData)){
                $count = 0;
                while ($item = mysqli_fetch_assoc($itemData)) {
                  $count++;
            ?>
                  <section class="item">
                    <p class="item-count"><?php echo $count; ?></p>
                    <h3 class="item-title"><?php echo $item['title']; ?></h3>
                  </section>
            <?php
                }
              echo "<button class=\"close-category-btn\" type=\"button\" name=\"{$category['name']}\"><i class=\"ion-android-close\"></i>Close section</button>";
              }
              else {
                redirect_to('error.php');
              }
            ?>
          </section>
        <?php
            }
          }
          else {
            redirect_to('error.php');
          }
        ?>
      </div>
      <section class="story">
        <h2 class="hidden">Story</h2>
        <div class="story-wrapper">
          <div class="story-photo">
            <img src="images/story-sarah.jpg" alt="Story person">
          </div>
          <div class="story-text">
            <div class="story-check">
              <p>Check out people's view on London economics</p>
              <i class="ion-arrow-down-b"></i>
            </div>
            <div class="story-testimony">
              <p class="story-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget nulla non enim iaculis ultrices. Quisque vel felis ac nisi vestibulum interdum. Vestibulum ullamcorper eleifend justo, a dictum nisl egestas nec.</p>
              <p class="story-name">Sarah</p>
            </div>
          </div>
        </div>
      </section>
      <?php echo "<div class=\"back-to-top\"><span class=\"tooltip\" title=\"Go to Top\"><i class=\"ion-arrow-up-c\"></i></span></div>"; ?>
    </main>


    <?php include('includes/partials/footer.html'); ?>
  </div>

  <?php include('includes/partials/scripts.html'); ?>
</body>
</html>
