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
  <main id="container" class="create-cont admin-container">
    <section class="edit-row">
      <?php
        $col = "id";
        echo singleEdit($tbl, $col, $id);

       ?>
     </section>
     <a class="back-index admin-button" href="admin_index.php">Go Back</a><br><br><br><br>
   </main>
</body>
</html>
