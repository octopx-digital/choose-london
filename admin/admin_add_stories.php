<?php
  require_once('../includes/config.php');

  if (isset($_POST['submit'])){
    $name = $_POST['name'];
    $message = $_POST['message'];
    $photo = $_FILES['photo'];
    $section = $_POST['section'];

    $result = addStory($name, $message, $photo, $section);

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
  <title>Admin | Add Stories</title>
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
  <h1 class="hidden">Admin | Add Stories</h1>
  <main id="container" class="create-cont admin-container">
    <section class="edit-row">
      <h1 class="title">Add Stories</h1>
      <?php if (!empty($message)){
        echo "<p class=\"error-message\">".$message."</p>";
      } ?>
      <form action="admin_add_stories.php" method="post" enctype="multipart/form-data">

        <label for="name">Story Name:</label>
        <input type="text" name="name" value="">

        <label for="message">Story Message:</label>
        <textarea name="message" rows="8"></textarea>

        <label for="photo">Story Person Photo (JPG file):</label>
        <input type="file" name="photo" value="">

        <label for="section">Story Section:</label>
        <input type="text" name="section" value="">

        <input class="button admin-button" type="submit" name="submit" value="Save Story">
      </form>
      <a class="back-index admin-button" href="admin_index.php">Go Back</a><br><br><br><br>
    </section>
  </main>
</body>
</html>
