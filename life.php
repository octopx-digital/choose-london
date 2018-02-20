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
      <div class="section-title">
        <?php
          if($section) {
            echo "<img src=\"images/{$section['icon']}_small.png\" alt=\"Some photo\">
              <h1>{$section['title']}</h1>";
          }
          else {
            echo "<p>{$sectionData}</p>";
          }
         ?>
      </div>

      <section class="main-content">
        <?php
          if($section) {
            echo "<p>{$section['description']}</p>";
          }
          else {
            echo "<p>{$sectionData}</p>";
          }
        ?>
      </section>

      <?php
        if(!is_string($categoriesData)) {
          while ($category = mysqli_fetch_assoc($categoriesData)) {
      ?>
        <section class="category">
          <?php echo "<button type=\"button\" name=\"{$category['title']}\">{$category['title']}</button>" ?>
          <h2><?php echo $category['title'] ?></h2>
          <p><?php echo $category['short_desc'] ?></p>
          <p><?php echo $category['description'] ?></p>
          <?php
            $itemData = getItems($category['id']);
            if(!is_string($itemData)){
              while ($item = mysqli_fetch_assoc($itemData)) {
                if($item['description']) {
          ?>
                <section class="item">
                  <h3><?php echo $item['title']; ?></h3>
                  <p><?php echo $item['description']; ?></p>
                  <p>WHERE: <?php echo $item['address']; ?></p>
                  <p>CONTACT: <?php echo $item['phone']; ?></p>
                  <p>HOURS: <time><?php echo $item['hours']; ?></time></p>
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


      <section id="parks">

      </section>
    </main>


    <?php include('includes/partials/footer.html'); ?>
  </div>


</body>
</html>
