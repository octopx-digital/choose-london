<?php
  require_once('includes/config.php');

  $sectionData = getSectionContent('economics');
  if(!is_string($sectionData)) {
    $section = mysqli_fetch_array($sectionData);
    $categoriesData = getCategories($section['id']);
    if(!is_string($categoriesData)) {
      $categories = array();
      while ($category = mysqli_fetch_assoc($categoriesData)) {
        $categories[] = $category;
      }
    }
    else {
      redirect_to('error.php');
    }
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
  <link rel="apple-touch-icon" sizes="76x76" href="apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
  <link rel="manifest" href="site.webmanifest">
  <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5">
  <meta name="msapplication-TileColor" content="#da532c">
  <meta name="theme-color" content="#ffffff">
  <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
  <link rel="stylesheet" href="css/main.min.css">
  <title>Choose London | Economics</title>
</head>
<body>
  <div id="container" class="economics">
    <div id="main-banner">
      <img class="media-change" src="images/<?php echo $section['photo']; ?>_large.jpg" alt="<?php echo $section['title']; ?>">
      <?php include('includes/partials/header.html'); ?>
    </div>


    <main>
      <div>
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
      </div>

      <section id="<?php echo $categories[0]['name']; ?>" class="pre-category">
        <h2 class="pre-title"><?php echo $categories[0]['title']; ?></h2>
        <?php
          $itemData = getItems($categories[0]['id']);
          if(!is_string($itemData)){
            while ($item = mysqli_fetch_assoc($itemData)) {
              echo "<div id=\"{$item['name']}\" class=\"sector\">";
              $titleBreak = str_replace(" ", " <br>", $item['title']);
              echo "<div class=\"sector-btn\"><div><img class=\"sector-img\" src=\"images/{$item['photo']}.svg\" alt=\"{$item['title']}\"><p>$titleBreak</p></div></div>";
              echo "<p class=\"sector-desc\">{$item['description']}</p>";
              echo "</div>";
            }
          }
          else {
            redirect_to('error.php');
          }
        ?>
      </section>

      <section id="<?php echo $categories[1]['name']; ?>" class="pre-category">
        <h2 class="pre-title"><?php echo $categories[1]['title']; ?></h2>
        <?php
          $itemData = getItems($categories[1]['id']);
          if(!is_string($itemData)){
            while ($item = mysqli_fetch_assoc($itemData)) {
              echo "<div id=\"{$item['name']}\" class=\"reason\">";
              echo "<img class=\"reason-img\" src=\"images/{$item['photo']}.svg\" alt=\"{$item['title']}\">";
              echo "<p class=\"reason-desc\">{$item['description']}</p>";
              echo "</div>";
            }
          }
          else {
            redirect_to('error.php');
          }
        ?>
      </section>

      <div id="category-wrapper">
        <?php

          for($i = 2; $i < 5; $i++) {
        ?>
        <?php
          echo "<div class=\"open-category {$categories[$i]['name']}\">";
          echo "<button class=\"open-category-btn\" type=\"button\" name=\"{$categories[$i]['name']}\">{$categories[$i]['title']}</button>";
          echo "</div>";
        ?>
        <section id="<?php echo $categories[$i]['name']; ?>" class="category">
          <div class="category-header">
            <div class="photo-wrapper">
              <img class="media-change" src="images/<?php echo $categories[$i]['header_photo']; ?>_large.jpg" alt="<?php echo $categories['title']; ?>">
            </div>
            <div class="category-info">
              <h2 class="category-title"><?php echo $categories[$i]['title']; ?></h2>
              <?php
                $short = str_replace("<br>", "", $categories[$i]['short_desc']);
                echo "<p class=\"category-short\">{$short}</p>";
              ?>
            </div>
          </div>
          <?php
            if($categories[$i]['name'] === 'main_companies') {
              $itemData = getItems($categories[$i]['id']);
              if(!is_string($itemData)){
                echo "<div class=\"companies-wrapper\">";
                while ($item = mysqli_fetch_assoc($itemData)) {
          ?>
                <div class="item clearfix companies">
                  <a href="<?php echo $item['website']; ?>" title="<?php echo $item['title']; ?>"><img src="images/<?php echo $item['photo']; ?>.png" alt="<?php echo $item['name']; ?>"></a>
                </div>
          <?php
                }
                echo "</div>";
                echo "<button class=\"close-category-btn\" type=\"button\" name=\"{$categories[$i]['name']}\"><i class=\"ion-android-close\"></i>Close section</button>";
              }
              else {
                redirect_to('error.php');
              }
            }
            else {
              $itemData = getItems($categories[$i]['id']);
              if(!is_string($itemData)){
                while ($item = mysqli_fetch_assoc($itemData)) {
            ?>
                  <div class="item clearfix">
                    <a href="<?php echo $item['website']; ?>"><img src="images/<?php echo $item['photo']; ?>.png" alt="<?php echo $item['name']; ?>"></a>
                  </div>
            <?php
                }
              }
              else {
                redirect_to('error.php');
              }
          ?>
        </section>
      <?php
          }
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

      <?php include('includes/partials/partners.html'); ?>
    </main>

    <?php include('includes/partials/footer.html'); ?>
  </div>

  <?php include('includes/partials/scripts.html'); ?>
</body>
</html>
