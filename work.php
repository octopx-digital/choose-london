<?php
  require_once('includes/config.php');

  $sectionData = getSectionContent('work');
  if(!is_string($sectionData)) {
    $section = mysqli_fetch_array($sectionData);
    $categoriesData = getCategories($section['id']);
  }
  else {
    redirect_to('error.php');
  }
  $indexStories = getStories('work');
  if(!is_string($indexStories)) {
    $story = mysqli_fetch_array($indexStories);
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
  <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.13.0/d3.min.js"></script>
  <link rel="stylesheet" href="css/main.min.css">
  <title>Choose London | Work</title>
</head>
<body>
  <div id="container" class="work">
    <div id="main-banner">
      <img class="media-change" src="images/<?php echo $section['photo']; ?>_large.jpg" alt="<?php echo $section['title']; ?>">
      <?php include('includes/partials/header.html'); ?>
    </div>


    <main>
      <div>
        <div class="section-header">
          <?php
            if($section) {
              echo "<img class=\"section-icon\" src=\"images/{$section['icon']}.png\" alt=\"Work icon\">
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
          $counter = 0;
          if(!is_string($categoriesData)) {
            while ($category = mysqli_fetch_assoc($categoriesData)) {
              $counter++;
        ?>
            <?php
            echo "<div data-id=\"{$counter}\" class=\"open-category work {$category['name']}\">";
            echo "<div class=\"open-category-btn\"><div><img class=\"open-category-img\" src=\"images/{$category['banner_photo']}.svg\" alt=\"{$category['title']}\"><p>{$category['title']}</p></div></div>";

            $short = str_replace("<br>", "", $category['description']);

            echo "<p class=\"open-category-desc\">{$short}</p>";
            echo "<button class=\"open-category-click\">Click here</button>"
            ?>
          </div>
          <section id="<?php echo $category['name']; ?>" data-id="<?php echo $counter; ?>" class="category">
            <div class="category-header">
              <div class="photo-wrapper">
                <img class="media-change" src="images/<?php echo $category['header_photo']; ?>_large.jpg" alt="<?php echo $category['title']; ?>">
              </div>
              <div class="category-info">
                <h2 class="category-title"><?php echo $category['title']; ?></h2>
                <p class="category-short"><?php echo $category['short_desc']; ?></p>
              </div>
            </div>
            <?php
              if($category['name'] === 'starting') {
                echo "<p class=\"category-preitem\">Quick tips from local employers</p>";
              }
              if($category['name'] === 'resources') {
                echo "<p class=\"category-preitem\">Job search resources</p>";
              }
              $itemData = getItems($category['id']);
              if(!is_string($itemData)){
                $count = 0;
                while ($item = mysqli_fetch_assoc($itemData)) {
                  $count++;
            ?>
                  <section class="item clearfix">
                    <li class="item-count"><p><?php echo $count; ?></p></li>
                    <h3 class="item-title"><?php echo $item['title']; ?></h3>
                    <p class="item-desc"><?php echo $item['description']; ?></p>
                    <?php
                      $itemIcons = getItemIcons($item['id']);
                      if(!is_string($itemIcons)){
                        if($item['name'] === 'get_involved') {
                          echo "<div class=\"icon-wrapper-4 {$item['name']}\">";
                          while ($icon = mysqli_fetch_assoc($itemIcons)) {
                            echo "<div class=\"icon icon-1\"><a href=\"{$icon['longfield']}\" title=\"{$icon['title']}\" target=\"_blank\"><img src=\"images/{$icon['photo']}.png\" alt=\"{$icon['alt']}\"></a></div>";
                          }
                        }
                        else {
                          echo "<div class=\"icon-wrapper-3-2 {$item['name']}\">";
                          while ($icon = mysqli_fetch_assoc($itemIcons)) {
                            echo "<div class=\"icon icon-1-1-2\"><p class=\"icon-title\">{$icon['title']}</p><p class=\"icon-desc\">{$icon['description']}</p></div>";
                          }
                        }
                        echo "</div>";

                      }
                      if($item['name'] === 'employment_rates'){
                        echo "<div id=\"chart\">
                        <h2>Employment in London Economic Region</h2><svg></svg></div>";
                      }
                      if($item['name'] === 'hot_positions'){
                        echo "<div class=\"item-links one\">";
                        echo "<a href=\"Current_Opportunities_April_4.pdf\">Who's hiring now</a>";
                        echo "</div>";
                      }
                      if($item['name'] === 'looking_job') {
                        echo "<div class=\"item-links\">";
                        echo "<a href=\"https://www.indeed.ca\" target=\"_blank\">Indeed</a>";
                        echo "<a href=\"https://www.workopolis.com\" target=\"_blank\">Workopolis</a>";
                        echo "<a href=\"https://www.monster.ca\" target=\"_blank\">Monster</a>";
                        echo "<a href=\"https://www.jobbank.gc.ca\" target=\"_blank\">Canada Job Bank</a>";
                        echo "<a href=\"https://www.knighthunter.com\" target=\"_blank\">Knight Hunter</a>";
                        echo "<a href=\"https://allstarjobs.ca\" target=\"_blank\">All Star Jobs</a>";
                        echo "</div>";
                      }
                      if($item['name'] === 'extra_help') {
                        echo "<div class=\"item-links\">";
                        echo "<a href=\"http://www.immploy.ca\" target=\"_blank\">Immploy</a>";
                        echo "<a href=\"http://www.wil.ca\" target=\"_blank\">WIL</a>";
                        echo "<a href=\"https://www.canada.ca/en/services/youth.html\" target=\"_blank\">Canada Youth</a>";
                        echo "<a href=\"https://www.jobbank.gc.ca\" target=\"_blank\">Canada Job Bank</a>";
                        echo "<a href=\"http://www.peopleready.com\" target=\"_blank\">PeopleReady</a>";
                        echo "</div>";
                      }
                     ?>
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
      </section>
      <?php echo "<div class=\"back-to-top\"><span class=\"tooltip\" title=\"Go to Top\"><i class=\"ion-arrow-up-c\"></i></span></div>"; ?>

      <?php include('includes/partials/partners.html'); ?>
    </main>

    <?php include('includes/partials/footer.html'); ?>
  </div>
  <?php include('includes/partials/scripts.html'); ?>
  <?php echo "<script src=\"js/chart_data.js\"></script>"; ?>
</body>
</html>
