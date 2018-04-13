<?php
  require_once('../includes/config.php');

  if (isset($_POST['submit'])){
    $name = $_POST['name'];
    $title = $_POST['title'];
    $description = $_POST['description'];
    $photo = $_FILES['photo'];
    $icon = $_FILES['icon'];

    $result = addSection($name, $title, $description, $photo, $icon);

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
  <title>Admin | Add Section</title>
</head>
<body>
  <h1 class="hidden">Admin | Add Section</h1>
  <main id="container" class="create-cont">
    <section class="edit-row">
      <h1 class="title">Add Section</h1>
      <?php if (!empty($message)){
        echo "<p class=\"error-message\">".$message."</p>";
      } ?>
      <form action="admin_add_section.php" method="post" enctype="multipart/form-data">

        <label for="name">Section Name:</label>
        <input type="text" name="name" value="">

        <label for="title">Section Title:</label>
        <input type="text" name="title" value="">

        <label for="description">Section Description:</label>
        <textarea name="description" rows="8"></textarea>

        <label for="photo">Section Header Photo (JPG file):</label>
        <input type="file" name="photo" value="">

        <label for="icon">Section Icon (PNG file):</label>
        <input type="file" name="icon" value="">

        <input class="button" type="submit" name="submit" value="Save Section">
      </form>
      <a class="back-index" href="admin_index.php">Go Back</a>
    </section>
  </main>
</body>
</html>
