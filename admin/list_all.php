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
  <h1 class="list-title"><?php echo $tbl; ?></h1>

  <section class="list-rows">
    <a class="list-new" href="admin_add_<?php echo $tbl; ?>.php">New</a>
    <ol>
      <?php
        while($row = mysqli_fetch_array($list)) {
          if($tbl === "video") {
            echo "<li><p>{$row['title']}</p><a class=\"list-edit\" href=\"edit_all.php?tbl={$tbl}&id={$row['id']}\">Edit</a><a class=\"list-delete\" href=\"../includes/caller.php?caller_id=deleteRow&tbl={$tbl}&col=$col&id={$row['id']}\">Delete</a></li>";
          }
          else {
            echo "<li><p>{$row['name']}</p><a class=\"list-edit\" href=\"edit_all.php?tbl={$tbl}&id={$row['id']}\">Edit</a><a class=\"list-delete\" href=\"../includes/caller.php?caller_id=deleteRow&tbl={$tbl}&col=$col&id={$row['id']}\">Delete</a></li>";
          }
        }
       ?>
     </ol>
   </section>
   <a class="back-index" href="admin_index.php">Go Back</a>
</body>
</html>
