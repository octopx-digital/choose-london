<?php
  require_once('../includes/config.php');

  $tbl = $_GET['tbl'];
  $id = $_GET['id'];

 ?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="../css/main.css">
  <title>Admin | Edit <?php echo $tbl ?></title>
</head>
<body>
  <main id="container" class="create-cont">
    <section class="edit-row">


      <?php
        $col = "id";
        echo singleEdit($tbl, $col, $id);

       ?>
     </section>
     <a class="back-index movie" href="admin_index.php">Go Back</a>
   </main>
</body>
</html>
