<?php
  require_once('../includes/config.php');

  $categoryQuery = getAll('category', 'name');

  if (isset($_POST['submit'])){
    $name = $_POST['name'];
    $title = $_POST['title'];
    $description = $_POST['description'];
    $address = $_POST['address'];
    $phone = $_POST['phone'];
    $hours = $_POST['hours'];
    $website = $_POST['website'];
    $photo = $_FILES['photo'];
    $category = $_POST['category'];
    $position = $_POST['position'];

    $itemId = addItem($name, $title, $description, $address, $phone, $hours, $website, $photo);

    if(!empty($category)) {
      $result = addLinkRow("category_item", "category_id", "item_id", $category, $itemId, $position);
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
  <title>Admin | Add Item</title>
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
  <h1 class="hidden">Admin | Add Item</h1>
  <main id="container" class="create-cont admin-container">
    <section class="edit-row">
      <h1 class="title">Add Item</h1>
      <?php if (!empty($message)){
        echo "<p class=\"error-message\">".$message."</p>";
      } ?>
      <form action="admin_add_item.php" method="post" enctype="multipart/form-data">

        <label for="name">Item Name:</label>
        <input type="text" name="name" value="" required>

        <label for="title">Item Title:</label>
        <input type="text" name="title" value="">

        <label for="description">Item Description:</label>
        <textarea name="description" rows="8"></textarea>

        <label for="address">Item Address:</label>
        <input type="text" name="address" value="">

        <label for="phone">Item Phone:</label>
        <input type="text" name="phone" value="">

        <label for="hours">Item Hours:</label>
        <input type="text" name="hours" value="">

        <label for="website">Item Website:</label>
        <input type="text" name="website" value="">

        <label for="photo">Item Photo (JPG file):</label>
        <input type="file" name="photo" value="">

        <label for="category">Item Category:</label>
        <select name="category" required>
          <option value="" selected>Choose an Option:</option>
          <?php
            while($option = mysqli_fetch_array($categoryQuery)) {
              echo "<option value=\"{$option['id']}\">{$option['title']}</option>";
            }
           ?>
        </select>

        <label for="position">Item Category Position:</label>
        <input type="text" name="position" value="" required>

        <input class="button admin-button" type="submit" name="submit" value="Save Item">
      </form>
      <a class="back-index admin-button" href="admin_index.php">Go Back</a><br><br><br><br>
    </section>
  </main>
</body>
</html>
