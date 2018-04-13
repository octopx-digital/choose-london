<?php
  require_once('../includes/config.php');

  $sectionQuery = getAll('section', 'name');

  if (isset($_POST['submit'])){
    $name = $_POST['name'];
    $title = $_POST['title'];
    $description = $_POST['description'];
    $short_desc = $_POST['short_desc'];
    $banner_photo = $_FILES['banner_photo'];
    $header_photo = $_FILES['header_photo'];
    $section = $_POST['section'];
    $position = $_POST['position'];

    $categoryId = addCategory($name, $title, $description, $short_desc, $banner_photo, $header_photo);
    // var_dump($categoryId); die;

    // echo $result;
    // if(!empty($genres)) {
    //   foreach($genres as $row) {
    //     $result = addLinkRow("movie_genre", "movie_id", "genre_id", $movieId, $row);
    //   }
    // }

    if(!empty($section)) {
      $result = addLinkRow("section_category", "section_id", "category_id", $section, $categoryId, $position);
    }

    redirect_to("admin_index.php");
  }
 ?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="../css/main.css">
  <title>Admin | Add Category</title>
</head>
<body>
  <h1 class="hidden">Admin | Add Category</h1>
  <main id="container" class="create-cont">
    <section class="edit-row">
      <h1 class="title">Add Category</h1>
      <?php if (!empty($message)){
        echo "<p class=\"error-message\">".$message."</p>";
      } ?>
      <form action="admin_add_category.php" method="post" enctype="multipart/form-data">

        <label for="name">Category Name:</label>
        <input type="text" name="name" value="" required>

        <label for="title">Category Title:</label>
        <input type="text" name="title" value="">

        <label for="description">Category Description:</label>
        <textarea name="description" rows="8"></textarea>

        <label for="short_desc">Category Short Description:</label>
        <input type="text" name="short_desc" value="">

        <label for="banner_photo">Category Banner Photo (JPG file):</label>
        <input type="file" name="banner_photo" value="">

        <label for="header_photo">Category Header Photo (JPG file):</label>
        <input type="file" name="header_photo" value="">

        <label for="section">Category Section:</label>
        <select name="section" required>
          <option value="" selected>Choose an Option:</option>
          <?php
            while($option = mysqli_fetch_array($sectionQuery)) {
              echo "<option value=\"{$option['id']}\">{$option['title']}</option>";
            }
           ?>
        </select>

        <label for="position">Category Section Position:</label>
        <input type="text" name="position" value="" required>

        <input class="button" type="submit" name="submit" value="Save Category">
      </form>
      <a class="back-index" href="admin_index.php">Go Back</a>
    </section>
  </main>
</body>
</html>
