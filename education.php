<?php
  require_once('includes/config.php');

  $sectionData = getSectionContent('education');
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
  <link rel="apple-touch-icon" sizes="76x76" href="apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
  <link rel="manifest" href="site.webmanifest">
  <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5">
  <meta name="msapplication-TileColor" content="#da532c">
  <meta name="theme-color" content="#ffffff">
  <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
  <link rel="stylesheet" href="css/main.min.css">
  <title>Choose London | Education</title>
</head>
<body>
  <div id="container" class="education">
    <div id="main-banner">
      <img class="media-change" src="images/<?php echo $section['photo']; ?>_large.jpg" alt="<?php echo $section['title']; ?>">
      <?php include('includes/partials/header.html'); ?>
    </div>

    <?php if (!empty($message)){
      echo "<p class=\"error-message\">".$message."</p>";
    } ?>

    <main>
      <div>
        <div class="section-header">
          <?php
            if($section) {
              echo "<img class=\"section-icon\" src=\"images/{$section['icon']}.png\" alt=\"Education icon\">
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

      <div id="category-wrapper">
        <?php
          if(!is_string($categoriesData)) {
            while ($category = mysqli_fetch_assoc($categoriesData)) {
        ?>
            <?php
            echo "<div class=\"open-category {$category['name']}\">";
            echo "<div><img class=\"open-category-img media-change\" src=\"images/{$category['banner_photo']}_large.jpg\" alt=\"{$category['title']}\"></div>";

            $short = str_replace("<br>", "", $category['short_desc']);

            echo "<p class=\"open-category-desc\">{$short}</p>";
            echo "<button class=\"open-category-btn\" type=\"button\" name=\"{$category['name']}\">{$category['title']}</button>";
            ?>
          </div>

          <section id="<?php echo $category['name']; ?>" class="category">
            <div class="category-header">
              <div class="photo-wrapper">
                <img class="media-change" src="images/<?php echo $category['header_photo']; ?>_large.jpg" alt="<?php echo $category['title']; ?>">
              </div>
              <div class="category-info">
                <h2 class="category-title"><?php echo $category['title']; ?></h2>
                <p class="category-short"><?php echo $category['short_desc']; ?></p>
              </div>
            </div>
            <p class="category-desc"><?php echo $category['description']; ?></p>
            <?php
              $itemData = getItems($category['id']);
              if(!is_string($itemData)){
                while ($item = mysqli_fetch_assoc($itemData)) {
            ?>
            <section class="item clearfix">
              <h3 class="item-title"><?php echo $item['title']; ?></h3>
              <?php
                if($item['description']) {
                  echo "<p class=\"item-desc\">{$item['description']}</p>";
                }
                  echo "<img class=\"item-photo media-change\" src=\"images/{$item['photo']}_large.jpg\" alt=\"{$item['title']}\">";
              ?>
              <address>
              <?php
                if($item['address']) {
                  echo "<p class=\"item-address\">WHERE: {$item['address']}</p>";
                }
                if($item['phone']) {
                  echo "<p class=\"item-phone\">CONTACT: {$item['phone']}</p>";
                }
                if($item['hours']) {
                  echo "<p class=\"item-hours\">HOURS: {$item['hours']}</p>";
                }
                if($item['website']) {
                  echo "<a class=\"item-website\" href=\"{$item['website']}\">Go to website</a>";
                }
              ?>
              </address>
              <span class="faded-line"></span>
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

      <?php include('includes/partials/partners.html'); ?>
    </main>

    <?php include('includes/partials/footer.html'); ?>
  </div>

  <?php include('includes/partials/scripts.html'); ?>
</body>
</html>
