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
<header class="admin-header">
    <nav>
      <h2 class="hidden">Main Navigation</h2>
      <ul>
        <li><a href="admin_index.php">Home</a></li>
        <li><a class="logout-button" href="../includes/caller.php?caller_id=logout">Logout</a></li>
      </ul>
    </nav>
    <img src="../images/logo_white.svg" alt="Choose London Logo">
</header>
<body>
  <h1 class="hidden">Admin | Add Section</h1>
  <main id="container" class="create-cont admin-container">
    <section class="edit-row">
      <h1 class="title">Add Section</h1>
      <?php if (!empty($message)){
        echo "<p class=\"error-message\">".$message."</p>";
      } ?>
      <form action="admin_add_section.php" method="post" enctype="multipart/form-data"><br>

        <label for="name">Section Name:</label><br>
        <input type="text" name="name" value=""><br><br>

        <label for="title">Section Title:</label><br>
        <input type="text" name="title" value=""><br><br>

        <label for="description">Section Description:</label><br>
        <textarea name="description" rows="8"></textarea><br><br>

        <label for="photo">Section Header Photo (JPG file):</label><br>
        <input type="file" name="photo" value=""><br><br>

        <label for="icon">Section Icon (PNG file):</label><br>
        <input type="file" name="icon" value=""><br>

        <input class="button admin-button" type="submit" name="submit" value="Save Section"><br>
      </form>
      <a class="back-index admin-button" href="admin_index.php">Go Back</a><br><br><br><br>
    </section>
  </main>
</body>
</html>
