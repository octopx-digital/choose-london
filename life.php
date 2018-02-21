<?php
  require_once('includes/config.php');

  $sectionData = getSectionContent('life');
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
  <title>Choose London | Life</title>
</head>
<body>
  <div id="container" class="life">
    <div id="main-banner">
      <img src="images/downtown_bus.jpg" alt="Downtown London">
      <?php include('includes/partials/header.html'); ?>
    </div>

    <?php if (!empty($message)){
      echo "<p class=\"error-message\">".$message."</p>";
    } ?>

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

      <?php
        if(!is_string($categoriesData)) {
          while ($category = mysqli_fetch_assoc($categoriesData)) {
      ?>
        <?php echo "<button class=\"category-button\" type=\"button\" name=\"{$category['name']}\">{$category['title']}</button>" ?>
        <section id="<?php echo $category['name']; ?>" class="category">
          <div class="category-header">
            <div class="photo-wrapper">
              <img src="images/london2_002-5857.jpg" alt="Photo">
            </div>
            <h2 class="category-title"><?php echo $category['title']; ?></h2>
            <p class="category-short"><?php echo $category['short_desc']; ?></p>
          </div>
          <p class="category-desc"><?php echo $category['description']; ?></p>
          <?php
            $itemData = getItems($category['id']);
            if(!is_string($itemData)){
              while ($item = mysqli_fetch_assoc($itemData)) {
                if($item['description']) {
          ?>
                <section class="item">
                  <h3 class="item-title"><?php echo $item['title']; ?></h3>
                  <?php
                    if($item['description']) {
                      echo "<p class=\"item-desc\">{$item['description']}</p>";
                    }
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
                  <span class="faded-line"></span>
                </section>

          <?php
                }
                else {
          ?>
                <section class="item nocontent">
                  <h3><?php echo $item['title']; ?></h3>
                </section>
          <?php
                }
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
        else {
          redirect_to('error.php');
        }
      ?>
    </main>


    <?php include('includes/partials/footer.html'); ?>
  </div>

  <?php include('includes/partials/scripts.html'); ?>
</body>
</html>
