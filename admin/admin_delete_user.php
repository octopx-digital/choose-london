<?php
  require_once('../includes/config.php');

  $tbl = 'users';
  $order = 'user_fname';

  $users = getAll($tbl, $order);
 ?>

 <!DOCTYPE html>
 <html lang="en">
 <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <link rel="stylesheet" href="../css/main.css">
   <title>Admin | Delete User</title>
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
   <h1 class="hidden">Admin Delete User</h1>

   <main id="container" class="create-cont admin-container">
     <h2 class="greetings">Delete User</h2>
     <ul id="delete-list">
       <?php
         while($row = mysqli_fetch_array($users)) {
           echo "<li class=\"list-items\"><p>{$row['user_fname']}</p><a href=\"../includes/caller.php?caller_id=delete&id={$row['user_id']}\" class=\"delete-user-button\">Delete</a></li><br><br>";
         }
       ?>
     </ul>
     <a class="back-index admin-button" href="admin_index.php">Go Back</a>
   </main>
 </body>
 </html>
