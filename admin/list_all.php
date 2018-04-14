<?php
  require_once('../includes/config.php');

  $tbl = $_GET['tbl'];
  $order = $_GET['order'];
  $col = "id";

  $list = getAll($tbl, $order);
 ?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="../css/main.css">
  <title>Admin | List <?php echo $tbl ?>s</title>
</head>
<body>
  <header>
    <div class="admin-header">
      <nav>
        <h2 class="hidden">Main Navigation</h2>
        <ul>
          <li><a href="admin_index.php">Home</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Profiles</a></li>
          <li><a class="logout-button" href="../includes/caller.php?caller_id=logout">Logout</a></li>
        </ul>
      </nav>
      <img src="../images/logo_white.svg" alt="Choose London Logo">
  </div>
  </header>


  <section class="list-rows admin-container">

    <h1 class="list-title"><?php echo $tbl; ?></h1>
    <a class="list-new" href="admin_add_<?php echo $tbl; ?>.php">New</a>
    <ol class="list-items">
      <?php
        while($row = mysqli_fetch_array($list)) {
          if($tbl === "video") {
            echo "<li><p>{$row['title']}</p><a class=\"list-edit admin-button\" href=\"edit_all.php?tbl={$tbl}&id={$row['id']}\">Edit</a><a class=\"list-delete admin-button\" href=\"../includes/caller.php?caller_id=deleteRow&tbl={$tbl}&col=$col&id={$row['id']}\">Delete</a></li>";
          }
          else {
            echo "<li><p>{$row['name']}</p><a class=\"list-edit admin-button\" href=\"edit_all.php?tbl={$tbl}&id={$row['id']}\">Edit</a><a class=\"list-delete admin-button\" href=\"../includes/caller.php?caller_id=deleteRow&tbl={$tbl}&col=$col&id={$row['id']}\">Delete</a></li>";
          }
        }
       ?>
     </ol>
     <a class="back-index admin-button" href="admin_index.php">Go Back</a>

   </section>

</body>
</html>
