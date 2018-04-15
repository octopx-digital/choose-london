<?php
  require_once('../includes/config.php');

  confirmLoggedIn();

  $id = $_SESSION['user_id'];
  $tbl = 'users';
  $col = 'user_id';
  $old = getSingle($tbl, $col, $id);
  $info = mysqli_fetch_array($old);
  // check if user has changed password and so, included date to user_last_login
  // if not, redirect to edit user page
  if(!$info['user_last_login']) {
    redirect_to('admin_edit_user.php');
  }
  // user has already logged in and changed password
  else {
    // check if user has already logged in
    // if yes, show last login date and time
    if(!is_null($_SESSION['user_last_login'])) {
      $lastLogin = "Last Login: ".date("l, F d, Y - h:i:sA", strtotime($_SESSION['user_last_login']));
    }
    // if no, show message
    else {
      $lastLogin = "This is your first Login.";
    }
    // set timezone
    date_default_timezone_set('America/Toronto');
    // get current hour
    $curtime = date("H");
    //check hour and show proper message
    if($curtime >= 6 && $curtime <= 11) {
      $messageTime = "Good Morning, ";
    }
    else if($curtime >= 12 && $curtime <=18) {
      $messageTime = "Good Afternoon, ";
    }
    else {
      $messageTime = "Good Evening, ";
    }
  }
 ?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png">
  <link rel="shortcut icon" href="../favicon.ico">
  <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
  <link rel="stylesheet" href="../css/main.css">
  <title>Admin | Home Page</title>
</head>
<body>
  <h1 class="hidden">Admin Home Page</h1>
  <header>
    <div class="admin-header">
      <nav>
        <h2 class="hidden">Main Navigation</h2>
        <ul>
          <li><a href="admin_index.php">Home</a></li>
          <li><a class="logout-button" href="../includes/caller.php?caller_id=logout">Logout</a></li>
        </ul>
      </nav>
      <img src="../images/logo_white.svg" alt="Choose London Logo">
  </div>
  </header>
  <main id="container" class="index-cont admin-container">
    <h2 class="greetings">Welcome to Admin Page</h2>
    <?php
      echo '<p class="welcome-message">'.$messageTime.'<span class="name">'.$_SESSION['user_name'].'</span></p>';
      echo '<p class="last-login">'.$lastLogin.'</p>';
    ?>

    <section class="functions">
      <h2 class="title">Content Operations</h2>
      <ul>
        <li><a href="list_all.php?tbl=section&order=name"><i class="ion-ios-film"></i>Sections</a></li>
        <li><a href="list_all.php?tbl=category&order=name"><i class="ion-ios-pricetags"></i>Categories</a></li>
        <li><a href="list_all.php?tbl=item&order=name"><i class="ion-happy"></i>Items</a></li>
        <li><a href="list_all.php?tbl=stories&order=name"><i class="ion-briefcase"></i>Stories</a></li>
      </ul>
    </section>

    <section class="functions">
      <h2 class="title">Admin Operations</h2>
      <ul>
        <li><a href="admin_create_user.php" title="Create User"><i class="ion-android-add-circle"></i>Create User</a></li>
        <li><a href="admin_edit_user.php" title="Edit User"><i class="ion-edit"></i>Edit User</a></li>
        <li><a href="admin_delete_user.php" title="Delete User"><i class="ion-trash-a"></i>Delete User</a></li>
      </ul>

    </section>
  </main>
</body>
</html>
